module.exports = {
    get: {
        tags: ["Function operations"],
        description: "Get a Function",
        operationId: "getFunction",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "A single function id",
            },
        ],
        responses: {
            200: {
                description: "Function is obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Function",
                        },
                    },
                },
            },
            404: {
                description: "Function is not found",
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