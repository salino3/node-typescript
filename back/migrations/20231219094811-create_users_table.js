'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.createTable("users", {
   id: {
     type: Sequelize.UUID,
     defaultValue: () => uuidv4(),
     primaryKey: true,
     allowNull: false,
   },
   name: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   surname: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   email: {
     type: Sequelize.STRING,
     allowNull: false,
     unique: true,
   },
   password: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   age: {
     type: Sequelize.INTEGER,
     allowNull: false,
   },
   job: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   isAdult: {
     type: Sequelize.BOOLEAN,
     allowNull: false,
   },
   gender: {
     type: Sequelize.ENUM("female", "male", "other", "prefer not to say"),
     allowNull: true,
     defaultValue: "prefer not to say",
   },
   createdAt: {
     allowNull: false,
     type: Sequelize.DATE,
     defaultValue: Sequelize.NOW,
   },
   updatedAt: {
     allowNull: false,
     type: Sequelize.DATE,
     defaultValue: Sequelize.NOW,
   },
 });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  
  }
};
