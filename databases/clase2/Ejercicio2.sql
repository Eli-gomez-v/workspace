
-- Ejercicio clase 2 
/* Basándonos en el modelo de entidad-relación definido en la Clase 1:
Ejercicio 1
Se le contrata para diseñar una base de datos que permita apoyar en la gestión de
ventas de una tienda de deportes.
La tienda necesita tener el control de los proveedores, clientes y productos.
Los datos de los clientes que quiere manejar son nombre, apellidos, dni y dirección.
Los productos tienen un código de identificación, descripción, nombre y precio unitario.
Para poder identificar a los proveedores deben almacenar el NIF, nombre y dirección.

Realizar las siguientes acciones:
1. Creación de las tablas que sean necesarias
2. Insertar algunos registros en cada una de ellas
3. Realizar las siguientes consultas sql:
 Obtener el lista de los proveedores que tiene la tienda
 Consultar si existe algún cliente que se llame Mario
 Obtener el listado de los productos de la tienda ordenados por precio

Para realizar el ejercicio se puede utilizar PGAdmin o directamente los comandos en
consola, pero para poder corregirlo necesito un documento en el que me paséis las
consultas sql utilizadas en cada caso (tanto para la creación de las tablas, la inserción de
los datos, como de las consultas)*/

-- Eliminar tablas si existen
DROP TABLE IF EXISTS Cliente CASCADE;
DROP TABLE IF EXISTS Producto CASCADE;
DROP TABLE IF EXISTS Proveedor CASCADE;
DROP TABLE IF EXISTS Compra CASCADE;
DROP TABLE IF EXISTS Suministra CASCADE;
DROP TABLE IF EXISTS DetalleCompra CASCADE;

-- Crear tabla Cliente
CREATE TABLE Cliente (
    dni VARCHAR(9) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    direccion TEXT
);

-- Crear tabla Producto
CREATE TABLE Producto (
    codigo_producto SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio_unitario DECIMAL(10, 2) NOT NULL
);

-- Crear tabla Proveedor
CREATE TABLE Proveedor (
    nif VARCHAR(9) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion TEXT
);

-- Crear tabla Compra
CREATE TABLE Compra (
    id_compra SERIAL PRIMARY KEY,
    dni_cliente VARCHAR(9) REFERENCES Cliente(dni),
    fecha_compra DATE
);

-- Crear tabla DetalleCompra
CREATE TABLE DetalleCompra (
    id_compra INTEGER REFERENCES Compra(id_compra),
    codigo_producto INTEGER REFERENCES Producto(codigo_producto),
    cantidad INTEGER,
    precio_unitario DECIMAL(10, 2),
    PRIMARY KEY (id_compra, codigo_producto)
);

-- Crear tabla Suministra
CREATE TABLE Suministra (
    nif_proveedor VARCHAR(9) REFERENCES Proveedor(nif),
    codigo_producto INTEGER REFERENCES Producto(codigo_producto),
    fecha_suministro DATE,
    cantidad INTEGER,
    PRIMARY KEY (nif_proveedor, codigo_producto)
);
-- Insertar datos en Cliente
INSERT INTO Cliente (dni, nombre, apellidos, direccion) VALUES
('75888991X', 'Mario', 'Paniagua Gil', 'Avenida Pio XII, 35');
('12345678A', 'Juan', 'Pérez Gómez', 'Calle Mayor, 1'),
('87654321B', 'Ana', 'García López', 'Avenida Principal, 123');

-- Consultar si existe algún cliente que se llame Mario
SELECT * FROM Cliente WHERE nombre LIKE '%Mario%';
"dni"	"nombre"	"apellidos"	"direccion"
"75888991X"	"Mario"	"Paniagua Gil"	"Avenida Pio XII, 35"
-- Insertar datos en Producto
INSERT INTO Producto (nombre, descripcion, precio_unitario) VALUES
('Balón Fútbol', 'Balón de fútbol de cuero', 25.00),
('Raqueta Tenis', 'Raqueta de tenis profesional', 120.50);

-- Obtener el listado de los productos de la tienda ordenados por precio
SELECT nombre, precio_unitario FROM Producto ORDER BY precio_unitario ASC;
"nombre"	"precio_unitario"
"Balón Fútbol"	25.00
"Raqueta Tenis"	120.50

-- Insertar datos en Proveedor
INSERT INTO Proveedor (nif, nombre, direccion) VALUES
('A12345678', 'Deportes ACME', 'Avenida Principal, 123'),
('B87654321', 'Equipamiento Deportivo SL', 'Calle Fábrica, 7');

-- Hacer un listado de los proveedores
SELECT * FROM Proveedor;
"nif","nombre","direccion"
"A12345678","Deportes ACME","Avenida Principal, 123"
"B87654321","Equipamiento Deportivo SL","Calle Fábrica, 7"
-- Insertar datos en Compra
INSERT INTO Compra (dni_cliente, fecha_compra) VALUES
('12345678A', '2024-12-10'),
('87654321B', '2024-12-11');

-- Insertar datos en DetalleCompra
INSERT INTO DetalleCompra (id_compra, codigo_producto, cantidad, precio_unitario) VALUES
(1, 1, 1, 25.00),
(2, 2, 1, 120.50);

-- Insertar datos en Suministra
INSERT INTO Suministra (nif_proveedor, codigo_producto, fecha_suministro, cantidad) VALUES
('A12345678', '2024-12-01', 100),
('B87654321', '2024-12-05', 50);