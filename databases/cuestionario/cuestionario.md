# Bases de datos relacionales y SQL

## En mi cuestionario he añadido información sobre Sequelize, Docker y Node.js

- Para tener un contexto más práctico y visual sobre cómo se aplican esos e interactúan para hacer una aplicación ya que son los módulo que he visto y personalmente, es como yo he entendido como interactúan.
- JavaScript y SQL yo los veo como el lado de la lógica (álgebra-mercantil) y PostgresQL con Sequalize, Node, Express, React las herramientas (aritmética-mercantil) que ayudan a construir los componentes para crear, modificar, actualizar y reutilizar los de manera eficiente.
  
  - Facilitan la construcción y gestión a fin de tener una aplicación web dinámica que permite tener una interfaz de usuario.

## 1. Explicar la diferencia entre Base de datos Relacional y SQL

Aunque a menudo se usan indistintamente, no son lo mismo y existe una diferencia clave:

**Una base de datos relacional** es un tipo de base de datos que organiza los datos en tablas con filas y columnas. **Las tablas se relacionan entre sí mediante claves**, lo que permite una gestión eficiente y flexible de la información. **Es una hoja de cálculo con varias pestañas interconectadas**.

**SQL (Structured Query Language)** es un lenguaje de programación estandarizado que se utiliza para gestionar y manipular las bases de datos relacionales.

- Sirve para  realizar operaciones como crear, modificar y consultar la información almacenada en las tablas.

- Es el conjunto de comandos que se usan para decirle a la base de datos qué hacer.

-**En resumen, una base de datos relacional es la estructura (modelo de organización) que almacena los datos, mientras que SQL es el lenguaje que se utiliza para gestionarla**.

## 2. ¿Por qué es necesario para las tablas definir una primary key?

**Una clave primaria (primary key)** es un campo o conjunto de campos que identifica de forma única cada registro en una tabla.

- **Es esencial para garantizar la integridad de los datos y evitar duplicados**. Es como el DNI de cada registro y su importancia radica en:

- **Identificación única**: Asegura que no haya dos filas con la misma clave primaria, evitando duplicados y confusiones.

- **Relaciones entre tablas**: Permite establecer relaciones entre tablas mediante claves foráneas, que hacen referencia a la clave primaria de otra tabla. Esto facilita la organización y la integridad de los datos.
- **Eficiencia en consultas**: Las bases de datos usan la clave primaria para optimizar las búsquedas y las operaciones de acceso a los datos.

### Sin una clave primaria, sería difícil garantizar la consistencia de los datos y realizar consultas eficientes

## 3. ¿Cómo se denomina la relación que se hace entre una columna de una tabla y la primary key de otra tabla?

- **Esa relación se denomina clave foránea (foreign key)** es un campo en **una tabla que se refiere a la clave primaria de otra tabla**.

- Establece una relación entre las dos tablas, permitiendo la conexión y la integridad referencial de los datos.

- Al utilizar claves foráneas, se asegura que los datos relacionados en diferentes tablas sean consistentes y se eviten errores de integridad.

## 4. ¿Qué es lo que necesitamos hacer para poder tener una relación n:m entre dos tablas?

- Las relaciones entre tablas definen cómo se conectan los datos en una base de datos relacional. Los tipos más comunes son:

**1:1 (uno a uno)**: Cada registro en una tabla se relaciona con un único registro en otra tabla. Por ejemplo, una persona tiene un único número de seguridad social.

**1:N (uno a muchos)**: Un registro en una tabla se relaciona con varios registros en otra tabla. Por ejemplo, un usuario puede tener varios contactos.

**N:M (muchos a muchos)**: Varios registros en una tabla se relacionan con varios registros en otra tabla. Para implementar este tipo de relación, se necesita una tabla intermedia que contenga las claves foráneas de ambas tablas.

- Por ejemplo, un evento puede tener muchos usuarios inscritos. Y un usuario puede participar en varios eventos.

