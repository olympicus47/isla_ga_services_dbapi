'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventar_Produse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Inventar_Produse.belongsTo(models.produse, { foreignKey: 'id_produs'});
        Inventar_Produse.belongsTo(models.locatii, { foreignKey: 'id_locatie'});
    }
  }
  inventar_produse.init({
    id_produs: {
      type: DataTypes.BIGINT(32).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_locatie: {
      type: DataTypes.TINYINT(8).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    stoc_curent: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    stoc_minim_dorit: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    cod_casa: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    indexes: [
      {fields: ['id_locatie','id_produs']},
      {fields: ['stoc_curent', 'cod_casa', 'stoc_minim_dorit']},
      {fields: ['stoc_curent', 'stoc_minim_dorit', 'cod_casa']},
      {fields: ['stoc_minim_dorit', 'stoc_curent', 'cod_casa']},
      {fields: ['cod_casa', 'stoc_curent', 'stoc_minim_dorit']},
      {fields: ['cod_casa', 'stoc_minim_dorit', 'stoc_curent']},
      {fields: ['stoc_minim_dorit', 'cod_casa', 'stoc_curent']},
    ],
    sequelize,
    modelName: 'Inventar_Produse',
    tableName: 'inventar_produse',
    freezeTableName: true,
  });
  return inventar_produse;
};
