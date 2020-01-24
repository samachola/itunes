"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "songs",
      [
        {
          title: "Wagwan Awoh",
          duration: 1.27,
          artistId: "19de8e87-c04f-4c8a-ba91-bd8ab8fce94a",
          albumId: "285de377-83eb-46ff-9ede-6694060d0eeb"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("songs", null, {});
  }
};
