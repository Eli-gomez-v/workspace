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

    return queryInterface.bulkInsert('Students', [
      {
        dni: '11223344C',
        name: 'Alice',
        last_name: 'Johnson',
        date_of_birth: '2000-02-20',
        teacher_id: teacherRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '22334455D',
        name: 'Bob',
        last_name: 'Brown',
        date_of_birth: '2001-03-25',
        teacher_id: teacherRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '33445566E',
        name: 'Charlie',
        last_name: 'Davis',
        date_of_birth: '2002-04-30',
        teacher_id: teacherRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '44556677F',
        name: 'David',
        last_name: 'Evans',
        date_of_birth: '2003-05-15',
        teacher_id: teacherRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '55667788G',
        name: 'Eve',
        last_name: 'Foster',
        date_of_birth: '2004-06-20',
        teacher_id: teacherRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '66778899H',
        name: 'Frank',
        last_name: 'Green',
        date_of_birth: '2005-07-25',
        teacher_id: teacherRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '77889900I',
        name: 'Grace',
        last_name: 'Harris',
        date_of_birth: '2006-08-30',
        teacher_id: teacherRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '88990011J',
        name: 'Hank',
        last_name: 'Ivy',
        date_of_birth: '2007-09-10',
        teacher_id: teacherRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '99001122K',
        name: 'Ivy',
        last_name: 'Jones',
        date_of_birth: '2008-10-15',
        teacher_id: teacherRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '00112233L',
        name: 'Jack',
        last_name: 'King',
        date_of_birth: '2009-11-20',
        teacher_id: teacherRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Students', null, {});
  },
};
