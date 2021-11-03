module.exports = {
    get: {
        tags: ["Function operations"],
        description: "Get all functions",
        operationId: "getAllFunctions",
        parameters: [],
        responses: {
            200: {
                description: "Function were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/FunctionList",
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