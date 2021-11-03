module.exports = {
    post: {
        tags: ["Member operations"],
        description: "Create Member",
        operationId: "createMember",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/MemberInput",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Member created successfully",
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