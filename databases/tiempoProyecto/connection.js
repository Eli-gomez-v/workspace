const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tiempoProyecto', 'postgres', 'changeme', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = {
  sequelize,
};
