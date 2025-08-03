"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const cuisines = require("../data/cuisines.json");
    cuisines.forEach((c) => {
      c.createdAt = c.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Cuisines", cuisines, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cuisines", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
