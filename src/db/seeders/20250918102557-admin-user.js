'use strict';

const {hashPassword} = require('../../helpers/passwordHelper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Users', [{
      firstName:'ken',
      lastName:'kibui',
      email:'ken@mwsi.com',
      password:await hashPassword('Admin@123'),
      isActive:true,
      CreatedAt: new Date(),
      UpdatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
