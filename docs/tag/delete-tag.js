module.exports = {
    delete: {
        tags: ["Tag operations"],
        description: "Deleting a Tag",
        operationId: "deleteTag",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Deleting a done tag",
            },
        ],
        responses: {
            200: {
                description: "Tag deleted successfully",
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