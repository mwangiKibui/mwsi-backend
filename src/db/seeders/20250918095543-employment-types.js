'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('EmploymentTypes', [{
       name: 'Permanent',
       slug: 'permanent',
       description: 'permanent',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     },
     {
       name: 'Full Time',
       slug: 'fulltime',
       description: 'fulltime',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     },
     {
       name: 'Contract',
       slug: 'contract',
       description: 'contract',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('EmploymentTypes', null, {});
    
  }
};
