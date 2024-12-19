const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Suministra = sequelize.define('Suministra', {
  fecha_suministro: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Suministra;
