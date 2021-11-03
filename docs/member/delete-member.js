module.exports = {
    delete: {
        tags: ["Member operations"],
        description: "Deleting a Member",
        operationId: "deleteMember",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Deleting a done Member",
            },
        ],
        responses: {
            200: {
                description: "Member deleted successfully",
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