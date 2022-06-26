'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV;
const config = require(`${global.paths.config}/database`)[env];
const mysql = require('mysql2');
const { startCase } = require('lodash');
let db = {};

// createDbIfNotExists(config);

console.log(config);

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.user, config.password, config);
}

function getNormalizedNameOfModel(modelName) {
    return startCase(modelName).replace(/\s/g, '');
}


fs.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        // console.log(`${__dirname}       ${file}`);
        const normalizedName = getNormalizedNameOfModel(model.name);
        db[normalizedName] = model;
        console.log(`       ${model}        `);
    });

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
    }
});

db = {
    ...db,
    sequelize: sequelize,
    Sequelize: Sequelize,
};

db.sequelize.sync({force: false});

module.exports = db;

// function createDbIfNotExists(config){
//     const {host, user, password, port, database } = config;
//     const connection = mysql.createConnection({host, port, user, password});
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);
// }
