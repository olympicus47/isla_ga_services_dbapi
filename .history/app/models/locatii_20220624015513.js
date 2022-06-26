'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locatii extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Locatii.belongsToMany(models.locatii,
        {through: 'inventar_produse',
        foreignKey: 'id_locatie',
        otherKey: 'id_produs'
        })
    }
  }
    Locatii.init({
    id_locatie: {
      type: DataTypes.TINYINT(8).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nume_locatie: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    adresa_locatie: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: "Locatii",
    tableName: "locatii",
    indexes: [
        {fields: ['nume_locatie','adresa_locatie']},
        {fields: ['adresa_locatie','nume_locatie']},
    ]
  }, {sequelize})

  sequelize.models.modelName
  return Locatii();
};
