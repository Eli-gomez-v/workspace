// Ruta de productos.js
const express = require('express');

const router = express.Router();
const productosController = require('../controllers/productos');

router.get('/', productosController.getAll);
router.get('/:codigo_producto', productosController.getById);
router.post('/', productosController.create);
router.put('/:codigo_producto', productosController.update);
router.delete('/:codigo_producto', productosController.delete);

module.exports = router;
// Controlador de productos.js
