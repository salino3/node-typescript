'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "rol", "role");
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "role", "rol");
  }
};
