module.exports = {
    components: {
        schemas: {
            Tag: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "Tag identification number",
                        example: "617f0b2782adcc5c329481e0",
                    },
                    name: {
                        type: "string",
                        description: "Tag's name",
                        example: "JavaScript",
                    }
                },
            },
            TagList: {
                type: "array",
                items: {
                    $ref: '#/components/schemas/Tag'
                },
            },
            TagInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Tag's name",
                        example: "JavaScript",
                    }
                },
            },
            TagIdInput: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "Tag's id",
                        example: "617f0b2782adcc5c329481e0",
                    }
                },
            },
            Function: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "Function identification number",
                        example: "617f0b2782adcc5c329481e0",
                    },
                    name: {
                        type: "string",
                        description: "Function's name",
                        example: "Software Engineer",
                    }
                },
            },
            FunctionList: {
                type: "array",
                items: {
                    $ref: '#/components/schemas/Function'
                },
            },
            FunctionInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Function's name",
                        example: "Software Engineer",
                    }
                },
            },
            Member: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "Member identification number",
                        example: "617f0b2782adcc5c329481e0",
                    },
                    name: {
                        type: "string",
                        description: "Member's name",
                        example: "Fulano",
                    },
                    type: {
                        type: "string",
                        enum: ["EMPLOYEE", "CONTRACTOR"],
                        description: "Type of member",
                        example: "CONTRACTOR",
                    },
                    durationContract: {
                        type: "number",
                        description: "duration of the contract",
                        example: 1,
                    },
                    function: {
                        type: "object",
                        $ref: '#/components/schemas/Function'
                    },
                    tags: {
                        type: "array",
                        items: {
                            $ref: '#/components/schemas/Tag'
                        }

                    },
                },
            },
            MemberList: {
                type: "array",
                items: {
                    $ref: '#/components/schemas/Member'
                },
            },
            MemberInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Member's name",
                        example: "Fulano",
                    },
                    type: {
                        type: "string",
                        enum: ["EMPLOYEE", "CONTRACTOR"],
                        description: "Type of member",
                        example: "CONTRACTOR",
                    },
                    durationContract: {
                        type: "number",
                        description: "duration of the contract",
                        example: 1,
                    },
                    function: {
                        type: "object",
                        $ref: '#/components/schemas/Function'
                    },
                    tags: {
                        type: "array",
                        items: {
                            $ref: '#/components/schemas/Tag'
                        }

                    },
                },
            },
            Error4xx: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not found",
                    },
                    status: {
                        type: "number",
                        description: "Error internal code",
                        example: 404,
                    },
                },
            },
            Error5xx: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Internal Server Error",
                    },
                    status: {
                        type: "number",
                        description: "Error internal code",
                        example: 500,
                    },
                },
            },
        },
    },
};