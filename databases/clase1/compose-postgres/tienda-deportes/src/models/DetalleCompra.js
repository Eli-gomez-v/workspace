const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DetalleCompra = sequelize.define('DetalleCompra', {
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = DetalleCompra;
