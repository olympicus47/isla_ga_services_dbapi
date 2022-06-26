const log = require('../lib/logger').child({ type: "database" });

module.exports = {
    "development": {
        "host": "localhost",
        "user": "dbapi",
        "password": "SSSP3C14l",
        "database": "inventar_produse_dev",
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    },
    "test": {
        "host": "localhost",
        "user": "dbapi",
        "password": "SSSP3C14l",
        "database": "inventar_produse_test",
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    },
    "production": {
        "host": "localhost",
        "user": "dbapi",
        "password": "SSSP3C14l",
        "database": "inventar_produse",
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    }
};
