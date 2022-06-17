const { DataTypes } = require('sequelize');

module.exports = modelLocatii;

function modelLocatii(sequelize) {
    const attributes = {
        id_locatie: { type: DataTypes.TINYINT(8).UNSIGNED, allowNull: false, autoIncrement: true, primaryKey: true},
        nume_locatie: { type: DataTypes.STRING(100), allowNull: false },
        adresa_locatie: { type: DataTypes.STRING(255), allowNull: false },
    };

    const options = {
        freezeTableName: true,
    };

    return sequelize.define('locatii', attributes, options);
}