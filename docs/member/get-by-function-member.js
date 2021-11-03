module.exports = {
    get: {
        tags: ["Member operations"],
        description: "Get Members by functionId",
        operationId: "getMembersByFunctionId",
        parameters: [
            {
                name: "id_function",
                in: "path",
                required: true,
                description: "A single Function id",
            },
        ],
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