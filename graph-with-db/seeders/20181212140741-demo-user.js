"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "demo@demo.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Max",
          lastName: "Garcia",
          email: "mgrozado@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Test",
          lastName: "Test2",
          email: "testg@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
