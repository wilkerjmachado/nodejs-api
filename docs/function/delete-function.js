module.exports = {
    delete: {
        tags: ["Function operations"],
        description: "Deleting a Function",
        operationId: "deleteFunction",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Deleting a done Function",
            },
        ],
        responses: {
            200: {
                description: "Function deleted successfully",
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