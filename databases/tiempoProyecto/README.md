# Informe del Proyecto de Registro de Horas en Docker Compose, postgresQL, Node js.

Este informe describe como he realizado la implementación de una base de datos en Docker Compose para registrar las horas empleadas en un proyecto. El proyecto utiliza Node.js con Sequelize como ORM para interactuar con una base de datos PostgreSQL, gestionada a través de pgAdmin.

## Estructura de la Base de Datos

## La base de datos se compone de las siguientes tablas:

**- Proyecto**: Almacena información general del proyecto (nombre, fecha de inicio, etc.).

**- CodeHours**: Registra las horas dedicadas a la implementación del código general.

**- NodeHours**: Registra las horas dedicadas a la implementación de Node.js.

**- DatabaseHours**: Registra las horas dedicadas a la implementación de la base de datos.

**- HtmlHours**: Registra las horas dedicadas a la implementación de HTML.

>Nota: Se han creado 9 tablas, pero para este ejemplo se han considerado las 4 tablas principales mencionadas.

## Implementación

1. **Configuración de Docker Compose**:

Se define un archivo docker-compose.yml para configurar los servicios de la aplicación:

db: Contenedor para la base de datos PostgreSQL.
pgadmin: Contenedor para la interfaz gráfica pgAdmin.
app: Contenedor para la aplicación Node.js.

2. **Conexión a la Base de Datos (connection.js)**:

Se establece la conexión a la base de datos PostgreSQL utilizando Sequelize en el archivo connection.js.

3. **Definición de Modelos (models.js)**:

Se definen los modelos de las tablas utilizando Sequelize en el archivo models.js:

4. **Lógica de la Aplicación (index.js)**:

Se implementa la lógica para interactuar con la base de datos, incluyendo la creación de tablas, inserción de datos y ejecución de consultas.

## Inserciones de Datos y consultas:

## ver imagen ERD pgAdmin:

![Diagrama entidad-relación][erdImageReference]

[erdImageReference]: ERD.png

Se pueden insertar datos en las tablas utilizando el método create de Sequelize:

[Ver archivo index.js](./path/to/tiempoProyecto/index.js)

## Consultas

[Ver archivo consultas.sql](./path/to/tiempoProyecto/consultas.sql)


## Estructura del proyecto:

curso@video8:~/Escritorio/workspace/databases/tiempoProyecto$ tree -L 2 -I 'node_modules'
.
├── connection.js
├── consultas.sql
├── ERD.png
├── index.js
├── models.js
├── package.json
├── package-lock.json
└── README.md

1 directory, 8 files

## Conclusiones

**Este informe describe la estructura e implementación de una base de datos para registrar horas de trabajo en un proyecto**.

Se utiliza Docker Compose para facilitar la gestión de los servicios, Node.js con Sequelize para la lógica de la aplicación y PostgreSQL como base de datos. 

**Se incluyen ejemplos de inserciones de datos y consultas para obtener información relevante del proyecto**.

## Próximas implementaciones:

1. Implementar un sistema de autenticación para asegurar la aplicación.

2. Añadir validaciones en los modelos para asegurar la integridad de los datos.

3. Crear una interfaz de usuario para facilitar la interacción con la aplicación.

4. Implementar un sistema de registro para monitorizar la actividad de la aplicación.
