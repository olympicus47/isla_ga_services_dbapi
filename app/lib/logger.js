const bunyan = require('bunyan');

module.exports = bunyan.createLogger({
    "name": "dbapi",
    "level": 10,
});
