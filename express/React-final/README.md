# Proyecto final Express

## Profesor: Fausto López

## Alumno/a: Elizabteth Gómez

## Descripción del Proyecto

  - Este proyecto es una aplicación web desarrollada con **Express.js**, **Sequelize** y **PostgresQL**.
  - La aplicación permite gestionar usuarios, profesores y estudiantes, implementando funcionalidades **CRUD** y autenticación meidante **jWT**.
  - Ademas, he configurado un entorno de desarrollo con **Docker-compose**

## Estructura del Proyecto

```bash
.
├── app.js
├── config
│   └── config.json
├── docker
│   └── dev
│       └── docker-compose.services.yml
├── ERD.png
├── jwt-2.io.png
├── jwt.io.png
├── middlewares
│   ├── auth.js
│   └── validate.js
├── migrations
│   ├── 20250121095506-create-user.js # Primera migración a implementar
│   ├── 20250121095508-create-teacher.js # Se pueden migrar conjuntamente las restantes.
│   ├── 20250121095509-create-student.js
│   ├── 20250121095510-create-class.js
│   └── 20250121095511-create-student-class.js
├── models
│   ├── class.js
│   ├── index.js
│   ├── studentclass.js
│   ├── student.js
│   ├── teacher.js
│   └── user.js
├── package.json # Seguir los script de ejecución...
├── package-lock.json
├── public
│   ├── responsive.css
│   ├── scripts
│   │   ├── students.js
│   │   ├── teachers.js
│   │   └── users.js
│   └── styles.css
├── query.rest # Empezar con la primera y así hasta la última.
├── query.sh # En mi caso tuve que darle permiso para ejecutar.
├── README.md
├── repositories
│   └── students.js
├── routers
│   ├── students.js
│   ├── teachers.js
│   └── users.js
├── seeders
│   ├── 20250121103749-teachers.js
│   ├── 20250121103751-students.js
│   ├── 20250121103752-classes.js
│   ├── 20250121103753-student-classes.js
│   └── 20250121104537-users.js
└── views
    ├── edit-user.html
    ├── error-login.html
    ├── home.html
    ├── login.html
    ├── partials
    │   ├── body.html
    │   ├── footer.html
    │   └── header.html
    ├── students.html
    ├── teachers.html
    └── users.html

14 directories, 48 files
```

## Instrucciones del Proyecto final:

1. Crear un proyecto de Express con SEQUELIZE que tenga 3 tablas:
  * ○ users:
    * ■ id: autonumérico
    * ■ email: de tipo string y único (unique) y no nulo
    * ■ password: de tipo string y no nulo
    * ■ type: de tipo string
    * ■ active: de tipo boolean con valor por defecto true

  * ○ teachers:
    * ■ id: autonumérico
    * ■ dni: de tipo string
    * ■ name: de tipo string
    * ■ last_name: de tipo string
    * ■ date_of_birth: de tipo date
    * ■ user_id: id de un usuario. Relación 1:1

  * ○ students:
    * ■ id: autonumérico
    * ■ dni: de tipo string
    * ■ name: de tipo string
    * ■ last_name: de tipo string
    * ■ date_of_birth: de tipo date
    * ■ teacher_id: id de un profesor. Un profesor puede tener varios estudiantes, un estudiante sólo puede
pertenecer a un profesor.

>NOTA:Para las asociaciones revisar estos artículos: Artículo 1, Artículo 2

## Es importante que para iniciar y verificar la app se sigan las instrucciones del archivo Package.json

  ### * - INICIAR LA BASE DE DATOS Y HACER LAS MIGRACIONES COMO SE INDICA ABAJO e INICIAR EL PROYECTO.

  ```bash
  npm install # Para descargar las dependencias del archivo package.json (node_modules)
  npm run start-services # acceder al localhost:8081 y ver el archivo docker-compose con los datos a introducir y realizar las migraciones.
  npm run start-dev # Iniciar la aplicación.

  ```

## Imágenes del proyecto:

## Diagrama entidad-relación ERD:

![ERD de pgAdmin](/express/proyecto-final/ERD.png)

## Busque de datos del JWT TOKEN de autenticación:

![Consulta TOKEN](/express/proyecto-final/jwt.io.png)


```sh
#!/bin/bash
## Crear un archivo query.sh
# Configuración de la base de datos
DB_NAME="express-db-knex"
DB_USER="postgres"
DB_HOST="127.0.0.1"
DB_PORT="5432"

# Este es el orden de las migraciones:
npx sequelize-cli db:seed --seed 20250121104537-users.js
npx sequelize-cli db:seed --seed 20250121103749-teachers.js
npx sequelize-cli db:seed --seed 20250121103751-students.js
npx sequelize-cli db:seed --seed 20250121103752-classes.js
npx sequelize-cli db:seed --seed 20250121103753-student-classes.js

# Consulta para verificar las tablas

echo "Verificando las tablas en la base de datos:"
psql -U $DB_USER -h $DB_HOST -p $DB_PORT -d $DB_NAME -c "\dt"

# Consulta para obtener los alumnos de cada profesor

echo "Obteniendo los alumnos de cada profesor:"
psql -U $DB_USER -h $DB_HOST -p $DB_PORT -d $DB_NAME -c "
SELECT t.name AS teacher_name, s.name AS student_name, s.dni
FROM \"Teachers\" t
JOIN \"Students\" s ON t.id = s.teacher_id
ORDER BY t.name, s.name;
"

# Consulta para obtener el total de alumnos

echo "Obteniendo el total de alumnos:"
psql -U $DB_USER -h $DB_HOST -p $DB_PORT -d $DB_NAME -c "
SELECT COUNT(*) AS total_students
FROM \"Students\";
"
chmod +x query.sh # Hace el archivo ejecutable.

./query.sh # Ejecutar el archivo y introducir el password del archivo config en para cada consulta.
```

