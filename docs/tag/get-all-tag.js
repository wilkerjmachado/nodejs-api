module.exports = {
    get: {
        tags: ["Tag operations"],
        description: "Get all tags",
        operationId: "getAllTags",
        parameters: [],
        responses: {
            200: {
                description: "Tag were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/TagList",
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
            }
        },
    },
};