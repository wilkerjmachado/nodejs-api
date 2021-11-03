module.exports = {
    post: {
        tags: ["Member operations"],
        description: "Add Tag to Member",
        operationId: "addTagToMember",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Member´s Id",
            }
        ],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/TagIdInput",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Tag added successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Member",
                        },
                    },
                },
            },
            400: {
                description: "Fields validation",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error4xx",
                        },
                    },
                },
            },
            500: {
                description: "Internal server error",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error5xx",
                        },
                    },
                },
            },
        },
    },
};