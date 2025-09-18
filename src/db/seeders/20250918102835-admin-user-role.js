'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('UserRoles', [{
       roleId: 11,
       userId: 2,
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('UserRoles', null, {});
     
  }
};
