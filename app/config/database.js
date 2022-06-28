const log = require('../lib/logger').child({ type: "database" });

module.exports = {
    "development": {
        "username": "dbapi",
        "password": "SSSP3C14l",
        "host": "localhost",
        "port": 3306,
        "database": "inventar_produse_dev",
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    },
    "test": {
        "username": "dbapi",
        "password": process.env.DB_PASS,
        "host": "localhost",
        "port": process.env.DB_PORT,
        "database": "inventar_produse_test",
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    },
    "production": {
        "username": "dbapi",
        "password": process.env.DB_PASS,
        "host": "localhost",
        "port": process.env.DB_PORT,
        "database": "inventar_produse",
        "dialect": "mysql",
        "logging": function (message) {
            log.debug(message);
        }
    }
};
