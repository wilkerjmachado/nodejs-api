module.exports = {
    get: {
        tags: ["Member operations"],
        description: "Get Members by tagId",
        operationId: "getMembersByTagId",
        parameters: [
            {
                name: "id_tag",
                in: "path",
                required: true,
                description: "A single Tag id",
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