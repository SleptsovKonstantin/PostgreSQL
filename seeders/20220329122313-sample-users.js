"use strict";

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

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "test1",
          lastName: "test2",
          email: "test3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "111test1",
          lastName: "1test2",
          email: "1test3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "222test1",
          lastName: "2test2",
          email: "2test3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
