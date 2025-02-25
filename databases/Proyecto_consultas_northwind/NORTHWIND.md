### CONSULTAS SQL SOBRE UNA BASE DE DATOS

[Northwind PostgreSQL Database](https://github.com/pthom/northwind.psql)

## Método 2

1. Crear una base de datos nueva que se llame ProyectoFinal
2. Descargamos el fichero northwind.sql en nuestro ordenador
3. Copiamos el fichero dentro del docker de postgres para luego poder usar el fichero sql dentro
4. Entramos dentro del docker de postgres y ejecutamos el fichero sql para que cargue todo en la base de dato

```sql
1. -- Buscar todos los clientes (customers) con el postal_code = '1010'.

SELECT customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax
FROM public.customers;

** Esta consulta selecciona todos los campos (*) de la tabla customers donde el valor del campo postal_code es igual a '1010'.**

SELECT * FROM customers WHERE postal_code = '1010';

2. -- Buscar el número del teléfono que tiene el proveedor (supplier) con id 11.

SELECT supplier_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax, homepage
FROM public.suppliers;

** Esta consulta selecciona el campo phone de la tabla suppliers donde el valor del campo supplier_id es igual a 11.**

-- Esta consulta selecciona el campo phone cuyo valor es igual a 11.
SELECT phone FROM suppliers WHERE supplier_id = 11;

3. -- Listar los primero 10 pedidos (orders) ordenados de manera descendente por la fecha de pedido.

SELECT order_id, customer_id, employee_id, order_date, required_date, shipped_date, ship_via, freight, ship_name, ship_address, ship_city, ship_region, ship_postal_code, ship_country
FROM public.orders;

SELECT * FROM orders ORDER BY order_date DESC LIMIT 10;

** Esta consulta selecciona todos los campos (*) de la tabla orders, los ordena de manera descendente por el campo order_date y limita el resultado a los primeros 10 registros.**


4. -- Buscar todos los clientes (customers) que vivan en London, Madrid o Brazil.

SELECT * FROM customers WHERE city = 'London'OR city = 'Madrid' OR country = 'Brazil';

** Esta consulta selecciona todos los campos (*) de la tabla customers donde el valor del campo city es igual a 'London'...**

5. -- Añadir un nuevo registro en la tabla clientes (customers) con la siguiente información (indicaa en el mismo orden de las columnas): "XYZ", "Mi empresa", "Juan Pérez", "CEO", "Calle Falsa 123", "Madrid", "Madrid", "28000", "Spain", "123456789", "987654321"."The Shire","Bilbo Baggins","I Hobbit-Hole", "Bag End", ""111", y "Middle Earth".

INSERT INTO public.customers(customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax)
VALUES ('XYZ', 'The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', NULL, NULL, '111', 'Middle Earth', NULL, NULL);

** Esta consulta inserta un nuevo registro en la tabla customers con los valores especificados para cada campo. Se asume que el customer_id es la clave primaria y que los campos region y fax no son obligatorios.**

6. -- Actualizar el código postal a "11122" del cliente Bilbo Baggins.

SELECT customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax
FROM public.customers;

UPDATE customers SET postal_code = '11122' WHERE contact_name = 'Bilbo Baggins';

** Esta consulta actualiza el valor del campo postal_code en la tabla customers donde el valor del campo contact_name es igual a 'Biblo Baggins'.**

7. -- Mostrar "ProductName" y "CategoryName" de todos los productos (products).

SELECT product_id, product_name, supplier_id, category_id, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued
FROM public.products;

SELECT p.product_name, c.category_name
FROM products p
JOIN categories c ON p.category_id = c.category_id;

** Esta consulta selecciona los campos product_name de la tabla products y category_name de la tabla categories.
- Se ulitiza una unión (JOIN) entre las dos tablas para relacionar los productos con sus categorías a través del campo category_id.**

8.-- Mostrar "OrderID" y "CompanyName" del expedidor (shippers) de todos los pedidos (orders) realizados antes del 9 de agosto de 2012.

SELECT shipper_id, company_name, phone
FROM public.shippers;

SELECT o.order_id, s.company_name
FROM orders o
JOIN shippers s ON o.ship_via = s.shipper_id
WHERE o.order_date < '2012-08-09';

** Esta consulta selecciona los campos order_id de la tabla orders y company_name de la tabla shippers.
- Se utiliza una unión (JOIN) entre las dos tablas para relacionar los pedidos con los expedidores a traves del campo ship_via.
- Se filtran los resultados para mostrar solo los pedidos realizados antes del 9 de agosto de 2012.**

9. -- Mostrar el número de pedidos (orders) realizados por cada expedidor (shipper).

SELECT shipper_id, company_name, phone
FROM public.shippers;
SELECT sh.company_name, COUNT(o.order_id) AS NumberOfOrders 
FROM orders o
JOIN shippers sh ON o.ship_via = sh.shipper_id
GROUP BY sh.company_name;

** Esta consulta selecciona el campo company_name de la tabla shippers y cuenta el número de pedidos (order_id) asociados a cada expedidor.
- Se utiliza una unión (JOIN) entre las dos tablas para relacionar los pedidos con los expedidors a través del campo ship_via.
- Se agrupan los resultados por company_name para obtener el número de pedidos por cada expedidor.**
/*=======================================================*/
- Consultas SQL adicionales en la base de datos Northwind
/*=======================================================*/

SELECT product_id, product_name, supplier_id, category_id, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued
FROM public.products;

1.-- Mostrar los productos que tienen un precio unitario superior al precio medio de todos los procudctos
SELECT product_name
FROM products
WHERE unit_price > (SELECT AVG(unit_price) FROM products);

**Esta consulta selecciona el nombre del producto (product_name) de la tabla products donde el precio unitario (unit_price) es mayor que el precio medio de todos los productos. La subconsulta (SELECT AVG(UnitPrice) FROM Products) calcula el precio medio_ de todos los productos en la tabla y ésta subconsulta se ejecuta primero y devuelve dicho valor medio; luego, la consulta principal compara el unit_price de cada producto con este valor medio y selecciona solo aquellos productos cuyo precio unitario es superior a la media.**

2.-- Listar los clientes que han realizado pedidos con un valor total superior a un valor determinado
SELECT c.contact_name, SUM(od.Unit_price * od.quantity * (1 - od.discount)) AS TotalOrderValue
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN "order_details" od ON o.order_id = od.order_id
GROUP BY c.contact_name
HAVING SUM(od.unit_price * od.quantity * (1 - od.discount)) > 1000;

**Esta consulta calcula el valor total de los pedidos para cada cliente y luego filtra aquellos clientes cuyo valor total de pedidos supera un valor denterminado (en este caso, 1000). Para ello, se realizan las siguientes acciones:
- Se unen las tablas customers, orders, y order_details para obtener la información necesaria para calcular el valor total de los pedidos.
- Se utiliza la función SUM() para calcular el valor total de cada pedido, teniendo en cuenta el precio unitario, la cantidad y el descuento
- Se agrupan los resultados por contact_name para obtener el valor de los pedidos para cada cliente.
- Se utiliza la cláusula HAVING para filtrar los clientes cuyo valor total de pedidos sea superior al valor especificado.**

3. -- Mostrar los empleados que han gestionado más de un cierto número de pedidos
SELECT employee_id, last_name, first_name, title, title_of_courtesy, birth_date, hire_date, address, city, region, postal_code, country, home_phone, extension, photo, notes, reports_to, photo_path
FROM public.employees;

SELECT order_id, customer_id, employee_id, order_date, required_date, shipped_date, ship_via, freight, ship_name, ship_address, ship_city, ship_region, ship_postal_code, ship_country
FROM public.orders;

SELECT e.first_name, e.last_name, COUNT (o.order_id) AS NumberOfOrders
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
GROUP BY e.first_name, e.last_name
HAVING COUNT (o.order_id) > 50;

**Esta consulta selecciona el nombre y apellido del empleado (first_name, last_name) y cuenta el número de pedidos (NumberOfOrders) gestionados por cada empleado. 
-Se unen las tablas employees y orders para obtener la información necesaria. 
-La cláusula GROUP BY agrupa los resultados por nombre y apellido del empleado, y la cláusula HAVING filtra los resultados para mostrar solo aquellos empleados que hayan gestionado más de 50 pedidos (por ejemplo).
- Se utiliza la función COUNT() para contar el número de pedidos para cada empleado.**

4. -- Calcular el total de ventas por categoría de producto.
SELECT category_id, category_name, description, picture
FROM public.categories;

SELECT product_id, product_name, supplier_id, category_id, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued
FROM public.products;
SELECT order_id, product_id, unit_price, quantity, discount
FROM public.order_details;

SELECT c.category_name, SUM(od.unit_price * od.quantity * (1 - od.discount)) AS TotalSales
FROM categories c
JOIN products p ON c.category_id = p.category_id
JOIN "order_details" od ON p.product_id = od.product_id
GROUP BY c.category_name;

**Esta consulta selecciona el nombre de la categoría (category_name) y calcula la suma de las ventas (TotalSales) para cada categoría. Se unen las tablas categories, products y "order_details" para obtener la información necesaria.
- Se utiliza la función SUM() para calcular el total de ventas para cada categoría, teniendo en cuenta el precio unitario, la cantidad y el descuento. 
- La cláusula GROUP BY agrupa los resultados por nombre de categoría.**

5. -- Encontrar los clientes que no han realizado ningún pedido en un periodo de tiempo determinado

SELECT customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax
FROM public.customers;

SELECT order_id, customer_id, employee_id, order_date, required_date, shipped_date, ship_via, freight, ship_name, ship_address, ship_city, ship_region, ship_postal_code, ship_country
FROM public.orders;

SELECT c.contact_name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
AND o.order_date BETWEEN '2012-01-01' AND '2012-12-31'
WHERE o.order_id IS NULL;

***Esta consulta selecciona el nombre de contacto del cliente (contact_name) de aquellos clientes que no han realizado ningún pedido en el periodo de tiempo especificado. 
- Se utiliza una unión LEFT JOIN entre las tablas customers y orders para incluir a todos los clientes, incluso aquellos que no tienen pedidos.
- La condición AND o.order_date BETWEEN '2012-01-01' AND '2012-12-31' filtra los pedidos dentro del periodo deseado.
- La cláusula WHERE o.order_id IS NULL selecciona solo aquellos clientes que no tienen ningún pedido en el periodo especificado.***
```sql



