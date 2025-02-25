#!/bin/bash

# Configuración de la base de datos
DB_NAME="express-db-egomez"
DB_USER="postgres"
DB_HOST="127.0.0.1"
DB_PORT="5432"

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