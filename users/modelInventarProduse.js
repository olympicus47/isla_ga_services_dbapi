const { DataTypes } = require('sequelize');

module.exports = modelInventarProduse;

function modelInventarProduse(sequelize) {
    const attributes = {
        id_produs: { type: DataTypes.BIGINT(32).UNSIGNED, allowNull: false, primaryKey: true},
        id_locatie: { type: DataTypes.TINYINT(8).UNSIGNED, allowNull: false, primaryKey: true},
        cantitate_produs: { type: DataTypes.INTEGER(10), allowNull: false, defaultValue: 0 },
    };

    const options = {
        freezeTableName: true,
    };

    return sequelize.define('inventar_produse', attributes, options);
}