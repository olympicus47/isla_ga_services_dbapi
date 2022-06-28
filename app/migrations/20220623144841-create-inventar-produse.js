"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "inventar_produse",
      {
        id_produs: {
          type: Sequelize.BIGINT(32).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
          references: {
            model: "produse",
            key: "id_produs",
          },
        },
        id_locatie: {
          type: Sequelize.TINYINT(8).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
          references: {
            model: "locatii",
            key: "id_locatie",
          },
        },
        stoc_curent: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        stoc_minim_dorit: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        cod_casa: {
          type: Sequelize.INTEGER(5),
          allowNull: false,
          defaultValue: 0,
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
          { fields: ["id_locatie", "id_produs"] },
          { fields: ["stoc_curent", "cod_casa", "stoc_minim_dorit"] },
          { fields: ["stoc_curent", "stoc_minim_dorit", "cod_casa"] },
          { fields: ["stoc_minim_dorit", "stoc_curent", "cod_casa"] },
          { fields: ["cod_casa", "stoc_curent", "stoc_minim_dorit"] },
          { fields: ["cod_casa", "stoc_minim_dorit", "stoc_curent"] },
          { fields: ["stoc_minim_dorit", "cod_casa", "stoc_curent"] },
        ],
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("inventar_produse");
  },
};