- **Para implementar una relación n:m, necesitamos crear una tabla intermedia que actúe como puente entre las dos tablas principales. Esta tabla intermedia tendrá dos claves foráneas, una para cada tabla principal, creando así la relación muchos a muchos**.

### Por ejemplo, usuario y contacto tienen la tabla contactos

**Sequelize es un ORM (Object-Relational Mapper)** para Node.js que facilita la interacción con bases de datos relacionales.

- Permite definir modelos que representan las tablas de la base de datos y realizar operaciones de forma más sencilla y organizada.
Ventajas de utilizar Sequelize:
- Simplifica las interacciones con la base de datos: Sequelize abstrae la complejidad de las consultas SQL, permitiendo realizar operaciones con la base de datos utilizando código JavaScript más legible y mantenible.
- Mejora la organización del código: Permite definir modelos que representan las tablas de la base de datos, lo que facilita la organización del código y la separación de responsabilidades.

- Aumenta la productividad: Proporciona una serie de métodos y funciones que simplifican las operaciones comunes con la base de datos, lo que reduce la cantidad de código que se necesita escribir.

**Es importante comprender que los modelos de Sequelize son representaciones de las tablas de la base de datos. Cada instancia de un modelo corresponde a una fila en la tabla**.

## Implementación de una base de datos con Sequelize

**Para implementar una base de datos con Sequelize en un servidor Node.js, se deben seguir los siguientes pasos**:

- Instalar Sequelize y el controlador de la base de datos:

```bash
npm install sequelize pg pg-hstore 
```

- En este caso, estamos utilizando PostgreSQL como base de datos y pg es el controlador necesario.

- Definir los modelos: Se deben crear archivos que definan los modelos de la base de datos.
- Cada modelo representa una tabla y sus atributos. Por ejemplo, para un modelo User:

```JavaScript
const { DataTypes } = require('sequelize');
const sequelize = require('./database'); // Importar la instancia de Sequelize

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
```

- Definir las relaciones: Se deben establecer las relaciones entre los modelos utilizando
los métodos.

```javascript
hasOne, belongsTo, hasMany y belongsToMany 
```

de Sequelize.

- Por ejemplo, si tenemos un **modelo User y un modelo Profile**, donde cada usuario tiene un único perfil, podemos definir la relación de la siguiente manera:

```JavaScript
User.hasOne(Profile);
Profile.belongsTo(User);
```

- Sincronizar los modelos con la base de datos: Se utiliza el método sync para crear las tablas en la base de datos si no existen.

```JavaScript
sequelize.sync();
```

- Realizar operaciones con los modelos:
  - Se pueden realizar operaciones CRUD (Create, Read, Update, Delete) con los modelos utilizando
  - Los métodos proporcionados por Sequelize.
  - Por ejemplo, para crear un nuevo usuario:

```JavaScript
User.create({ username: 'eli_goez', password: 'password123' });
```

## Desarrollo de una aplicación web con Node.js y Sequelize

**- Cómo implementar una base de datos con Sequelize en un servidor Node.js y cómo gestionar las dependencias del proyecto**.

- Además, cómo estructurar aplicaciones Node.js para por ejemplo la gestión de portafolios y eventos.

- **Organización del servidor con Node.js y Docker-compose**

- Es fundamental comprender cómo se organiza un servidor Node.js y cómo Docker-compose puede simplificar el desarrollo y el despliegue de la aplicación.

**Node.js se encargará de la lógica del servidor**, la gestión de rutas, la autenticación de usuarios y la interacción con la base de datos a través de Sequelize.

> **Nota: Se recomienda utilizar un framework como Express.js para facilitar el desarrollo. Express.js proporciona una estructura sólida para la creación de APIs y la gestión de solicitudes HTTP, lo que facilita la organización del código y la creación de aplicaciones web escalables**.

**Docker-compose permite definir y gestionar la aplicación y sus dependencias (como la base de datos) en contenedores**.

- Esto facilita el desarrollo, las pruebas y el despliegue de la aplicación, ya que proporciona un entorno aislado y reproducible.