### Verificaciones de los Endpoints.

[Archivo de consultas Rest Client](./query.rest)

**POST** `/api/token`

### Parámetros

- `username`: El email del usuario.
- `password`: La contraseña del usuario.

### Ejemplo de Solicitud

```bash
curl -X POST http://localhost:3000/api/token -H "Content-Type: application/json" -d '{"username": "admin@example.com", "password": "password"}'
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzM3NzE1NzI3LCJleHAiOjE3Mzc3MTY2Mjd9.FCrc88ORkA2N7ypvzO0tGxBX6eO6xQIdF-WOSHnTwzc"}
curl -X GET http://localhost:3000/api/verify -H "Authorization: Bearer <TOKEN>"
{
  "id": 1,
  "email": "admon@example.com",
  "type": "admin",
  "iat": 1737715245,
  "exp": 1737716145
}

# Endpoint GET /jwt
curso@video8:~$ curl -X POST http://localhost:3000/api/token -d "username=admin@example.com&password=password"
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE3Mzc3NDI4ODksImV4cCI6MTczNzc0Mzc4OX0.xaWQCyZ5UBgjbXc2W8ozI-2w61t6w4gqSrnVGrN8aDI"}

curso@video8:~$ JWT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE3Mzc3NDI4ODksImV4cCI6MTczNzc0Mzc4OX0.xaWQCyZ5UBgjbXc2W8ozI-2w61t6w4gqSrnVGrN8aDI

curso@video8:~$ curl -X GET http://localhost:3000/jwt -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE3Mzc3NDI4ODksImV4cCI6MTczNzc0Mzc4OX0.xaWQCyZ5UBgjbXc2W8ozI-2w61t6w4gqSrnVGrN8aDI
> 
```
docker logs dev-express-db-1
```

### 6. Asegurarse de que los Servicios de Docker Estén Corriendo

Asegúrate de que los servicios de Docker estén corriendo correctamente.

```sh
docker ps
```

### 7. Ejecutar las Migraciones y Seeders

Después de verificar y corregir cualquier problema, intenta ejecutar las migraciones y seeders nuevamente.

```sh
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Con estos pasos, deberías poder resolver el problema de autenticación y migrar la base de datos correctamente. Si aún tienes problemas, verifica los mensajes de error en la consola para obtener más pistas sobre lo que podría estar mal.docker logs dev-express-db-1
```

### 6. Asegurarse de que los Servicios de Docker Estén Corriendo y verifica las variables de entorno

```javascript
{
  "development": {
    "username": "postgres",
    "password": "1234",
    "database": "express-db-egomez",
    "host": "127.0.0.1",
    "port": 5433,  // Asegúrate de que el puerto coincida con el puerto externo en docker-compose.services.yml
    "dialect": "postgres"
  }
}
```

Asegúrate de que los servicios de Docker estén corriendo correctamente.

```sh
docker ps
```

### 7. Ejecutar las Migraciones y Seeders

Después de verificar y corregir cualquier problema, intenta ejecutar las migraciones y seeders nuevamente.

```sh
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Con estos pasos, deberías poder resolver el problema de autenticación y migrar la base de datos correctamente. Si aún tienes problemas, verifica los mensajes de error en la consola para obtener más pistas sobre lo que podría estar mal.

## Concluciones

### En conclusión, este proyecto me ha permitido aplicar y consolidar conocimientos sobre el desarrollo de aplicaciones web utilizando Express.js, Sequelize y PostgreSQL.

- A través de la implementación de funcionalidades CRUD, autenticación mediante JWT y la configuración de un entorno de desarrollo con Docker Compose, 
- He logrado crear una aplicación robusta y escalable. 
- Además, he podido emplear lo aprendido en **DATABASES** al manejar asociaciones entre modelos, realizar migraciones y seeders, y proteger rutas mediante middlewares de autenticación y autorización. 
- En este proyecto demuestra mi capacidad de integrar múltiples tecnologías; también la importancia de seguir buenas prácticas de desarrollo y documentación.

>NOTA: Agradezco al profesor Fausto López por su guía y apoyo durante el curso, y espero seguir mejorando y aplicando estos conocimientos en futuros proyectos.

## Bibliografía

* Documentación de Express.js: <https://expressjs.com/>
* Documentación de PostgreSQL: <https://www.postgresql.org/docs/>
