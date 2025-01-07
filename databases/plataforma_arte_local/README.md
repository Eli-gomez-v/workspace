# Plataforma web para artistas de Urban Sketching y otras técnicas de dibujo rápido

## A fin de poder añadir todos los ejercicios se ha simplificado en 3 archivos la base de datos que correspondería con el proyecto más abajo descrito. 

## Contenido:

3.MODELADO BASE DE DATOS

- Siguiendo los pasos que hemos ido haciendo en los ejercicios de clase:
- Plantear un caso de uso (el que vosotros queráis o podemos realizarlo sobre proyectos entregados en otros
módulos) en el que quede bien explicado los requisitos y el caso de uso que queremos implementar en nuestra
base de datos. Mínimo debe tener 3 entidades con 3-4 atributos cada una de ellas; también deben existir
relaciones 1:N y N:M.
- Crear el modelo entidad-relación correspondiente
- Crear la base de datos con sus tablas y relaciones entre ellas
- Poblar la base de datos con una serie de registros y hacer al menos 5 consultas para demostrar que vuestro
modelo cumple con los requisitos indicados en el paso 1.
- Consultas sql realizadas y los resultados de ellas para poder validar que están correctas
junto con el diagrama ER.

```bash
curso@video8:~/workspace/databases/plataforma_arte_local$ tree -L 2 -I 'node_modules'
.
├── connection.js ## archivo que conecta la base de datos con e importa los módulos necesarios 
├── create_plataforma_arte_local.sql ## archivo con las tablas y consultas realizadas
├── ERD.png                          ## imagen descargada de pgAdmin 'click boton dcho sobre BD'
├── index.js                         ## archivo de ejecución para la creación de las tablas exports.
├── inserciones.js                   ## archivo de inserciones de datos en tablas.
├── models.js                        ## archivo con los contenidos de las tablas y relaciones.
├── package.json
├── package-lock.json
├── plataforma_arte_local.jpg        ## imagen de archivo diagrama entidad-relación creado en...
└── README.md
```

