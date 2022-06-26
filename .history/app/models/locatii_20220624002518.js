'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locatii extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  sequelize.define({
    id_locatie: {
      type: TINYINT(8).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nume_locatie: {
      type: STRING(100),
      allowNull: false
    },
    adresa_locatie: {
      type: STRING(255),
      allowNull: false
    },
  }, {
    sequelize,
    freezeTableName: true,
    indexes: [
        {fields: ['nume_locatie','adresa_locatie']},
        {fields: ['adresa_locatie','nume_locatie']},
    ]
  });

  locatii.associate = (models) => {
    locatii.belongsToMany(models.produse,
      {through: 'inventar_produse',
      foreignKey: 'id_locatie',
      otherKey: 'id_produs'
      })
  };
  return locatii;
};
