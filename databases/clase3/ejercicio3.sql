/*==================*/
Databases: Clase 3
/*===================*/
/*-------------------------------------------------------------------------------------*/
Constrains y tablas relacionales
El modelo relacional consiste en trasladar a tablas el modelo entidad-relación donde
almacenar la información. Cada entidad tendrá su tabla, la cual tendrá sus columnas
(atributos) y sus filas (registros).
Ejercicio
Basándonos en el modelo de entidad-relación definido en la Clase 1 y Clase 2, realizar las
siguientes acciones:
1. Borrar los registro de las tablas creados en el ejercicio de la Clase 2
2. Modificar las tablas para añadir las PrimaryKey
3. Modificar/crear tabla si es necesario para definir la relación entre producto-proveedor
(1:N), definiendo las ForeingKey correspondientes
4. Modificar/crear tabla para definir la relación entre producto-cliente(N:M), definiendo
las ForeingKey correspondientes
5. (OPCIONAL) Os animo que insertéis de nuevo registros en las tablas y hagáis alguna
consulta con JOINs para que practiquéis(encantada de revisar todo lo que me mandéis y
ayudaros en lo que haga falta)
/*------------------------------------------------------------------------------------------*/

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
('12345678A', 'Juan', 'Pérez Gómez', 'Calle Mayor, 1'),
('87654321B', 'Ana', 'García López', 'Avenida Principal, 123');
-- Insertar más datos en Cliente
INSERT INTO Cliente (dni, nombre, apellidos, direccion) VALUES
('98765432C', 'Luis', 'Martínez Sánchez', 'Calle Secundaria, 45'),
('54321678D', 'María', 'Rodríguez Fernández', 'Plaza Mayor, 10');


-- Insertar datos en Producto
INSERT INTO Producto (nombre, descripcion, precio_unitario) VALUES
('Balón Fútbol', 'Balón de fútbol de cuero', 25.00),
('Raqueta Tenis', 'Raqueta de tenis profesional', 120.50),
('Zapatillas Running', 'Zapatillas para correr', 80.00),
('Balón Baloncesto', 'Balón de baloncesto talla 7', 35.00);

-- Insertar datos en Proveedor
INSERT INTO Proveedor (nif, nombre, direccion) VALUES
('A12345678', 'Deportes ACME', 'Avenida Principal, 123'),
('B87654321', 'Equipamiento Deportivo SL', 'Calle Fábrica, 7'),
('C98765432', 'Proveedor Zapatos', 'Calle Mayor, 10'),
('D54321678', 'Proveedor Baloncesto', 'Avenida del Deporte, 5');

-- Insertar datos en Compra
INSERT INTO Compra (dni_cliente, fecha_compra) VALUES
('12345678A', '2024-12-10'),
('87654321B', '2024-12-11'),
('98765432C', '2024-12-12'),
('54321678D', '2024-12-13');

-- Insertar datos en DetalleCompra
INSERT INTO DetalleCompra (id_compra, codigo_producto, cantidad, precio_unitario) VALUES
(1, 1, 1, 25.00),
(2, 2, 1, 120.50),
(3, 3, 2, 80.00),  -- Luis compra 2 zapatillas
(4, 4, 1, 35.00);  -- María compra 1 balón de baloncesto

-- Insertar datos en Suministra
INSERT INTO Suministra (nif_proveedor, codigo_producto, fecha_suministro, cantidad) VALUES
('A12345678', 1, '2024-12-01', 100),
('B87654321', 2, '2024-12-05', 50),
('C98765432', 3, '2024-12-08', 60),
('D54321678', 4, '2024-12-09', 80);

-- Consulta con JOIN
SELECT c.nombre AS nombre_cliente, p.nombre AS nombre_producto
FROM Cliente c
JOIN Compra co ON c.dni = co.dni_cliente
JOIN DetalleCompra dc ON co.id_compra = dc.id_compra
JOIN Producto p ON dc.codigo_producto = p.codigo_producto;

"Juan"	"Balón Fútbol"
"Ana"	"Raqueta Tenis"
"Luis"	"Zapatillas Running"
"María"	"Balón Baloncesto"

