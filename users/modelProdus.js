const { DataTypes } = require('sequelize');

module.exports = modelProdus;

function modelProdus(sequelize) {
    const attributes = {
        id_produs: { type: DataTypes.BIGINT(32).UNSIGNED, allowNull: false, autoIncrement: true, primaryKey: true},
        ean_produs: { type: DataTypes.BIGINT(62).UNSIGNED, allowNull: false },
        nume_produs: { type: DataTypes.STRING, allowNull: false },
        pret_produs: { type: DataTypes.DECIMAL(60,2), allowNull: false }
    };

    const options = {
        freezeTableName: true,
    };

    return sequelize.define('produse', attributes, options);
}