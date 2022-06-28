"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "locatii",
      {
        id_locatie: {
          type: Sequelize.TINYINT(8).UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nume_locatie: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        adresa_locatie: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        indexes: [
          { fields: ["nume_locatie", "adresa_locatie"] },
          { fields: ["adresa_locatie", "nume_locatie"] },
        ],
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("locatii");
  },
};
