/* eslint-disable no-unused-vars */

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      'SELECT id FROM "Users";',
    );

    if (users[0].length === 0) {
      throw new Error('No users found');
    }

    const userRows = users[0];

    return queryInterface.bulkInsert('Teachers', [
      {
        dni: '12345678A',
        name: 'Fausto',
        last_name: 'López',
        date_of_birth: '1980-01-01',
        user_id: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '87654321B',
        name: 'Itziar',
        last_name: 'Pérez',
        date_of_birth: '1985-05-15',
        user_id: userRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Teachers', null, {});
  },
};
