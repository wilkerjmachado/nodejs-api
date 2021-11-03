module.exports = {
    patch: {
        tags: ["Member operations"],
        description: "Update Member",
        operationId: "updateMember",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Id of Member to be updated",
            },
        ],
        responses: {
            200: {
                description: "Member updated successfully",
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