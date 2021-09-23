'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let teams = await queryInterface.bulkInsert("Teams", [
      { name: "Cubs", sport: "baseball", league: "MLB", city: "Chicago" },
      { name: "White Sox", sport: "baseball", league: "MLB", city: "Chicago" },
    ]);

    let players = await queryInterface.bulkInsert("Players", [
      { name: "Kyle Hendricks", teamId: 1 },
      { name: "Frank Schwindel", teamId: 1 },
      { name: "Wilson Contreras", teamId: 1 },
      { name: "Tim Anderson", teamId: 2 },
      { name: "Jose Abreu", teamId: 2 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
