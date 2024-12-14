-- Consultas SQL para la base de datos de la clase 1 y 2.
-- Creadas tablas y consultas.
# Database Queries

postgres=# SELECT * FROM libro;
  codigo  |   titulo   |   isbn   | editorial
----------+------------+----------+-----------
 23654120 | El Quijote | 25841365 | Planeta
(1 row)

postgres=# SELECT * FROM autor;
 codigo |     nombre     | alias | apellidos
--------+----------------+-------+-----------
 25874  | Cervantes      |       |
 25484  | Edgar Alan Poe |       |
(2 rows)
-- Listado de libros de la tabla libro.
postgres=# SELECT * FROM usuario;
 codigo  |     nombre      | telefono |            direccion
---------+-----------------+----------+---------------------------------
 258742  | Abigail Ros     | -51596   | Avda Madrid 255 en Via Layetana
 1258746 | Rocio Montes    | -48313   | Calle Javea 13
 356699  | Andrade Jaen    | -55182   | Avda Pio XII 35
 36988   | Javier Beite C. | -57919   | Calle de Abajo 25
(4 rows)
-- Consulta de usuario con nombre 'Abigail Ros' de la tabla usuario.
postgres=# SELECT * FROM usuario WHERE nombre = 'Abigail Ros';
 codigo |   nombre    | telefono |            direccion
--------+-------------+----------+---------------------------------
 258742 | Abigail Ros | -51596   | Avda Madrid 255 en Via Layetana
(1 row)
-- Consulta de autor con nombre 'Edgar Alan Poe' de la tabla autor.
postgres=# SELECT * FROM autor WHERE nombre = 'Edgar Alan Poe';
 codigo |     nombre     | alias | apellidos
--------+----------------+-------+-----------
 25484  | Edgar Alan Poe |       |
(1 row)

-- PostgreSQL database dump
-- 

-- Dumped from database version 16.4 (Debian 16.4-1.pgdg120+1)
-- Dumped by pg_dump version 16.4 (Debian 16.4-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Cliente; Type: TABLE; Schema: public; Owner: postgres
-- Relación 1:N entre Cliente y Compra.

CREATE TABLE public."Cliente" (
    dni character varying(9) NOT NULL,
    nombre character varying(255) NOT NULL,
    apellidos character varying(255) NOT NULL,
    "direccion " text
);


ALTER TABLE public."Cliente" OWNER TO postgres;

--
-- Name: Compra; Type: TABLE; Schema: public; Owner: postgres
-- Relación N:M entre Compra y Producto.

CREATE TABLE public."Compra" (
    id_compra integer NOT NULL,
    dni_cliente character varying(9) NOT NULL,
    fecha_compra date
);


ALTER TABLE public."Compra" OWNER TO postgres;

--
-- Name: Compra_id_compra_seq; Type: SEQUENCE; Schema: public; Owner: postgres
-- Secuencia para la tabla Compra.

CREATE SEQUENCE public."Compra_id_compra_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Compra_id_compra_seq" OWNER TO postgres;

--
-- Name: Compra_id_compra_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
-- 

ALTER SEQUENCE public."Compra_id_compra_seq" OWNED BY public."Compra".id_compra;


--
-- Name: Detalle de compra; Type: TABLE; Schema: public; Owner: postgres
-- Relación N:M entre Compra y Producto.

CREATE TABLE public."Detalle de compra" (
    id_compra integer NOT NULL,
    codigo_producto integer NOT NULL,
    cantidad integer,
    precio_unitario numeric(10,2)[]
);


ALTER TABLE public."Detalle de compra" OWNER TO postgres;

--
-- Name: Producto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Producto" (
    codigo_producto integer NOT NULL,
    nombre character varying(255) NOT NULL,
    "descripcion " text,
    precio numeric(10,0)
);


ALTER TABLE public."Producto" OWNER TO postgres;

--
-- Name: Producto_codigo_producto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Producto_codigo_producto_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Producto_codigo_producto_seq" OWNER TO postgres;

--
-- Name: Producto_codigo_producto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Producto_codigo_producto_seq" OWNED BY public."Producto".codigo_producto;


--
-- Name: Proveedor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Proveedor" (
    nif character varying(9) NOT NULL,
    nombre character varying(255) NOT NULL,
    direccion text,
    email character varying(255)
);


ALTER TABLE public."Proveedor" OWNER TO postgres;

--
-- Name: Stock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Stock" (
    codigo_producto integer NOT NULL,
    cantidad_disponible integer
);


ALTER TABLE public."Stock" OWNER TO postgres;

--
-- Name: Suministra; Type: TABLE; Schema: public; Owner: postgres
-- Relación N:M entre Proveedor y Producto.

CREATE TABLE public."Suministra" (
    nif_proveedor character varying(9) NOT NULL,
    codigo_producto integer NOT NULL,
    fecha_suministro date,
    cantidad integer
);


ALTER TABLE public."Suministra" OWNER TO postgres;

