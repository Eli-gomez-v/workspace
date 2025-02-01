const { Student } = require('../models');

const getAll = async () => await Student.findAll();

const getById = async (id) => await Student.findByPk(id);

const getByEmail = async (email) => await Student.findOne({ where: { email } });

const insert = async (student) => await Student.create(student);

module.exports = {
  getAll,
  getById,
  getByEmail,
  insert,
};
