/* eslint-disable no-unused-vars */

module.exports = {
  async up(queryInterface, Sequelize) {
    const students = await queryInterface.sequelize.query(
      'SELECT id FROM "Students";',
    );

    if (students[0].length === 0) {
      throw new Error('No students found');
    }

    const studentRows = students[0];

    const classes = await queryInterface.sequelize.query(
      'SELECT id FROM "Classes";',
    );

    if (classes[0].length === 0) {
      throw new Error('No classes found');
    }

    const classRows = classes[0];

    return queryInterface.bulkInsert('StudentClasses', [
      {
        student_id: studentRows[0].id,
        class_id: classRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[1].id,
        class_id: classRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[2].id,
        class_id: classRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[3].id,
        class_id: classRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[4].id,
        class_id: classRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[5].id,
        class_id: classRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[6].id,
        class_id: classRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[7].id,
        class_id: classRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[8].id,
        class_id: classRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: studentRows[9].id,
        class_id: classRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('StudentClasses', null, {});
  },
};
