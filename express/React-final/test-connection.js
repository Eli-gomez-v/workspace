const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express-db-egomez', 'postgres', '1234', {
  host: '127.0.0.1',
  port: 5433,
  dialect: 'postgres',
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
