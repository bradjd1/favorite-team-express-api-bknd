'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let teams = await queryInterface.bulkInsert("Teams", [
      { name: "Cubs", sport: "baseball", league: "MLB", city: "Chicago" },
      { name: "White Sox", sport: "baseball", league: "MLB", city: "Chicago" },
    ]);

    let players = await queryInterface.bulkInsert("Players", [
      { name: "Kyle Hendricks", teamId: 1, position: "pitcher" },
      { name: "Frank Schwindel", teamId: 1, position: "infielder" },
      { name: "Wilson Contreras", teamId: 1, position: "infielder" },
      { name: "Tim Anderson", teamId: 2, position: "infielder" },
      { name: "Jose Abreu", teamId: 2, position: "infielder" },
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
