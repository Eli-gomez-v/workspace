/*================================================================*/
/* PLATAFORMA ARTE LOCAL */
-- Database: plataforma_arte_local

-- DROP DATABASE IF EXISTS plataforma_arte_local;

CREATE DATABASE plataforma_arte_local
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

/*===============================================================*/
INSERTAR DATOS DE PRUEBA
/*===============================================================*/
-- Path: databases/plataforma_arte_local/insert_data.sql
-- Obtener todos los usuarios:
SELECT id, nombre, email, password, tipo, portfolio_publico, biografia, foto_perfil, created_at, updated_at, "createdAt", "updatedAt", usuario_id
FROM public.usuario;
"id"	"nombre"	"email"	            "password"	    "tipo"	"portfolio_publico"	"biografia"	"foto_perfil"	"created_at"	                "updated_at"	                "createdAt"	                    "updatedAt"	                    "usuario_id"
5	    "María"	    "maria@example.com"	"contraseña5"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
5	    "María"	    "maria@example.com"	"contraseña5"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
1	    "Ana"	    "ana@example.com"	"contraseña1"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
2	    "Juan"	    "juan@example.com"	"contraseña2"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
3	    "Pedro"	    "pedro@example.com"	"contraseña3"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
4	    "Laura"	    "laura@example.com"	"contraseña4"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
5	    "María"	    "maria@example.com"	"contraseña5"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
6	    "Luis"	    "luis@example.com"	"contraseña6"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
7	    "Sofía"	    "sofia@example.com"	"contraseña7"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]
8	    "Carlos"	"carlos@example.com""contraseña8"	"usuario"	true			   [null]       [null]      "2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.259+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]

-- Obtener un ususario por id:
SELECT * FROM usuario WHERE id = 1;

"id"	"nombre"	"email"	            "password"	    "tipo"	    "portfolio_publico"	"biografia"	"foto_perfil"	"created_at"	                "updated_at"	                "createdAt"	                    "updatedAt"	                   "usuario_id"
1	    "Ana"	    "ana@example.com"	"contraseña1"	"usuario"	true			       [null]      [null]       "2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	"2025-01-05 08:27:31.258+00"	   [null]

-- Obtener todos los eventos:
SELECT id, titulo, descripcion, fecha, hora, lugar, tipo, organizador_id, precio, plazas_minimas, plazas_maximas, tematica, tecnicas, created_at, updated_at, "createdAt", "updatedAt"
FROM public.evento;

"id"	"titulo"	                                "descripcion"	                                        "fecha"	        "hora"	    "lugar"	                                            "tipo"	        "organizador_id"	"precio"	"plazas_minimas"	"plazas_maximas"	"tematica"	"tecnicas"	            "created_at"	                "updated_at"	                "createdAt"	                    "updatedAt"
1	    "Taller de dibujo en el urban sketching"	"Aprende las bases del dibujo en el urban sketching."	"2025-03-15"	"10:00:00"	"Palacio del Condestable, calle Mayor 2, Pamplona"	"masterclass"	1	                 25.00	                 5	                20	    "Arte"	    "Lápiz, carboncillo"	"2025-01-05 08:27:31.276+00"	"2025-01-05 08:27:31.276+00"	"2025-01-05 08:27:31.278+00"	"2025-01-05 08:27:31.278+00"

-- Obtener un evento con información del organizador:
SELECT e.*, u.nombre AS organizador_nombre, u.email AS organizador_email 
FROM evento e
JOIN usuario u ON e.organizador_id = u.id
WHERE e.id = 1;

"id"	"titulo"	                                "descripcion"	                                        "fecha"	        "hora"	    "lugar"	                                            "tipo"	        "organizador_id"	"precio"	"plazas_minimas"	"plazas_maximas"	"tematica"	"tecnicas"	            "created_at"	                "updated_at"	                "createdAt"	                    "updatedAt"	                    "organizador_nombre"	"organizador_email"
1	    "Taller de dibujo en el urban sketching"	"Aprende las bases del dibujo en el urban sketching."	"2025-03-15"	"10:00:00"	"Palacio del Condestable, calle Mayor 2, Pamplona"	"masterclass"	1	                 25.00	                 5	                20	    "Arte"	    "Lápiz, carboncillo"	"2025-01-05 08:27:31.276+00"	"2025-01-05 08:27:31.276+00"	"2025-01-05 08:27:31.278+00"	"2025-01-05 08:27:31.278+00"	"Ana"	                "ana@example.com"

-- Obtener los usuarios que han reservado una plaza en un evento:
SELECT u.nombre, u.email
FROM usuario u
JOIN inscripcion i ON u.id = i.usuario_id
WHERE i.evento_id = 1;

"nombre"	"email"
"Juan"	    "juan@example.com"
"Pedro"	    "pedro@example.com"
"Laura"	    "laura@example.com"
"María"	    "maria@example.com"
"Luis"	    "luis@example.com"
"Sofía"	    "sofia@example.com"
"Carlos"	"carlos@example.com"

-- Obtener eventos con filtros:
SELECT * 
FROM evento
WHERE tipo = 'masterclass' AND precio < 30;

"id"	"titulo"	                                "descripcion"	                                        "fecha"	        "hora"	    "lugar"	                                            "tipo"	        "organizador_id"	"precio"	"plazas_minimas"	"plazas_maximas"	"tematica"	"tecnicas"	            "created_at"	                "updated_at"	                "createdAt"	                    "updatedAt"
1	    "Taller de dibujo en el urban sketching"	"Aprende las bases del dibujo en el urban sketching."	"2025-03-15"	"10:00:00"	"Palacio del Condestable, calle Mayor 2, Pamplona"	"masterclass"	1	                 25.00	                 5	                20	    "Arte"	    "Lápiz, carboncillo"	"2025-01-05 08:27:31.276+00"	"2025-01-05 08:27:31.276+00"	"2025-01-05 08:27:31.278+00"	"2025-01-05 08:27:31.278+00"

-- Contar el número de inscripciones a un evento:
SELECT COUNT(*) 
FROM inscripcion 
WHERE evento_id = 1;

    "count"
1       7

