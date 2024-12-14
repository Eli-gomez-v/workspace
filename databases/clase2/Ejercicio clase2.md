# Ejercicio 2 Modelo relacional - Operaciones básicas SQL. Basado en el modelo entidad-relación definido en el ejericicio clase 1 realizar

## Crear Base de Datos y Tablas en PostgresSQL

1. - Entrar en el bash con: docker exec -it posrgres_container bash (intro).
2. - del root... se pasa a conectar con PostgreSQL: psql -Upostgres postgres.
3. - Aquí se puede pasar a crear tanto la base de datos como las tablas, ect...
       - Ejemplo: CREATE DATABASE mi_base_de_datos;
4. - Conectar con la base de datos: \c mi_base_de_datos;
5. - Crear las tabals necesarias (ver archivo dump.sql).
       - Ver todas las opciones en el archivo adjunto, las plataformas consultadas y el botón de ayuda de pgAdmin.
6. - Realizar consultas y guardarlas en el archivo que se debe crear a tal fin en la carpeta compose-postgres/queries.sql
   - Añadir las consultas a dicho archivo y guardar y cerrar.
7. - Crear un Backup de la Base de Datos en dump.sql
    **pg_dump -U postgres -d mi_base_de_datos -f /home/curso/albaniles-digitales/workspace/databases/clase1/compose-postgres/pgadmin/dump.sql**

## Restaurar la BAse de datos desde dump.sql

    **psql -U postgres -d mi_base_de_datos -f /home/curso/albaniles-digitales/workspace/databases/clase1/compose-postgres/pgadmin/dump.sql**

    ## Ejecutar las Consultas desde queries.sql

    **psql -U postgres -d mi_base_de_datos -f /home/curso/albaniles-digitales/workspace/databases/clase1/compose-postgres/queries.sql**
    

1. - Crear las tablas necesarias.
2. - Insertar algunos registros en cada una de ellas.
3. - Realizar las siguientes consultas sql:
       - Obtener la lista de los proveedores que tiene la tienda.
       - Consultar si existe algún cliente con un nombre x.
       - Obtener el listado de los productos de la tienda ordenados por precio.

## Está compuesto por

**Comandos DDL** (Data Definition Language), crear y definir nuevas base de datos, campos e índices.

| Comando | Descripción |
|---------|-------------|
| CREATE  | Crear nuevas tablas, campos, índices, base de datos |
| DROP    | Eliminar tablas, índices, base de datos |
| ALTER   | Modificar tablas, índices |
**Claúsulas**, condiciones que se quiere cumplir en la búsqueda de los datos.

| Comando   | Descripción                                                                 |
|-----------|-----------------------------------------------------------------------------|
| FROM      | Para indicar la tabla de la que se quiere consultar los registros           |
| WHERE     | Para indicar condiciones que deben cumplir los registros que se quieren seleccionar |
| GROUP BY  | Para separar los registros seleccionados en grupos                          |
| ORDER BY  | Para ordenar los registros seleccionados en un orden específico             |

**Operadores**, lógicos y de comparación

| Comando  | Descripción                                      |
|----------|--------------------------------------------------|
| AND      | Evalúa dos condiciones y ambas se deben cumplir  |
| OR       | Evalúa dos condiciones y se debe cumplir al menos una |
| <        | Menor que                                        |
| >        | Mayor que                                        |
| <>       | Distinto de                                      |
| <=       | Menor o igual que                                |
| >=       | Mayor o igual que                                |
| =        | Igual que                                        |
| BETWEEN  | Entre intervalo de valores                       |
| LIKE     | Comparación de modelos                           |
| IN       | Registros incluidos en una tabla                 |

## Practicado y realizado ejercicios de las siguientes plataformas

- <https://www.w3schools.com/sql/default.asp>
- <https://launchschool.com/books/sql/read/add_data>
- [text](http://localhost:5050/help/help/table_dialog.html)
