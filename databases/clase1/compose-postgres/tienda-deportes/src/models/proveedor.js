const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Proveedor = sequelize.define('Proveedor', {
  nif: {
    type: DataTypes.STRING(9),
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.TEXT,
  },
});

module.exports = Proveedor;

// En Proveedor.js
const Producto = require('./producto');

Proveedor.belongsToMany(Producto, { through: 'Suministra', foreignKey: 'nif_proveedor' });
