const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Compra = sequelize.define('Compra', {
  id_compra: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha_compra: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Compra;

// En Compra.js
const Cliente = require('./cliente');

Compra.belongsTo(Cliente, { foreignKey: 'dni_cliente' });

// En Compra.js
const DetalleCompra = require('./DetalleCompra');
const Producto = require('./producto');

Compra.belongsToMany(Producto, { through: DetalleCompra, foreignKey: 'id_compra' });
