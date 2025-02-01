// repositories/students.js
const db = require('../models');
// Forma abreviada de models/index.js
module.exports = {
  getAll() {
    return db.students.findAll({});
  },
  getById(id) {
    return db.students.findByPk(id);
  },
  getByEmail(email) { // Añadido en ejercicio 5
    return db.students.findOne({ where: { email } });
  },
  insert(data) {
    return db.students.create(data);
  },
};