-- Obtener la lista de proveedores con el número de productos que suministran
SELECT pr.nombre AS nombre_proveedor, COUNT(s.codigo_producto) AS numero_productos
FROM Proveedor pr
JOIN Suministra s ON pr.nif = s.nif_proveedor
GROUP BY pr.nombre;
"Equipamiento Deportivo SL"	1
"Proveedor Baloncesto"	1
"Deportes ACME"	1
"Proveedor Zapatos"	1
-- Obtener el total gastado por cada cliente
SELECT c.nombre AS nombre_cliente, SUM(dc.cantidad * dc.precio_unitario) AS total_gastado
FROM Cliente c
JOIN Compra co ON c.dni = co.dni_cliente
JOIN DetalleCompra dc ON co.id_compra = dc.id_compra
GROUP BY c.nombre;
"Juan"	25.00
"María"	35.00
"Ana"	120.50
"Luis"	160.00

--Crea funciones para realizar cálculos o validaciones comunes, como calcular el total de una compra o validar el formato de un DNI.

CREATE FUNCTION calcular_total_compra(id_compra INTEGER)
RETURNS DECIMAL(10,2) AS $$
BEGIN
  RETURN (SELECT SUM(cantidad * precio_unitario) 
          FROM DetalleCompra 
          WHERE id_compra = calcular_total_compra.id_compra);
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE FUNCTION calcular_total_compra(id_compra INTEGER)
RETURNS DECIMAL(10,2) AS $$
BEGIN
  RETURN (
    SELECT SUM(cantidad * precio_unitario) 
    FROM DetalleCompra 
    WHERE DetalleCompra.id_compra = calcular_total_compra.id_compra  -- Califica la columna
  );
END;
$$ LANGUAGE plpgsql;
-- Calcula el total de la compra con id_compra = 1
SELECT calcular_total_compra(1); 
25.00
-- Calcula el total de la compra con id_compra = 2
SELECT calcular_total_compra(2);
120.50

