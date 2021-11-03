const info = require('./info');
const server = require('./server');
const schemas = require('./schemas');
const path = require('./path');

module.exports = {
    ...info,
    ...server,
    ...schemas,
    ...path
};