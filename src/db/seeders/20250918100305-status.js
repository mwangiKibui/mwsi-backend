'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Statuses', [{
       name: 'Active',
       slug: 'active',
       description: 'active',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
      },{
       name: 'In Active',
       slug: 'inactive',
       description: 'inactive',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
      },{
       name: 'Terminated',
       slug: 'terminated',
       description: 'terminated',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Statuses', null, {});
  }
};