-- Validar el formato de un DNI
CREATE OR REPLACE FUNCTION validar_dni(dni TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  -- Verifica si el DNI tiene 9 caracteres
  IF length(dni) <> 9 THEN -- Comprueba la longgitud y que no sea distinta a 9
    RETURN FALSE;
  END IF;

  -- Verifica si los primeros 8 caracteres son números
  IF substring(dni, 1, 8) !~ '^[0-9]+$' THEN -- Extrae 8 1º caracteres y verifica si no coinciden
    RETURN FALSE;
  END IF;

  -- Verifica si el último carácter es una letra
  IF substring(dni, 9, 1) !~ '^[A-Z]$' THEN
    RETURN FALSE;
  END IF;

  RETURN TRUE;
END;
$$ LANGUAGE plpgsql;
SELECT validar_dni('12345678A'); -- Devuelve TRUE
true
SELECT validar_dni('123456789'); -- Devuelve FALSE (no termina en letra)
false
SELECT validar_dni('1234567X');  -- Devuelve FALSE (no tiene 9 caracteres)
false

/*======================================*/
    Ejercicio 3
/*======================================*/
-- Crear tabla libros
create table libros(
  codigo SERIAL,
  titulo varchar(40) not null,
  autor varchar(20) default 'Desconocido',
  primary key (codigo)
 );

-- Crear tabla socios
 create table socios(
  documento char(8) not null,
  nombre varchar(30),
  domicilio varchar(30),
  primary key (documento)
 );

--Crear tabla prestamos
 create table prestamos(
  documento char(8) not null,
  codigolibro int,
  fechaprestamo date not null,
  fechadevolucion date,
  primary key (codigolibro,fechaprestamo)
 );

-- Insertar datos en socios
insert into socios values('22333444','Juan Perez','Colon 345');
 insert into socios values('23333444','Luis Lopez','Caseros 940');
 insert into socios values('25333444','Ana Herrero','Sucre 120');
 -- Insertar datos en libros
 insert into libros (titulo, autor) values('Manual de 2º grado','Molina Manuel');
 insert into libros (titulo, autor) values('Aprenda PHP','Oscar Mendez');
 insert into libros (titulo, autor) values('Martin Fierro','Jose Hernandez');

 -- Insertar datos en prestamos
 insert into prestamos values('22333444',1,'2016-08-10','2016-08-12');
 insert into prestamos values('22333444',1,'2016-08-15',null);
 insert into prestamos values('25333444',2,'2016-08-10','2016-08-13');
 insert into prestamos values('25333444',3,'2016-08-10',null);
 insert into prestamos values('25333444',3,'2016-08-15',null);
 insert into prestamos values('30333444',2,'2016-08-02','2016-08-05');

 -- Datos introducidos en prestamos
  select * from prestamos;
"22333444"	1	"2016-08-10"	"2016-08-12"
"22333444"	1	"2016-08-15"	
"25333444"	2	"2016-08-10"	"2016-08-13"
"25333444"	3	"2016-08-10"	
"25333444"	3	"2016-08-15"	
"30333444"	2	"2016-08-02"	"2016-08-05"

 -- Obtener los prestamos con fecha, nombre del libro y nombre del socio (solo coincidencias):
select pr.fechaprestamo, l.titulo AS nombre_libro, s.nombre AS nombre_socio
from prestamos pr
join libros l on pr.codigolibro = l.codigo
join socios s on pr.documento = s.documento;
"2016-08-10"	"Manual de 2º grado"	"Juan Perez"
"2016-08-15"	"Manual de 2º grado"	"Juan Perez"
"2016-08-10"	"Aprenda PHP"	"Ana Herrero"
"2016-08-10"	"Martin Fierro"	"Ana Herrero"
"2016-08-15"	"Martin Fierro"	"Ana Herrero"

-- Obtener los prestamos con fecha, nombre del libro y nombre del socio (todos los prestamos):
select pr.fechaprestamo, l.titulo as nombre_libro, s.nombre as nombre_socio
from prestamos pr
left join libros l on pr.codigolibro = l.codigo
left join socios s on pr.documento = s.documento;

"2016-08-10"	"Manual de 2º grado"	"Juan Perez"
"2016-08-15"	"Manual de 2º grado"	"Juan Perez"
"2016-08-10"	"Aprenda PHP"	"Ana Herrero"
"2016-08-10"	"Martin Fierro"	"Ana Herrero"
"2016-08-15"	"Martin Fierro"	"Ana Herrero"

-- Obtener la lista de prestamos con la fecha, titulo del libro y nombre del socio utilizando subconsutas:
SELECT 
    pr.fechaprestamo, 
    (SELECT l.titulo FROM libros l WHERE l.codigo = pr.codigolibro) AS nombre_libro,
    (SELECT s.nombre FROM socios s WHERE s.documento = pr.documento) AS nombre_socio
FROM prestamos pr;

"2016-08-10"	"Manual de 2º grado"	"Juan Perez"
"2016-08-15"	"Manual de 2º grado"	"Juan Perez"
"2016-08-10"	"Aprenda PHP"	"Ana Herrero"
"2016-08-10"	"Martin Fierro"	"Ana Herrero"
"2016-08-15"	"Martin Fierro"	"Ana Herrero"
"2016-08-02"	"Aprenda PHP"	

Explicación:

SELECT pr.fechaprestamo: Selecciona la fecha de préstamo de la tabla prestamos.
(SELECT l.titulo FROM libros l WHERE l.codigo = pr.codigolibro) AS nombre_libro: Esta subconsulta busca el título del libro en la tabla libros donde el código del libro coincide con el codigolibro en la tabla prestamos. El resultado se asigna al alias nombre_libro.
(SELECT s.nombre FROM socios s WHERE s.documento = pr.documento) AS nombre_socio: Esta subconsulta busca el nombre del socio en la tabla socios donde el documento del socio coincide con el documento en la tabla prestamos. El resultado se asigna al alias nombre_socio.
FROM prestamos pr: Indica que la consulta principal se realiza en la tabla prestamos.
Comparación con LEFT JOIN:

Rendimiento: En general, las consultas con JOIN suelen ser más eficientes que las consultas con subconsultas, especialmente en bases de datos grandes.
Legibilidad: Las consultas con JOIN pueden ser más fáciles de leer y entender, especialmente cuando se unen varias tablas.
Complejidad: Las subconsultas pueden ser útiles para consultas más complejas donde las uniones no son suficientes.
En este caso particular, la consulta con LEFT JOIN probablemente sea más eficiente y legible que la consulta con subconsultas. Sin embargo, es útil conocer ambas opciones para poder elegir la más adecuada según la situación.