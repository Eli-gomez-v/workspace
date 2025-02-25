/* eslint-disable no-unused-vars */

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password', 10);
    const users = [
      {
        email: 'admin@example.com',
        password: hashedPassword,
        type: 'admin',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'fausto.lopez@example.com',
        password: hashedPassword,
        type: 'teacher', // Tipo específico para profesores
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'itziar.perez@example.com',
        password: hashedPassword,
        type: 'teacher',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user@example.com',
        password: hashedPassword,
        type: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'inactive@example.com',
        password: hashedPassword,
        type: 'user',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
