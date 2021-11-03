module.exports = {
    get: {
        tags: ["Member operations"],
        description: "Get a Member",
        operationId: "getMember",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "A single Member id",
            },
        ],
        responses: {
            200: {
                description: "Member is obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Member",
                        },
                    },
                },
            },
            404: {
                description: "Member is not found",
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