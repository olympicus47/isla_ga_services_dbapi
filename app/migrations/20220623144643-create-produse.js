'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produse', {
      id_produs: {
        type: Sequelize.BIGINT(32).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      ean_produs: {
        type: Sequelize.BIGINT(62).UNSIGNED,
        allowNull: false
      },
      nume_produs: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pret_produs: {
        type: Sequelize.DECIMAL(60,2),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      indexes: [
        {fields: ['ean_produs','nume_produs' ,'pret_produs']},
        {fields: ['ean_produs', 'pret_produs' ,'nume_produs']},
        {fields: ['pret_produs', 'ean_produs' ,'nume_produs']},
        {fields: ['nume_produs', 'ean_produs' ,'pret_produs']},
        {fields: ['pret_produs','nume_produs' ,'ean_produs']},
        {fields: ['nume_produs', 'pret_produs' ,'ean_produs']},
    ]
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produse');
  }
};