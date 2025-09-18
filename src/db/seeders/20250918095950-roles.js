'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Roles', [{
       name: 'Admin',
       slug: 'admin',
       description: 'admin',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     },{
       name: 'HR Manager',
       slug: 'hr_manager',
       description: 'hr manager',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     },{
       name: 'HR Staff',
       slug: 'hr_staff',
       description: 'hr staff',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     },{
       name: 'Manager',
       slug: 'manager',
       description: 'manager',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     },{
       name: 'Employee',
       slug: 'employee',
       description: 'employee',
       isActive: true,
       CreatedAt: new Date(),
       UpdatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Roles', null, {});
    
  }
};
