"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "demo@demo.com"
        },
        {
          firstName: "Max",
          lastName: "Garcia",
          email: "mgrozado@gmail.com"
        },
        {
          firstName: "Test",
          lastName: "Test2",
          email: "test@gmail.com"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
