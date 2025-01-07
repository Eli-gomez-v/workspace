/*=============================================================*/
/*=          Created by: Eli Gomez                             =*/
Database: tiempoProyecto
/*=============================================================*/
INSERT INTO public."User"(
	id, name, "createdAt", "updatedAt")
	VALUES (2, 'Eli Gomez', '2025-01-07 10:37:51.000+00', '2025-01-07 10:37:51.000+00');

-- Introducción del proyecto
SELECT id, name, "createdAt", "updatedAt"
	FROM public."Proyecto";

INSERT INTO public."Proyecto"(
	id, name, "createdAt", "updatedAt")
	VALUES (2, 'plataforma_arte_local', '2025-01-07 09:57:04.748731+00', '2025-01-07 09:57:04.748731+00');

id  name                    createdAt                       updatedAt
1	"Proyecto Inicial"	    "2025-01-07 09:23:35.923+00"	"2025-01-07 09:23:35.923+00"
2	"plataforma_arte_local"	"2025-01-07 09:57:04.748731+00"	"2025-01-07 09:57:04.748731+00" 

-- Intruducción de horas html
SELECT id, date, hours, "proyectoId", "createdAt", "updatedAt"
	FROM public."HtmlHours";

INSERT INTO public."HtmlHours"(
    id, date, hours, "proyectoId", "createdAt", "updatedAt")
    VALUES (1, '2024-11-25', 90, 1, '2025-01-07 09:57:04.748731+00', '2025-01-07 09:57:04.748731+00');

id  date        hours   proyectoId  createdAt                       updatedAt
1	"2024-11-25"	90	    1	    "2025-01-07 09:57:04.748731+00"	"2025-01-07 09:57:04.748731+00"

-- Introducción de horas en Node js
SELECT id, date, hours, "proyectoId", "createdAt", "updatedAt"
	FROM public."NodeHours"

INSERT INTO public."NodeHours"(
    id, date, hours, "proyectoId", "createdAt", "updatedAt")
    VALUES (2, '2024-11-25', 120, 1, '2025-01-07 09:57:04.748731+00', '2025-01-07 09:57:04.748731+00');

id   date          hours   proyectoId  createdAt                        updatedAt
2    "2024-11-25"	120	    1	       "2025-01-07 09:57:04.748731+00"	"2025-01-07 09:57:04.748731+00"  

-- Introducción horas en database
SELECT id, date, hours, "proyectoId", "createdAt", "updatedAt"
	FROM public."DatabaseHours";

INSERT INTO public."DatabaseHours"(
    id, date, hours, "proyectoId", "createdAt", "updatedAt")
    VALUES (3, '2024-11-25', 90, 1, '2025-01-07 09:57:04.748731+00', '2025-01-07 09:57:04.748731+00');
    
id    date        hours	proyectoId	createdAt	                        updatedAt
3	"2024-11-25"	90	1	        "2025-01-07 09:57:04.748731+00"	    "2025-01-07 09:57:04.748731+00"   

-- Horas totales del proyecto:

SELECT SUM(hours) AS "Horas totales"
FROM (
    SELECT hours FROM public."HtmlHours"
    UNION ALL
    SELECT hours FROM public."NodeHours"
    UNION ALL
    SELECT hours FROM public."DatabaseHours"
    UNION ALL
    SELECT hours FROM public."CodeHours"
) AS horas_totales;

    "Horas totales"
1    510

-- Horas conjuntas de NodeHours y DatabaseHours:
SELECT SUM(N.hours + D.hours) AS "Horas Node + Database"
FROM public."NodeHours" N
JOIN public."DatabaseHours" D ON N."proyectoId" = D."proyectoId";


    "Horas Node + Database"
1    210

-- Media de horas por trabajo en código:
SELECT AVG(hours) AS "Media horas CodeHours"
FROM public."CodeHours";

    "Media horas CodeHours"
1   60.0000000000000000
    