[Edit Diagram on Creately](https://app.creately.com/d/Xe3e5xSeY8r/edit)

![Diagrama entidad-relación][erdImageReference]

[erdImageReference]: ERD.png

![Diagrama entidad-relación actualizado][newErdImageReference]

[newErdImageReference]: plataforma_arte_local.jpg

## Introducción

El Urban Sketching, como movimiento artístico global, ha experimentado un crecimiento significativo en los últimos años. Artistas de todo el mundo se reúnen para capturar la esencia de las ciudades, pueblos y paisajes que les rodean a través de dibujos rápidos e intuitivos. 
Esta plataforma web nace con el objetivo de proporcionar un espacio para la comunidad de Urban Sketching y otras técnicas de dibujo rápido en Pamplona, ofreciendo recursos, información y oportunidades para conectar con otros artistas.
Surge de la necesidad de tener un espacio local, propio de la gente de Pamplona, donde profesionales y aficionados puedan promover sus centros de enseñanza artística, masterclass y talleres, así como organizar quedadas para prácticas y clases. 
Además, la plataforma servirá como punto de encuentro para charlas, conferencias y exposiciones de interés para la comunidad. La creación de esta plataforma también responde a la necesidad de un espacio independiente, evitando la dependencia de marcas con condiciones difíciles de cumplir, como "Urban Sketching".

## Funcionalidades principales:

- La plataforma web se divide en cuatro áreas principales:

1. Área de información general:
Ofrece información gratuita sobre eventos, master class, clases, quedadas y noticias relevantes para la comunidad artística.
Incluye un calendario de eventos con fechas, horarios y lugares de actividades.
Presenta artículos y recursos sobre técnicas de dibujo, materiales y artistas destacados.
2. Área de gestión de cuenta y participación:
Requiere registro (login) para acceder a la inscripción en eventos, charlas, master class y quedadas.
Permite a los usuarios crear un portfolio personalizable para mostrar sus trabajos.
Facilita la conexión con otros artistas a través de un sistema de mensajería interna y foros de discusión.
3. Área de gestión de portfolio:
Ofrece opciones de privacidad para el portfolio, permitiendo a los usuarios hacerlo público o compartirlo solo con contactos seleccionados.
Permite a los usuarios personalizar la presentación de su portfolio con diferentes diseños y opciones de organización.
Integra herramientas para compartir el portfolio en redes sociales y otras plataformas.
4. Área para profesionales:
Permite a profesionales y artistas con experiencia registrarse para organizar quedadas y master class.
Ofrece opciones para la gestión de eventos, incluyendo la definición de precios, plazas mínimas y máximas, temáticas y técnicas.
Facilita la comunicación con los participantes y la gestión de inscripciones.

## Diseño de la base de datos

Para implementar las funcionalidades de la plataforma, he llevado a cabo un proceso de investigación que incluye la exploración de diferentes tipos de relaciones entre entidades en una base de datos, como las relaciones uno-a-muchos (1:N) , muchos-a-muchos (N:M)  y uno-a-uno (1:1) . 
Este análisis me ha permitido definir un esquema entidad-relación para una base de datos PostgreSQL que soporte de manera eficiente las complejas relaciones entre usuarios, eventos, portfolios y otros elementos de la plataforma. 
Un aspecto clave de este diseño es la correcta gestión de las relaciones muchos-a-muchos, que son fundamentales para representar la participación de usuarios en eventos y la conexión entre usuarios a través de la funcionalidad de contactos .

## Relaciones:

Un usuario puede organizar muchos eventos (1:N).
Un evento puede ser organizado por un solo usuario (1:1).
Un usuario puede inscribirse a muchos eventos (N:M).
Un evento puede tener muchos usuarios inscritos (N:M).
Un usuario puede tener un solo portfolio (1:1).
Un portfolio pertenece a un solo usuario (1:1).
Un usuario puede tener muchos contactos (N:M).../...

## En este diagrama puedes observar:

Rectángulos: Representan las entidades (Usuario, Evento, Inscripción, Portfolio, Contacto).
Óvalos: Representan los atributos de cada entidad.
Rombos: Representan las relaciones entre las entidades.
Líneas: Conectan las entidades y las relaciones, indicando la cardinalidad (1:1, 1:N, N:M).
Detalles del diagrama:
La entidad Usuario tiene atributos como id, nombre, email, contraseña, tipo, portfolio público, etc.
La entidad Evento tiene atributos como id, título, descripción, fecha, hora, lugar, tipo, etc.
La entidad Inscripción relaciona a los usuarios con los eventos a los que se han inscrito.
La entidad Portfolio almacena información sobre los portfolios de los usuarios.
La entidad Contacto representa las relaciones entre usuarios.
Las relaciones entre las entidades se muestran con rombos y líneas que indican la cardinalidad:
Un usuario puede organizar muchos eventos (1:N).
Un usuario puede inscribirse a muchos eventos, y un evento puede tener muchos usuarios inscritos (N:M).
Un usuario puede tener un solo portfolio (1:1).
Un usuario puede tener muchos contactos (N:M).


## Implementación

**PostgreSQL**: como sistema de gestión de base de datos, elegido por su robustez y capacidad para manejar relaciones complejas.
**Sequelize o TypeORM**: como librerías para facilitar la interacción con la base de datos desde Node.js, simplificando el acceso a los datos y la gestión de las relaciones entre entidades.
**Node.js**: como entorno de ejecución para el servidor, debido a su eficiencia y escalabilidad.
**Docker-compose**: porque permite definir y gestionar la aplicación y sus dependencias (como la base de datos) en contenedores. Esto facilita el desarrollo, las pruebas y el despliegue de la aplicación, ya que proporciona un entorno aislado y reproducible.

## Tablas:

```bash 
plataforma_arte_local=# select * from usuario;
plataforma_arte_local=# select * from evento;
             List of relations
 Schema |     Name      | Type  |  Owner   
--------+---------------+-------+----------
 public | Contactos     | table | postgres
 public | archivo       | table | postgres
 public | comentario    | table | postgres
 public | evento        | table | postgres
 public | eventos       | table | postgres
 public | inscripcion   | table | postgres
 public | inscripciones | table | postgres
 public | like          | table | postgres
 public | portfolio     | table | postgres
 public | portfolios    | table | postgres
 public | sketch        | table | postgres
 public | usuario       | table | postgres
 public | usuarios      | table | postgres

node inserciones.js
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
Executing (default): INSERT INTO "usuario" ("id","nombre","email","password","tipo","portfolio_publico","created_at","updated_at","createdAt","updatedAt") VALUES (DEFAULT,'Ana','ana@example.com','contraseña1','usuario',true,'2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00'),(DEFAULT,'Juan','juan@example.com','contraseña2','usuario',true,'2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00'),(DEFAULT,'Pedro','pedro@example.com','contraseña3','usuario',true,'2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00'),(DEFAULT,'Laura','laura@example.com','contraseña4','usuario',true,'2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00'),(DEFAULT,'María','maria@example.com','contraseña5','usuario',true,'2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00'),(DEFAULT,'Luis','luis@example.com','contraseña6','usuario',true,'2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00'),(DEFAULT,'Sofía','sofia@example.com','contraseña7','usuario',true,'2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00'),(DEFAULT,'Carlos','carlos@example.com','contraseña8','usuario',true,'2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.259 +00:00','2025-01-05 08:27:31.258 +00:00','2025-01-05 08:27:31.258 +00:00') RETURNING "id","nombre","email","password","tipo","portfolio_publico","biografia","foto_perfil","created_at","updated_at","createdAt","updatedAt","usuario_id";
Usuarios creados: [
  1, 2, 3, 4,
  5, 6, 7, 8
]
Executing (default): INSERT INTO "evento" ("id","titulo","descripcion","fecha","hora","lugar","tipo","organizador_id","precio","plazas_minimas","plazas_maximas","tematica","tecnicas","created_at","updated_at","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING "id","titulo","descripcion","fecha","hora","lugar","tipo","organizador_id","precio","plazas_minimas","plazas_maximas","tematica","tecnicas","created_at","updated_at","createdAt","updatedAt";
Evento creado: 1
Executing (default): INSERT INTO "inscripcion" ("id","usuario_id","evento_id","created_at","updated_at","createdAt","updatedAt") VALUES (DEFAULT,2,1,'2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00'),(DEFAULT,3,1,'2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00'),(DEFAULT,4,1,'2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00'),(DEFAULT,5,1,'2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00'),(DEFAULT,6,1,'2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00'),(DEFAULT,7,1,'2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00'),(DEFAULT,8,1,'2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.288 +00:00','2025-01-05 08:27:31.287 +00:00','2025-01-05 08:27:31.287 +00:00') RETURNING "id","usuario_id","evento_id","created_at","updated_at","createdAt","updatedAt";
Inscripciones creadas: [
  1, 2, 3, 4,
  5, 6, 7
]

  id |                 titulo                 |                     descripcion                     |   fecha    |   hora   |                      lugar                       |    tipo     | organizador_id | precio | plazas_minimas | plazas_maximas | tematica |      tecnicas      |         created_at         |         updated_at         |         createdAt          |         updatedAt          
----+----------------------------------------+-----------------------------------------------------+------------+----------+--------------------------------------------------+-------------+----------------+--------+----------------+----------------+----------+--------------------+----------------------------+----------------------------+----------------------------+----------------------------
  1 | Taller de dibujo en el urban sketching | Aprende las bases del dibujo en el urban sketching. | 2025-03-15 | 10:00:00 | Palacio del Condestable, calle Mayor 2, Pamplona | masterclass |              1 |  25.00 |              5 |             20 | Arte     | Lápiz, carboncillo | 2025-01-05 08:27:31.276+00 | 2025-01-05 08:27:31.276+00 | 2025-01-05 08:27:31.278+00 | 2025-01-05 08:27:31.278+00
(1 row)
```


## Conclusiones

- Esta plataforma web tiene el potencial de convertirse en un recurso valioso para la comunidad de Urban Sketching y otras técnicas de dibujo rápido en Pamplona. Al proporcionar un espacio para compartir información, aprender, conectar con otros artistas y mostrar su trabajo, la plataforma puede contribuir al crecimiento y desarrollo de esta comunidad, fomentando la creatividad y el intercambio de conocimientos.
- La plataforma responde a la necesidad de un espacio local e independiente, gestionado por y para la comunidad de artistas de Pamplona, evitando la dependencia de plataformas externas con condiciones restrictivas. 
- La implementación de la base de datos propuesta, con sus entidades y relaciones definidas y en proceso continúo de transformaciones a fin de adaptarla lo mejor posible a cumplir todas las necesidades de la plataforma, permitirá gestionar la información de manera eficiente y ofrecer una experiencia de usuario óptima, facilitando la organización de eventos, la gestión de perfiles y la interacción entre los miembros de la comunidad.

### Reestructuración del proyecto Urban Sketching

Dada la nueva información y formación recibida sobre el esquema de la base de datos; oída la sugerencia de la profesora Itziar sobre que es mejor empezar el proyecto, he decidido cambiar y volver a reestructurarlo, como también comentó es mejor hacerlo sin express así que me veo en la necesidad de eliminar Express y buscar una implementación que se adapte y permita servir las páginas a fin de ir comprobando y poder actualizar la implementaciones tanto de la base de datos como del servidor.

## Esta es la siguiente reestructuración del proyecto:

1. Crear un proyecto con Node js, PostgresQL con sequielize (ORM) con docker donde se pueda acceder a pgAdmin para mejor gestión de la base de datos.

2. Nueva reorganización de la estructura de archivos:
```bash
urban-sketchers/
│
├── src/
│   ├── config/
│   │   └── database.js         # Configuración de Sequelize
│   │
│   ├── models/
│   │
│   │
│   ├── controllers/
│   │
│   │  
│   │
│   ├── routes/
│   │   ├── router.js          # Router principal usando http
│   │   └── routeHandlers/     # Manejadores de rutas específicos
│   │
│   │
│   └── server.js              # Punto de entrada de la aplicación
│
├── docker/
│   ├── node/
│   │   └── Dockerfile         # Dockerfile para Node.js
│   └── postgres/
│       └── init-scripts/      # Scripts de inicialización de PostgreSQL
│           └── 01-init.sql
│
├── .env                       # Variables de entorno
├── .gitignore
├── docker-compose.yml         # Configuración de servicios Docker
├── package.json
└── README.md
```