**Ventajas de Docker-compose**:

- Simplifica el entorno de desarrollo: Permite definir la infraestructura de la aplicación en un único archivo, lo que facilita la creación de entornos de desarrollo consistentes y reproducibles.
- Facilita la gestión de dependencias: Asegura que todos los servicios tengan las dependencias necesarias y que se ejecuten en el orden correcto.
- Agiliza el despliegue: Permite desplegar la aplicación y sus dependencias en diferentes entornos (desarrollo, pruebas, producción) de forma sencilla y consistente.
- Mejora la escalabilidad: Facilita la escalabilidad de la aplicación al permitir la creación de múltiples instancias de cada servicio.
- Aumenta la portabilidad: Permite ejecutar la aplicación en cualquier sistema que tenga Docker instalado.

## Un archivo docker-compose.yml básico podría tener la siguiente estructura

- Este archivo define dos servicios: web para la aplicación Node.js y db para la base de datos PostgreSQL. Docker-compose se encarga de iniciar ambos servicios, conectarlos entre sí y gestionar sus dependencias.

```YAML


version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres:latest
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=database
```

## Autenticación de usuarios en Node.js

- La autenticación de usuarios es el proceso de verificar la identidad de un usuario antes de permitirle acceder a una aplicación o a ciertos recursos.

- En Node.js, se pueden utilizar diferentes métodos de autenticación, como la autenticación basada en contraseñas, la autenticación con tokens JWT (JSON Web Tokens) o la autenticación con OAuth 2.0.

**Ejemplo de autenticación con Sequelize**:

- Se puede utilizar Sequelize para almacenar la información de los usuarios y gestionar el proceso de autenticación.
- Un ejemplo básico de autenticación con contraseñas podría incluir los siguientes pasos:
  - Crear un modelo User con campos para el nombre de usuario y la contraseña:

```JavaScript
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
```

Hashear la contraseña antes de guardarla en la base de datos:

```JavaScript
const bcrypt = require('bcrypt');

const hashedPassword = await bcrypt.hash(password, 10);

User.create({ username: username, password: hashedPassword });


// Comparar la contraseña proporcionada por el usuario con la contraseña hasheada almacenada en la base de datos:
JavaScript
const user = await User.findOne({ where: { username: username } });

const match = await bcrypt.compare(password, user.password);

if (match) {
  // Autenticación exitosa
} else {
  // Autenticación fallida
}
```

## Ejemplo de implementaciones con base de datos y Node

**Construyendo un portafolio con Node.js**

>**Para construir un portafolio con Node.js, se puede utilizar una estructura similar a la siguiente**:
**- Rutas**: Definir rutas para diferentes secciones del portafolio, como la página de inicio, la página "Acerca de" y la página de proyectos.
**- Controladores**: Crear controladores para gestionar la lógica de cada ruta, como obtener los datos de los proyectos de una base de datos o renderizar las plantillas HTML.
**- Modelos**: Definir modelos con Sequelize para representar los datos del portafolio, como los proyectos, las habilidades y la información de contacto.
**Se puede utilizar un motor de plantillas para generar el HTML del portafolio y un framework CSS para estilizar la interfaz de usuario**.

>**Construyendo un sistema de gestión de eventos con Node.js**

    - Para construir un sistema de gestión de eventos con Node.js, se puede utilizar una estructura similar a la del portafolio, pero con modelos y controladores específicos para la gestión de eventos.
    - Modelos: Definir modelos con Sequelize para representar los eventos, los asistentes, las ubicaciones y otros datos relevantes.
    - Controladores: Crear controladores para gestionar la lógica de las rutas relacionadas con los eventos, como crear nuevos eventos, registrar asistentes, gestionar las ubicaciones y generar informes.
    - Rutas: Definir rutas para las diferentes acciones relacionadas con los eventos, como crear, editar, eliminar, ver detalles y registrar asistentes.
    - Se puede utilizar un framework CSS para estilizar la interfaz de usuario y AJAX para crear una experiencia de usuario más interactiva.
