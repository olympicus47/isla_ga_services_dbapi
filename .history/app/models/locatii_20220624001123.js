'use strict';
module.exports = function (sequelize, DataTypes) {
 const {TINYINT, STRING} = DataTypes;
  const locatii = sequelize.define('locatii', {
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