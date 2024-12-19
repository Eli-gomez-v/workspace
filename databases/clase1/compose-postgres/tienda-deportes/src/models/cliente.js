const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('Cliente', {
  dni: {
    type: DataTypes.STRING(9),
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.TEXT,
  },
});

module.exports = Cliente;

// En Cliente.js
const Compra = require('./compra');

Cliente.hasMany(Compra, { foreignKey: 'dni_cliente' });
