"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "albums",
      [
        {
          name: "Homecoming",
          review: "Lorem ipsum sit amet",
          price: 1.2,
          artistId: "19de8e87-c04f-4c8a-ba91-bd8ab8fce94a"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("albums", null, {});
  }
};
