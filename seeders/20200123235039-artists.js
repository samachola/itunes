"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "artists",
      [
        {
          name: "Beyonce",
          bio: "Lorem ipsum sit amet"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artists", null, {});
  }
};
