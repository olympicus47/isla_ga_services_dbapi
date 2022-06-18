const config = require('config.json');
const mysql = require('mysql2/promise');
const { modelProduse , modelLocatii, modelInventarProduse} = require('../modele/modele');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    console.log(database);
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.produse = modelProduse(sequelize);
    db.locatii = modelLocatii(sequelize);
    db.inventar = modelInventarProduse(sequelize);
    db.produse.belongsToMany(db.locatii, {through: db.inventar,
                                          foreignKey: 'id_produs',
                                          otherkey: 'id_locatie'});
    db.locatii.belongsToMany(db.produse, {through: db.inventar,
                                          foreignKey: 'id_locatie',
                                          otherkey: 'id_produs'});

    // sync all models with database
    await sequelize.sync();
    console.log('initial database sync done');
}