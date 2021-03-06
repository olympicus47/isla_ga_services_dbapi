"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    const { INTEGER, STRING, DATE, NOW } = DataTypes;
    return queryInterface.createTable("users", {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      email: {
        type: STRING,
        field: "email",
        unique: true,
        allowNull: false,
      },
      nume: {
        type: STRING,
        field: "nume",
      },
      prenume: {
        type: STRING,
        field: "prenume",
      },
      password: {
        type: STRING,
        field: "password",
        allowNull: false,
      },
      createdAt: {
        type: DATE,
        field: "created_at",
        defaultValue: NOW,
      },
      updatedAt: {
        type: DATE,
        field: "updated_at",
        defaultValue: NOW,
      },
      deletedAt: {
        type: DATE,
        field: "deleted_at",
        defaultValue: null,
      },
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable("users");
  },
};
