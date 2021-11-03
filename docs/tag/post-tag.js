module.exports = {
    post: {
        tags: ["Tag operations"],
        description: "Create tag",
        operationId: "createTag",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/TagInput",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Tag created successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Tag",
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