--
-- Name: Compra id_compra; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Compra" ALTER COLUMN id_compra SET DEFAULT nextval('public."Compra_id_compra_seq"'::regclass);


--
-- Name: Producto codigo_producto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Producto" ALTER COLUMN codigo_producto SET DEFAULT nextval('public."Producto_codigo_producto_seq"'::regclass);


--
-- Data for Name: Cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Cliente" (dni, nombre, apellidos, "direccion ") FROM stdin;
12365489A	Juan	Pérez Gómez	Calle Mayor, 1
75645678B	Juana María	Pérez Gómez	Calle Mayor, 15
12345678D	Pablo	Saínz Gómez	Calle Nueva, 1
12345678X	Diego	Gómez Cornelio	Avda. Barañáin, 31
87654321B	Ana	García López	Avenida Principal, 123
98765432C	Luis	Martínez Sánchez	Calle Secundaria, 45
\.


--
-- Data for Name: Compra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Compra" (id_compra, dni_cliente, fecha_compra) FROM stdin;
\.


--
-- Data for Name: Detalle de compra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Detalle de compra" (id_compra, codigo_producto, cantidad, precio_unitario) FROM stdin;
\.


--
-- Data for Name: Producto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Producto" (codigo_producto, nombre, "descripcion ", precio) FROM stdin;
23658742	Bañador	Bañador de natación masculio	25
12365486	Balón Fútbol	Balón de fútbol de cuero	25
69857555	Raqueta Tenis	Raqueta de tenis profesional	121
23695252	Zapatillas Running	Zapatillas para correr	80
256256952	Balón Baloncesto	Balón de baloncesto talla 7	35
\.


--
-- Data for Name: Proveedor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Proveedor" (nif, nombre, direccion, email) FROM stdin;
A12345678	Deportes ACME	Avenida Principal, 123	acme@hotmail.es
B87654321	Equipamiento Deportivo SL	Calle Fábrica, 7	equipativo@yahoo.es
C98765432	Proveedor Zapatos	Calle Mayor, 10	provezapatos@terra.es
\.


--
-- Data for Name: Stock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Stock" (codigo_producto, cantidad_disponible) FROM stdin;
\.


--
-- Data for Name: Suministra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Suministra" (nif_proveedor, codigo_producto, fecha_suministro, cantidad) FROM stdin;
\.


--
-- Name: Compra_id_compra_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Compra_id_compra_seq"', 1, false);


--
-- Name: Producto_codigo_producto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Producto_codigo_producto_seq"', 1, false);


--
-- Name: Cliente Cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cliente"
    ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY (dni);


--
-- Name: Compra Compra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Compra"
    ADD CONSTRAINT "Compra_pkey" PRIMARY KEY (id_compra);


--
-- Name: Detalle de compra Detalle de compra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Detalle de compra"
    ADD CONSTRAINT "Detalle de compra_pkey" PRIMARY KEY (id_compra, codigo_producto);


--
-- Name: Producto Producto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Producto"
    ADD CONSTRAINT "Producto_pkey" PRIMARY KEY (codigo_producto);


--
-- Name: Proveedor Proveedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Proveedor"
    ADD CONSTRAINT "Proveedor_pkey" PRIMARY KEY (nif);


--
-- Name: Stock Stock_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Stock"
    ADD CONSTRAINT "Stock_pkey" PRIMARY KEY (codigo_producto);


--
-- Name: Suministra Suministra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suministra"
    ADD CONSTRAINT "Suministra_pkey" PRIMARY KEY (nif_proveedor, codigo_producto);


--
-- Name: Detalle de compra Producto restringuido; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Detalle de compra"
    ADD CONSTRAINT "Producto restringuido" FOREIGN KEY (codigo_producto) REFERENCES public."Producto"(codigo_producto);


--
-- Name: Suministra Restringuido; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suministra"
    ADD CONSTRAINT "Restringuido" FOREIGN KEY (codigo_producto) REFERENCES public."Producto"(codigo_producto);


--
-- Name: Compra Restringuido; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Compra"
    ADD CONSTRAINT "Restringuido" FOREIGN KEY (dni_cliente) REFERENCES public."Cliente"(dni);


--
-- Name: Detalle de compra Restringuido; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Detalle de compra"
    ADD CONSTRAINT "Restringuido" FOREIGN KEY (id_compra) REFERENCES public."Compra"(id_compra);


--
-- Name: Suministra Restringuir; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suministra"
    ADD CONSTRAINT "Restringuir" FOREIGN KEY (nif_proveedor) REFERENCES public."Proveedor"(nif);


--
-- Name: Stock Restringuir; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Stock"
    ADD CONSTRAINT "Restringuir" FOREIGN KEY (codigo_producto) REFERENCES public."Producto"(codigo_producto);


--
-- PostgreSQL database dump complete
--

-- filepath: /home/curso/albaniles-digitales/workspace-1/databases/clase1/compose-postgres/queries.sql
SELECT * FROM your_table;

