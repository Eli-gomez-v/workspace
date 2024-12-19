const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tienda_deportes', 'postgres', 'changeme', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
