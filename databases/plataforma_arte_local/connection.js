const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('plataforma_arte_local', 'postgres', 'changeme', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;