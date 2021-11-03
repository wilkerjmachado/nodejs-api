module.exports = {
    get: {
        tags: ["Tag operations"],
        description: "Get a tag",
        operationId: "getTag",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "A single tag id",
            },
        ],
        responses: {
            200: {
                description: "Tag is obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Tag",
                        },
                    },
                },
            },
            404: {
                description: "Tag is not found",
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
            }
        },
    },
};