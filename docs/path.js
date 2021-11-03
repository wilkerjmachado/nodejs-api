const getAllTag = require('./tag/get-all-tag');
const getTag = require('./tag/get-tag');
const postTag = require('./tag/post-tag');
const removeTag = require('./tag/delete-tag');
const patchTag = require('./tag/patch-tag');

const getAllFunction = require('./function/get-all-function');
const getFunction = require('./function/get-function');
const postFunction = require('./function/post-function');
const removeFunction = require('./function/delete-function');
const patchFunction = require('./function/patch-function');

const getAllMember = require('./member/get-all-member');
const getMember = require('./member/get-member');
const postMember = require('./member/post-member');
const removeMember = require('./member/delete-member');
const patchMember = require('./member/patch-member');
const getByFunctionMember = require('./member/get-by-function-member');
const getByTagMember = require('./member/get-by-tag-member');
const addTagMember = require('./member/add-tag-member');
const deleteTagMember = require('./member/delete-tag-member');

module.exports = {
    paths:{
        '/tag': {
            ...getAllTag,
            ...postTag
        },
        '/tag/{id}': {
            ...getTag,
            ...removeTag,
            ...patchTag
        },
        '/function': {
            ...getAllFunction,
            ...postFunction
        },
        '/function/{id}': {
            ...getFunction,
            ...removeFunction,
            ...patchFunction
        },
        '/member': {
            ...getAllMember,
            ...postMember
        },
        '/member/{id}': {
            ...getMember,
            ...removeMember,
            ...patchMember
        },
        '/member/{id}/tag': {
            ...addTagMember
        },
        '/member/{id}/tag/{id_tag}': {
            ...deleteTagMember
        },
        '/member/tag/{id_tag}': {
            ...getByTagMember
        },
        '/member/function/{id_function}': {
            ...getByFunctionMember
        }
    }
};