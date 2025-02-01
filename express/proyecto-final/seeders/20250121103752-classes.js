/* eslint-disable no-unused-vars */

module.exports = {
  async up(queryInterface, Sequelize) {
    const teachers = await queryInterface.sequelize.query(
      'SELECT id FROM "Teachers";',
    );

    if (teachers[0].length === 0) {
      throw new Error('No teachers found');
    }

    const teacherRows = teachers[0];

    return queryInterface.bulkInsert('Classes', [
      {
        name: 'Express',
        teacher_id: teacherRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'React',
        teacher_id: teacherRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Classes', null, {});
  },
};
