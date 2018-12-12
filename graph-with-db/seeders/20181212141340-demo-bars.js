"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bars",
      [
        {
          name: "Alto Bar",
          address: "Uspallata 2101"
        },
        {
          name: "Los Galgos",
          address: "Corrientes 2100"
        },
        {
          name: "416 Snack Bar",
          address: "Carranza y Costa Rica"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bars", null, {});
  }
};
