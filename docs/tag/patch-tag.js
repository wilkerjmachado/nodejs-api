module.exports = {
    patch: {
        tags: ["Tag operations"],
        description: "Update Tag",
        operationId: "updateTag",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Id of tag to be updated",
            },
        ],
        responses: {
            200: {
                description: "Tag updated successfully",
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