module.exports = {
    post: {
        tags: ["Function operations"],
        description: "Create Function",
        operationId: "createFunction",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/FunctionInput",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Function created successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Function",
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