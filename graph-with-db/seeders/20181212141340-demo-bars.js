"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bars",
      [
        {
          name: "Alto Bar",
          address: "Uspallata 2101",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los Galgos",
          address: "Corrientes 2100",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "416 Snack Bar",
          address: "Carranza y Costa Rica",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bars", null, {});
  }
};
