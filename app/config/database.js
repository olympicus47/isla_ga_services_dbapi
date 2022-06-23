const log = require('../lib/logger').child({ type: "database" });

module.exports = {
    "development": {
        "user": "dbapi",
        "password": "SSSP3C14l",
        "database": "inventar_produse_dev",
        "host": "localhost",
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    },
    "test": {
        "user": "dbapi",
        "password": "SSSP3C14l",
        "database": "inventar_produse_test",
        "host": "localhost",
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    },
    "production": {
        "user": "dbapi",
        "password": "SSSP3C14l",
        "database": "inventar_produse",
        "host": "localhost",
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    }
};
