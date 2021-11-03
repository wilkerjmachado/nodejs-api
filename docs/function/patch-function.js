module.exports = {
    patch: {
        tags: ["Function operations"],
        description: "Update Function",
        operationId: "updateFunction",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Id of Function to be updated",
            },
        ],
        responses: {
            200: {
                description: "Function updated successfully",
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