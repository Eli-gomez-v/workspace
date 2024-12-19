const sequelize = require('../src/config/db.js');
const Cliente = require('../src/models/cliente.js');
const Producto = require('../src/models/producto.js');
const Proveedor = require('../src/models/proveedor.js');
const Compra = require('../src/models/compra.js');
const DetalleCompra = require('../src/models/DetalleCompra.js');
const Suministra = require('../src/models/suministra.js');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Cuidado: 'force: true' eliminará las tablas existentes
    console.log('Base de datos sincronizada');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

syncDatabase();
