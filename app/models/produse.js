'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
          *
	 *realtie definita pe tabelul de joctiune deoarece sequelize nu formeaza realtii decat 
	 *daca sunt definite doar de-o sinngura parte a relatiei
	 */
    static associate(models) {
        //Produse.belongsToMany(models.Locatii,
        //{through: 'inventar_produse',
        //foreignKey: 'id_produs',
        //otherKey: 'id_locatie'
        //})
      }
    }

  Produse.init({
    id_produs: {
      type: DataTypes.BIGINT(32).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ean_produs: {
      type: DataTypes.BIGINT(62).UNSIGNED,
      allowNull: false
    },
    nume_produs: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pret_produs: {
      type: DataTypes.DECIMAL(60,2),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Produse',
    tableName: 'produse',
    freezeTableName: true,
    indexes: [
      {fields: ['ean_produs','nume_produs' ,'pret_produs']},
      {fields: ['ean_produs', 'pret_produs' ,'nume_produs']},
      {fields: ['pret_produs', 'ean_produs' ,'nume_produs']},
      {fields: ['nume_produs', 'ean_produs' ,'pret_produs']},
      {fields: ['pret_produs','nume_produs' ,'ean_produs']},
      {fields: ['nume_produs', 'pret_produs' ,'ean_produs']},
  ]
  })
  return Produse;
};
