const { DataTypes } = require('sequelize');

module.exports = modelCoduriCasa;

function modelCoduriCasa(sequelize) {
    const attributes = {
        id_produs: { type: DataTypes.BIGINT(32).UNSIGNED, allowNull: false, primaryKey: true},
        id_locatie: { type: DataTypes.TINYINT(8).UNSIGNED, allowNull: false, primaryKey: true},
        cod_casa: { type: DataTypes.INTEGER(5), allowNull: false, defaultValue: 0 },
    };

    const options = {
        freezeTableName: true,
    };

    return sequelize.define('coduri_casa', attributes, options);
}