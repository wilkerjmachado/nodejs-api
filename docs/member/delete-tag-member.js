module.exports = {
    delete: {
        tags: ["Member operations"],
        description: "Deleting member's tag",
        operationId: "deleteMemberTag",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Member´s Id",
            },
            {
                name: "id_tag",
                in: "path",
                required: true,
                description: "A single Tag id",
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