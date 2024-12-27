const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Producto = sequelize.define('Producto', {
  codigo_producto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = Producto;

// En Producto.js
const Proveedor = require('./proveedor');

Producto.belongsToMany(Proveedor, { through: 'Suministra', foreignKey: 'codigo_producto' });

// En Producto.js
const Compra = require('./compra');
const DetalleCompra = require('./DetalleCompra');

Producto.belongsToMany(Compra, { through: DetalleCompra, foreignKey: 'codigo_producto' });
