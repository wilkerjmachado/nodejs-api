module.exports = {
    get: {
        tags: ["Member operations"],
        description: "Get all Members",
        operationId: "getAllMembers",
        parameters: [],
        responses: {
            200: {
                description: "Member were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/MemberList",
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