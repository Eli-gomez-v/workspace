/*--------------------------------------------------------*/
Proyecto Módulo Databases
/*---------------------------------------------------------*/

/*------------------------------------------------------*/
CONSULTAS SQL PARA LA BASE DE DATOS NORTHWIND

1. -- Buscar todos los clientes (customers) con el postal_code = '1010'.

SELECT customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax
	FROM public.customers;


SELECT * FROM customers WHERE postal_code = '1010';

"CACTU"	"Cactus Comidas para llevar"	"Patricio Simpson"	"Sales Agent"	        "Cerrito 333"	                       "Buenos Aires"		"1010"	"Argentina"	"(1) 135-5555"	"(1) 135-4892"
"OCEAN"	"Océano Atlántico Ltda."	    "Yvonne Moncada"	"Sales Agent"	        "Ing. Gustavo Moncada 8585 Piso 20-A"	"Buenos Aires"		"1010"	"Argentina"	"(1) 135-5333"	"(1) 135-5535"
"RANCH"	"Rancho grande"	                "Sergio Gutiérrez"	"Sales Representative"	"Av. del Libertador 900"	          "Buenos Aires"		"1010"	"Argentina"	"(1) 123-5555"	"(1) 123-5556"

2. -- Buscar el número del teléfono que tiene el proveedor (supplier) con id 11.

SELECT supplier_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax, homepage
	FROM public.suppliers;

-- Esta consulta selecciona el campo phone cuyo valor es igual a 11.
SELECT phone FROM suppliers WHERE supplier_id = 11;
	
"phone"
"(010) 9984510"

3. -- Listar los primero 10 pedidos (orders) ordenados de manera descendente por la fecha de pedido.

SELECT order_id, customer_id, employee_id, order_date, required_date, shipped_date, ship_via, freight, ship_name, ship_address, ship_city, ship_region, ship_postal_code, ship_country
	FROM public.orders;

SELECT * FROM orders ORDER BY order_date DESC LIMIT 10;	

"order_id"	"customer_id"	"employee_id"	"order_date"	"required_date"	"shipped_date"	"ship_via"	"freight"	"ship_name"	                    "ship_address"	                   				 "ship_city"	"ship_region"	"ship_postal_code"	"ship_country"
11074	    "SIMOB"	                   7	"1998-05-06"	"1998-06-03"		   [null]          2	   18.44	"Simons bistro"	                "Vinbæltet 34"	                    			   "Kobenhavn"		[null]			"1734"	            "Denmark"
11075	    "RICSU"	                   8	"1998-05-06"	"1998-06-03"		   [null]          2	    6.19	"Richter Supermarkt"	        "Starenweg 5"	                    			   "Genève"			[null]			"1204"	        "Switzerland"
11077	    "RATTC"	                   1	"1998-05-06"	"1998-06-03"		   [null]          2	    8.53	"Rattlesnake Canyon Grocery"	"2817 Milton Dr."	                		       "Albuquerque"	"NM"	        "87110"	            	"USA"
11076	    "BONAP"	                   4	"1998-05-06"	"1998-06-03"		   [null]          2	   38.28	"Bon app'"	                    "12, rue des Bouchers"	            			   "Marseille"		[null]          "13008"	         	 "France"
11072	    "ERNSH"	                   4	"1998-05-05"	"1998-06-02"		   [null]          2	  258.64	"Ernst Handel"	                "Kirchgasse 6"	                    			   "Graz"		    [null]          "8010"	            "Austria"
11070	    "LEHMS"	                   2	"1998-05-05"	"1998-06-02"		   [null]          1	  136	    "Lehmanns Marktstand"	        "Magazinweg 7"	                    			   "Frankfurt a.M."	[null]			"60528"	            "Germany"
11073	    "PERIC"	                   2	"1998-05-05"	"1998-06-02"		   [null]          2	   24.95	"Pericles Comidas clásicas"	    "Calle Dr. Jorge Cash 321"	        			   "México D.F."	[null]			"05033"	             "Mexico"
11071	    "LILAS"	                   1	"1998-05-05"	"1998-06-02"		   [null]          1	    0.93	"LILA-Supermercado"	            "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"   "Barquisimeto"	"Lara"	        "3508"	          "Venezuela"
11067	    "DRACD"	                   1	"1998-05-04"	"1998-05-18"	"1998-05-06"	       2	    7.98	"Drachenblut Delikatessen"	    "Walserweg 21"									   "Aachen"		    [null]			"52066"				"Germany"
11068	    "QUEEN"	                   8	"1998-05-04"	"1998-06-01"		   [null]          2	   81.75	"Queen Cozinha"	                "Alameda dos Canàrios, 891"						   "Sao Paulo"		"SP"			"05487-020"	 		 "Brazil"
	
4. -- Buscar todos los clientes (customers) que vivan en London, Madrid o Brazil.

SELECT * FROM customers WHERE city = 'London'OR city = 'Madrid' OR country = 'Brazil';

"customer_id"	"company_name"							"contact_name"		"contact_title"					"address"						"city"	  	 "region"	"postal_code"	"country"	"phone"				"fax"
"AROUT"			"Around the Horn"						"Thomas Hardy"		"Sales Representative"			"120 Hanover Sq."				"London"	  [null]	"WA1 1DP"		"UK"		"(171) 555-7788"	"(171) 555-6750"
"BOLID"			"Bólido Comidas preparadas"				"Martín Sommer"		"Owner"							"C/ Araquil, 67"				"Madrid"	  [null]	"28023"			"Spain"		"(91) 555 22 82"	"(91) 555 91 99"
"BSBEV"			"B's Beverages"							"Victoria Ashworth"	"Sales Representative"			"Fauntleroy Circus"				"London"	  [null]	"EC2 5NT"		"UK"		"(171) 555-1212"	[null]
"COMMI"			"Comércio Mineiro"						"Pedro Afonso"		"Sales Associate"				"Av. dos Lusíadas, 23"			"Sao Paulo"	    "SP"	"05432-043"		"Brazil"	"(11) 555-7647"	    [null]
"CONSH"			"Consolidated Holdings"					"Elizabeth Brown"	"Sales Representative"			"Berkeley Gardens 12  Brewery"	"London"	  [null]	"WX1 6LT"		"UK"		"(171) 555-2282"	"(171) 555-9199"
"EASTC"			"Eastern Connection"					"Ann Devon"			"Sales Agent"					"35 King George"				"London"	  [null]	"WX3 6FW"		"UK"		"(171) 555-0297"	"(171) 555-3373"
"FAMIA"			"Familia Arquibaldo"					"Aria Cruz"			"Marketing Assistant"			"Rua Orós, 92"					"Sao Paulo"	    "SP"	"05442-030"		"Brazil"	"(11) 555-9857"	    [null]
"FISSA"			"FISSA Fabrica Inter. Salchichas S.A."	"Diego Roel"		"Accounting Manager"			"C/ Moralzarzal, 86"			"Madrid"	  [null]	"28034"			"Spain"		"(91) 555 94 44"	"(91) 555 55 93"
"GOURL"			"Gourmet Lanchonetes"					"André Fonseca"		"Sales Associate"				"Av. Brasil, 442"				"Campinas"	    "SP"	"04876-786"		"Brazil"	"(11) 555-9482"		[null]
"HANAR"			"Hanari Carnes"							"Mario Pontes"		"Accounting Manager"			"Rua do Paço, 67"				"Rio de Janeiro""RJ"	"05454-876"		"Brazil"	"(21) 555-0091"		"(21) 555-8765"
"NORTS"			"North/South"							"Simon Crowther"	"Sales Associate"				"South House 300 Queensbridge"	"London"	  [null]	"SW7 1RZ"		"UK"		"(171) 555-7733"	"(171) 555-2530"
"QUEDE"			"Que Delícia"							"Bernardo Batista"	"Accounting Manager"			"Rua da Panificadora, 12"		"Rio de Janeiro""RJ"	"02389-673"		"Brazil"	"(21) 555-4252"		"(21) 555-4545"
"QUEEN"			"Queen Cozinha"							"Lúcia Carvalho"	"Marketing Assistant"			"Alameda dos Canàrios, 891"		"Sao Paulo"		"SP"	"05487-020"		"Brazil"	"(11) 555-1189"		[null]
"RICAR"			"Ricardo Adocicados"					"Janete Limeira"	"Assistant Sales Agent"			"Av. Copacabana, 267"			"Rio de Janeiro""RJ"	"02389-890"		"Brazil"	"(21) 555-3412"		[null]
"ROMEY"			"Romero y tomillo"						"Alejandra Camino"	"Accounting Manager"			"Gran Vía, 1"					"Madrid"	  [null]	"28001"			"Spain"		"(91) 745 6200"		"(91) 745 6210"
"SEVES"			"Seven Seas Imports"					"Hari Kumar"		"Sales Manager"					"90 Wadhurst Rd."				"London"	  [null]	"OX15 4NB"		"UK"		"(171) 555-1717"	"(171) 555-5646"
"TRADH"			"Tradição Hipermercados"				"Anabela Domingues"	"Sales Representative"			"Av. Inês de Castro, 414"		"Sao Paulo"	"SP"		"05634-030"		"Brazil"	"(11) 555-2167"		"(11) 555-2168"
"WELLI"			"Wellington Importadora"				"Paula Parente"		"Sales Manager"					"Rua do Mercado, 12"			"Resende"	"SP"		"08737-363"		"Brazil"	"(14) 555-8122"		[null]

5. -- Añadir un nuevo registro en la tabla clientes (customers) con la siguiente información (indicaa en el mismo orden de las columnas): "XYZ", "Mi empresa", "Juan Pérez", "CEO", "Calle Falsa 123", "Madrid", "Madrid", "28000", "Spain", "123456789", "987654321"."The Shire","Bilbo Baggins","I Hobbit-Hole", "Bag End", ""111", y "Middle Earth".

/*Esta consulta inserta un nuevo registro en la tabla Customers con los valores especificados para cada campo. Se asume que el CustomerID es la clave primaria y que los campos Region y Fax no son obligatorios*/

INSERT INTO public.customers(
	customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax)
	VALUES ('XYZ', 'The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', NULL, NULL, '111', 'Middle Earth', NULL, NULL);

"customer_id"	"company_name"	"contact_name"	"contact_title"	"address"	"city"	"region"	"postal_code"	"country"		"phone"		"fax"
"XYZ"			"The Shire"		"Bilbo Baggins"	"1 Hobbit-Hole"	"Bag End"	[null]	[null]  		"111"		"Middle Earth"	[null]		[null]

6. -- Actualizar el código postal a "11122" del cliente Bilbo Baggins.

SELECT customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax
	FROM public.customers;

UPDATE customers SET postal_code = '11122' WHERE contact_name = 'Bilbo Baggins';

"customer_id"	"company_name"	"contact_name"	"contact_title"	"address"	"city"	"region"	"postal_code"	"country"			"phone"		"fax"
"XYZ"			"The Shire"		"Bilbo Baggins"	"1 Hobbit-Hole"	"Bag End"	[null]	[null]		"11122"			"Middle Earth"		[null]		[null]
-- Actualizar el código postal a "11122" del cliente Bilbo Baggins.
/*la consulta 6 puede no funcionar bien en función de los registros que haya en la base de datos. Cuando se actualiza un registro lo correcto es que la condición sea en función del primarykey para asegurarte que sólo actualizas un registro y no otros. En este caso, si hubiera más registros con ese mismo nombre se te habrían actualizado todos, no sólo uno.*/

SELECT customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax
    FROM public.customers;
/*la consulta 6 puede no funcionar bien en función de los registros que haya en la base de datos. 
Cuando se actualiza un registro lo correcto es que la condición sea en función del primarykey para asegurarte que sólo actualizas un registro y no otros. 
En este caso, si hubiera más registros con ese mismo nombre se te habrían actualizado todos, no sólo uno.

- Supongamos que el customer_id de Bilbo Baggins es 'XYZ'
- He modificado la consulta update utilizando customer_id = 'XYZ' en lugar de contact_name = 'Bilbo Baggins'
- Esto hace y asegura que solo se actualice el registro con el customer_id específico y evita que se actualicen multiples registros
 con el mismo nombre de contacto*/
UPDATE customers SET postal_code = '11122' WHERE customer_id = 'XYZ';

"customer_id"	"company_name"	"contact_name"	"contact_title"	"address"	"city"	"region"	"postal_code"	"country"			"phone"		"fax"
"XYZ"			"The Shire"		"Bilbo Baggins"	"1 Hobbit-Hole"	"Bag End"	[null]	[null]		"11122"			"Middle Earth"		[null]		[null]

7. -- Mostrar "ProductName" y "CategoryName" de todos los productos (products).

SELECT product_id, product_name, supplier_id, category_id, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued
	FROM public.products;

SELECT p.product_name, c.category_name
FROM products p
JOIN categories c ON p.category_id = c.category_id;

"product_name"							"category_name"
"Chai"									"Beverages"
"Chang"									"Beverages"
"Aniseed Syrup"							"Condiments"
"Chef Anton's Cajun Seasoning"			"Condiments"
"Chef Anton's Gumbo Mix"				"Condiments"
"Grandma's Boysenberry Spread"			"Condiments"
"Uncle Bob's Organic Dried Pears"		"Produce"
"Northwoods Cranberry Sauce"			"Condiments"
"Mishi Kobe Niku"						"Meat/Poultry"
"Ikura"									"Seafood"
"Queso Cabrales"						"Dairy Products"
"Queso Manchego La Pastora"				"Dairy Products"
"Konbu"									"Seafood"
"Tofu"									"Produce"
"Genen Shouyu"							"Condiments"
"Pavlova"								"Confections"
"Alice Mutton"							"Meat/Poultry"
"Carnarvon Tigers"						"Seafood"
"Teatime Chocolate Biscuits"			"Confections"
"Sir Rodney's Marmalade"				"Confections"
"Sir Rodney's Scones"					"Confections"
"Gustaf's Knäckebröd"					"Grains/Cereals"
"Tunnbröd"								"Grains/Cereals"
"Guaraná Fantástica"					"Beverages"
"NuNuCa Nuß-Nougat-Creme"				"Confections"
"Gumbär Gummibärchen"					"Confections"
"Schoggi Schokolade"					"Confections"
"Rössle Sauerkraut"						"Produce"
"Thüringer Rostbratwurst"				"Meat/Poultry"
"Nord-Ost Matjeshering"					"Seafood"
"Gorgonzola Telino"						"Dairy Products"
"Mascarpone Fabioli"					"Dairy Products"
"Geitost"								"Dairy Products"
"Sasquatch Ale"							"Beverages"
"Steeleye Stout"						"Beverages"
"Inlagd Sill"							"Seafood"
"Gravad lax"							"Seafood"
"Côte de Blaye"							"Beverages"
"Chartreuse verte"						"Beverages"
"Boston Crab Meat"						"Seafood"
"Jack's New England Clam Chowder"		"Seafood"
"Singaporean Hokkien Fried Mee"			"Grains/Cereals"
"Ipoh Coffee"							"Beverages"
"Gula Malacca"							"Condiments"
"Rogede sild"							"Seafood"
"Spegesild"								"Seafood"
"Zaanse koeken"							"Confections"
"Chocolade"								"Confections"
"Maxilaku"								"Confections"
"Valkoinen suklaa"						"Confections"
"Manjimup Dried Apples"					"Produce"
"Filo Mix"								"Grains/Cereals"
"Perth Pasties"							"Meat/Poultry"
"Tourtière"								"Meat/Poultry"
"Pâté chinois"							"Meat/Poultry"
"Gnocchi di nonna Alice"				"Grains/Cereals"
"Ravioli Angelo"						"Grains/Cereals"
"Escargots de Bourgogne"				"Seafood"
"Raclette Courdavault"					"Dairy Products"
"Camembert Pierrot"						"Dairy Products"
"Sirop d'érable"						"Condiments"
"Tarte au sucre"						"Confections"
"Vegie-spread"							"Condiments"
"Wimmers gute Semmelknödel"				"Grains/Cereals"
"Louisiana Fiery Hot Pepper Sauce"		"Condiments"
"Louisiana Hot Spiced Okra"				"Condiments"
"Laughing Lumberjack Lager"				"Beverages"
"Scottish Longbreads"					"Confections"
"Gudbrandsdalsost"						"Dairy Products"
"Outback Lager"							"Beverages"
"Flotemysost"							"Dairy Products"
"Mozzarella di Giovanni"				"Dairy Products"
"Röd Kaviar"							"Seafood"
"Longlife Tofu"							"Produce"
"Rhönbräu Klosterbier"					"Beverages"
"Lakkalikööri"							"Beverages"
"Original Frankfurter grüne Soße"		"Condiments"

8.-- Mostrar "OrderID" y "CompanyName" del expedidor (shippers) de todos los pedidos (orders) realizados antes del 9 de agosto de 2012.

SELECT shipper_id, company_name, phone
	FROM public.shippers;

SELECT o.order_id, s.company_name
FROM orders o
JOIN shippers s ON o.ship_via = s.shipper_id
WHERE o.order_date < '2012-08-09';

"order_id"	"company_name"
10248	"Federal Shipping"
10249	"Speedy Express"
10250	"United Package"
10251	"Speedy Express"
10252	"United Package"
10253	"United Package"
10254	"United Package"
10255	"Federal Shipping"
10256	"United Package"
10257	"Federal Shipping"
10258	"Speedy Express"
10259	"Federal Shipping"
10260	"Speedy Express"
10261	"United Package"
10262	"Federal Shipping"
10263	"Federal Shipping"
10264	"Federal Shipping"
10265	"Speedy Express"
10266	"Federal Shipping"
10267	"Speedy Express"
10268	"Federal Shipping"
10269	"Speedy Express"
10270	"Speedy Express"
10271	"United Package"
10272	"United Package"
10273	"Federal Shipping"
10274	"Speedy Express"
10275	"Speedy Express"
10276	"Federal Shipping"
10277	"Federal Shipping"
10278	"United Package"
10279	"United Package"
10280	"Speedy Express"
10281	"Speedy Express"
10282	"Speedy Express"
10283	"Federal Shipping"
10284	"Speedy Express"
10285	"United Package"
10286	"Federal Shipping"
10287	"Federal Shipping"
10288	"Speedy Express"
10289	"Federal Shipping"
10290	"Speedy Express"
10291	"United Package"
10292	"United Package"
10293	"Federal Shipping"
10294	"United Package"
10295	"United Package"
10296	"Speedy Express"
10297	"United Package"
10298	"United Package"
10299	"United Package"
10300	"United Package"
10301	"United Package"
10302	"United Package"
10303	"United Package"
10304	"United Package"
10305	"Federal Shipping"
10306	"Federal Shipping"
10307	"United Package"
10308	"Federal Shipping"
10309	"Speedy Express"
10310	"United Package"
10311	"Federal Shipping"
10312	"United Package"
10313	"United Package"
10314	"United Package"
10315	"United Package"
10316	"Federal Shipping"
10317	"Speedy Express"
10318	"United Package"
10319	"Federal Shipping"
10320	"Federal Shipping"
10321	"United Package"
10322	"Federal Shipping"
10323	"Speedy Express"
10324	"Speedy Express"
10325	"Federal Shipping"
10326	"United Package"
10327	"Speedy Express"
10328	"Federal Shipping"
10329	"United Package"
10330	"Speedy Express"
10331	"Speedy Express"
10332	"United Package"
10333	"Federal Shipping"
10334	"United Package"
10335	"United Package"
10336	"United Package"
10337	"Federal Shipping"
10338	"Federal Shipping"
10339	"United Package"
10340	"Federal Shipping"
10341	"Federal Shipping"
10342	"United Package"
10343	"Speedy Express"
10344	"United Package"
10345	"United Package"
10346	"Federal Shipping"
10347	"Federal Shipping"
10348	"United Package"
10349	"Speedy Express"
10350	"United Package"
10351	"Speedy Express"
10352	"Federal Shipping"
10353	"Federal Shipping"
10354	"Federal Shipping"
10355	"Speedy Express"
10356	"United Package"
10357	"Federal Shipping"
10358	"Speedy Express"
10359	"Federal Shipping"
10360	"Federal Shipping"
10361	"United Package"
10362	"Speedy Express"
10363	"Federal Shipping"
10364	"Speedy Express"
10365	"United Package"
10366	"United Package"
10367	"Federal Shipping"
10368	"United Package"
10369	"United Package"
10370	"United Package"
10371	"Speedy Express"
10372	"United Package"
10373	"Federal Shipping"
10374	"Federal Shipping"
10375	"United Package"
10376	"United Package"
10377	"Federal Shipping"
10378	"Federal Shipping"
10379	"Speedy Express"
10380	"Federal Shipping"
10381	"Federal Shipping"
10382	"Speedy Express"
10383	"Federal Shipping"
10384	"Federal Shipping"
10385	"United Package"
10386	"Federal Shipping"
10387	"United Package"
10388	"Speedy Express"
10389	"United Package"
10390	"Speedy Express"
10391	"Federal Shipping"
10392	"Federal Shipping"
10393	"Federal Shipping"
10394	"Federal Shipping"
10395	"Speedy Express"
10396	"Federal Shipping"
10397	"Speedy Express"
10398	"Federal Shipping"
10399	"Federal Shipping"
10400	"Federal Shipping"
10401	"Speedy Express"
10402	"United Package"
10403	"Federal Shipping"
10404	"Speedy Express"
10405	"Speedy Express"
10406	"Speedy Express"
10407	"United Package"
10408	"Speedy Express"
10409	"Speedy Express"
10410	"Federal Shipping"
10411	"Federal Shipping"
10412	"United Package"
10413	"United Package"
10414	"Federal Shipping"
10415	"Speedy Express"
10416	"Federal Shipping"
10417	"Federal Shipping"
10418	"Speedy Express"
10419	"United Package"
10420	"Speedy Express"
10421	"Speedy Express"
10422	"Speedy Express"
10423	"Federal Shipping"
10424	"United Package"
10425	"United Package"
10426	"Speedy Express"
10427	"United Package"
10428	"Speedy Express"
10429	"United Package"
10430	"Speedy Express"
10431	"United Package"
10432	"United Package"
10433	"Federal Shipping"
10434	"United Package"
10435	"United Package"
10436	"United Package"
10437	"Speedy Express"
10438	"United Package"
10439	"Federal Shipping"
10440	"United Package"
10441	"United Package"
10442	"United Package"
10443	"Speedy Express"
10444	"Federal Shipping"
10445	"Speedy Express"
10446	"Speedy Express"
10447	"United Package"
10448	"United Package"
10449	"United Package"
10450	"United Package"
10451	"Federal Shipping"
10452	"Speedy Express"
10453	"United Package"
10454	"Federal Shipping"
10455	"United Package"
10456	"United Package"
10457	"Speedy Express"
10458	"Federal Shipping"
10459	"United Package"
10460	"Speedy Express"
10461	"Federal Shipping"
10462	"Speedy Express"
10463	"Federal Shipping"
10464	"United Package"
10465	"Federal Shipping"
10466	"Speedy Express"
10467	"United Package"
10468	"Federal Shipping"
10469	"Speedy Express"
10470	"United Package"
10471	"Federal Shipping"
10472	"Speedy Express"
10473	"Federal Shipping"
10474	"United Package"
10475	"Speedy Express"
10476	"Federal Shipping"
10477	"United Package"
10478	"Federal Shipping"
10479	"Federal Shipping"
10480	"United Package"
10481	"United Package"
10482	"Federal Shipping"
10483	"United Package"
10484	"Federal Shipping"
10485	"United Package"
10486	"United Package"
10487	"United Package"
10488	"United Package"
10489	"United Package"
10490	"United Package"
10491	"Federal Shipping"
10492	"Speedy Express"
10493	"Federal Shipping"
10494	"United Package"
10495	"Federal Shipping"
10496	"United Package"
10497	"Speedy Express"
10498	"United Package"
10499	"United Package"
10500	"Speedy Express"
10501	"Federal Shipping"
10502	"Speedy Express"
10503	"United Package"
10504	"Federal Shipping"
10505	"Federal Shipping"
10506	"United Package"
10507	"Speedy Express"
10508	"United Package"
10509	"Speedy Express"
10510	"Federal Shipping"
10511	"Federal Shipping"
10512	"United Package"
10513	"Speedy Express"
10514	"United Package"
10515	"Speedy Express"
10516	"Federal Shipping"
10517	"Federal Shipping"
10518	"United Package"
10519	"Federal Shipping"
10520	"Speedy Express"
10521	"United Package"
10522	"Speedy Express"
10523	"United Package"
10524	"United Package"
10525	"United Package"
10526	"United Package"
10527	"Speedy Express"
10528	"United Package"
10529	"United Package"
10530	"United Package"
10531	"Speedy Express"
10532	"Federal Shipping"
10533	"Speedy Express"
10534	"United Package"
10535	"Speedy Express"
10536	"United Package"
10537	"Speedy Express"
10538	"Federal Shipping"
10539	"Federal Shipping"
10540	"Federal Shipping"
10541	"Speedy Express"
10542	"Federal Shipping"
10543	"United Package"
10544	"Speedy Express"
10545	"United Package"
10546	"Federal Shipping"
10547	"United Package"
10548	"United Package"
10549	"Speedy Express"
10550	"Federal Shipping"
10551	"Federal Shipping"
10552	"Speedy Express"
10553	"United Package"
10554	"Federal Shipping"
10555	"Federal Shipping"
10556	"Speedy Express"
10557	"United Package"
10558	"United Package"
10559	"Speedy Express"
10560	"Speedy Express"
10561	"United Package"
10562	"Speedy Express"
10563	"United Package"
10564	"Federal Shipping"
10565	"United Package"
10566	"Speedy Express"
10567	"Speedy Express"
10568	"Federal Shipping"
10569	"Speedy Express"
10570	"Federal Shipping"
10571	"Federal Shipping"
10572	"United Package"
10573	"Federal Shipping"
10574	"United Package"
10575	"Speedy Express"
10576	"Federal Shipping"
10577	"United Package"
10578	"Federal Shipping"
10579	"United Package"
10580	"Federal Shipping"
10581	"Speedy Express"
10582	"United Package"
10583	"United Package"
10584	"Speedy Express"
10585	"Speedy Express"
10586	"Speedy Express"
10587	"Speedy Express"
10588	"Federal Shipping"
10589	"United Package"
10590	"Federal Shipping"
10591	"Speedy Express"
10592	"Speedy Express"
10593	"United Package"
10594	"United Package"
10595	"Speedy Express"
10596	"Speedy Express"
10597	"Federal Shipping"
10598	"Federal Shipping"
10599	"Federal Shipping"
10600	"Speedy Express"
10601	"Speedy Express"
10602	"United Package"
10603	"United Package"
10604	"Speedy Express"
10605	"United Package"
10606	"Federal Shipping"
10607	"Speedy Express"
10608	"United Package"
10609	"United Package"
10610	"Speedy Express"
10611	"United Package"
10612	"United Package"
10613	"United Package"
10614	"Federal Shipping"
10615	"Federal Shipping"
10616	"United Package"
10617	"United Package"
10618	"Speedy Express"
10619	"Federal Shipping"
10620	"Federal Shipping"
10621	"United Package"
10622	"Federal Shipping"
10623	"United Package"
10624	"United Package"
10625	"Speedy Express"
10626	"United Package"
10627	"Federal Shipping"
10628	"Federal Shipping"
10629	"Federal Shipping"
10630	"United Package"
10631	"Speedy Express"
10632	"Speedy Express"
10633	"Federal Shipping"
10634	"Federal Shipping"
10635	"Federal Shipping"
10636	"Speedy Express"
10637	"Speedy Express"
10638	"Speedy Express"
10639	"Federal Shipping"
10640	"Speedy Express"
10641	"United Package"
10642	"Federal Shipping"
10643	"Speedy Express"
10644	"United Package"
10645	"Speedy Express"
10646	"Federal Shipping"
10647	"United Package"
10648	"United Package"
10649	"Federal Shipping"
10650	"Federal Shipping"
10651	"United Package"
10652	"United Package"
10653	"Speedy Express"
10654	"Speedy Express"
10655	"United Package"
10656	"Speedy Express"
10657	"United Package"
10658	"Speedy Express"
10659	"United Package"
10660	"Speedy Express"
10661	"Federal Shipping"
10662	"United Package"
10663	"United Package"
10664	"Federal Shipping"
10665	"United Package"
10666	"United Package"
10667	"Speedy Express"
10668	"United Package"
10669	"Speedy Express"
10670	"Speedy Express"
10671	"Speedy Express"
10672	"United Package"
10673	"Speedy Express"
10674	"United Package"
10675	"United Package"
10676	"United Package"
10677	"Federal Shipping"
10678	"Federal Shipping"
10679	"Federal Shipping"
10680	"Speedy Express"
10681	"Federal Shipping"
10682	"United Package"
10683	"Speedy Express"
10684	"Speedy Express"
10685	"United Package"
10686	"Speedy Express"
10687	"United Package"
10688	"United Package"
10689	"United Package"
10690	"Speedy Express"
10691	"United Package"
10692	"United Package"
10693	"Federal Shipping"
10694	"Federal Shipping"
10695	"Speedy Express"
10696	"Federal Shipping"
10697	"Speedy Express"
10698	"Speedy Express"
10699	"Federal Shipping"
10700	"Speedy Express"
10701	"Federal Shipping"
10702	"Speedy Express"
10703	"United Package"
10704	"Speedy Express"
10705	"United Package"
10706	"Federal Shipping"
10707	"Federal Shipping"
10708	"United Package"
10709	"Federal Shipping"
10710	"Speedy Express"
10711	"United Package"
10712	"Speedy Express"
10713	"Speedy Express"
10714	"Federal Shipping"
10715	"Speedy Express"
10716	"United Package"
10717	"United Package"
10718	"Federal Shipping"
10719	"United Package"
10720	"United Package"
10721	"Federal Shipping"
10722	"Speedy Express"
10723	"Speedy Express"
10724	"United Package"
10725	"Federal Shipping"
10726	"Speedy Express"
10727	"Speedy Express"
10728	"United Package"
10729	"Federal Shipping"
10730	"Speedy Express"
10731	"Speedy Express"
10732	"Speedy Express"
10733	"Federal Shipping"
10734	"Federal Shipping"
10735	"United Package"
10736	"United Package"
10737	"United Package"
10738	"Speedy Express"
10739	"Federal Shipping"
10740	"United Package"
10741	"Federal Shipping"
10742	"Federal Shipping"
10743	"United Package"
10744	"Speedy Express"
10745	"Speedy Express"
10746	"Federal Shipping"
10747	"Speedy Express"
10748	"Speedy Express"
10749	"United Package"
10750	"Speedy Express"
10751	"Federal Shipping"
10752	"Federal Shipping"
10753	"Speedy Express"
10754	"Federal Shipping"
10755	"United Package"
10756	"United Package"
10757	"Speedy Express"
10758	"Federal Shipping"
10759	"Federal Shipping"
10760	"Speedy Express"
10761	"United Package"
10762	"Speedy Express"
10763	"Federal Shipping"
10764	"Federal Shipping"
10765	"Federal Shipping"
10766	"Speedy Express"
10767	"Federal Shipping"
10768	"United Package"
10769	"Speedy Express"
10770	"Federal Shipping"
10771	"United Package"
10772	"United Package"
10773	"Federal Shipping"
10774	"Speedy Express"
10775	"Speedy Express"
10776	"Federal Shipping"
10777	"United Package"
10778	"Speedy Express"
10779	"United Package"
10780	"Speedy Express"
10781	"Federal Shipping"
10782	"Federal Shipping"
10783	"United Package"
10784	"Federal Shipping"
10785	"Federal Shipping"
10786	"Speedy Express"
10787	"Speedy Express"
10788	"United Package"
10789	"United Package"
10790	"Speedy Express"
10791	"United Package"
10792	"Federal Shipping"
10793	"Federal Shipping"
10794	"Speedy Express"
10795	"United Package"
10796	"Speedy Express"
10797	"United Package"
10798	"Speedy Express"
10799	"Federal Shipping"
10800	"Federal Shipping"
10801	"United Package"
10802	"United Package"
10803	"Speedy Express"
10804	"United Package"
10805	"Federal Shipping"
10806	"United Package"
10807	"Speedy Express"
10808	"Federal Shipping"
10809	"Speedy Express"
10810	"Federal Shipping"
10811	"Speedy Express"
10812	"Speedy Express"
10813	"Speedy Express"
10814	"Federal Shipping"
10815	"Federal Shipping"
10816	"United Package"
10817	"United Package"
10818	"Federal Shipping"
10819	"Federal Shipping"
10820	"United Package"
10821	"Speedy Express"
10822	"Federal Shipping"
10823	"United Package"
10824	"Speedy Express"
10825	"Speedy Express"
10826	"Speedy Express"
10827	"United Package"
10828	"Speedy Express"
10829	"Speedy Express"
10830	"United Package"
10831	"United Package"
10832	"United Package"
10833	"United Package"
10834	"Federal Shipping"
10835	"Federal Shipping"
10836	"Speedy Express"
10837	"Federal Shipping"
10838	"Federal Shipping"
10839	"Federal Shipping"
10840	"United Package"
10841	"United Package"
10842	"Federal Shipping"
10843	"United Package"
10844	"United Package"
10845	"Speedy Express"
10846	"Federal Shipping"
10847	"Federal Shipping"
10848	"United Package"
10849	"United Package"
10850	"Speedy Express"
10851	"Speedy Express"
10852	"Speedy Express"
10853	"United Package"
10854	"United Package"
10855	"Speedy Express"
10856	"United Package"
10857	"United Package"
10858	"Speedy Express"
10859	"United Package"
10860	"Federal Shipping"
10861	"United Package"
10862	"United Package"
10863	"United Package"
10864	"United Package"
10865	"Speedy Express"
10866	"Speedy Express"
10867	"Speedy Express"
10868	"United Package"
10869	"Speedy Express"
10870	"Federal Shipping"
10871	"United Package"
10872	"United Package"
10873	"Speedy Express"
10874	"United Package"
10875	"United Package"
10876	"Federal Shipping"
10877	"Speedy Express"
10878	"Speedy Express"
10879	"Federal Shipping"
10880	"Speedy Express"
10881	"Speedy Express"
10882	"Federal Shipping"
10883	"Federal Shipping"
10884	"United Package"
10885	"Federal Shipping"
10886	"Speedy Express"
10887	"Federal Shipping"
10888	"United Package"
10889	"Federal Shipping"
10890	"Speedy Express"
10891	"United Package"
10892	"United Package"
10893	"United Package"
10894	"Speedy Express"
10895	"Speedy Express"
10896	"Federal Shipping"
10897	"United Package"
10898	"United Package"
10899	"Federal Shipping"
10900	"United Package"
10901	"Speedy Express"
10902	"Speedy Express"
10903	"Federal Shipping"
10904	"Federal Shipping"
10905	"United Package"
10906	"Federal Shipping"
10907	"Federal Shipping"
10908	"United Package"
10909	"United Package"
10910	"Federal Shipping"
10911	"Speedy Express"
10912	"United Package"
10913	"Speedy Express"
10914	"Speedy Express"
10915	"United Package"
10916	"United Package"
10917	"United Package"
10918	"Federal Shipping"
10919	"United Package"
10920	"United Package"
10921	"Speedy Express"
10922	"Federal Shipping"
10923	"Federal Shipping"
10924	"United Package"
10925	"Speedy Express"
10926	"Federal Shipping"
10927	"Speedy Express"
10928	"Speedy Express"
10929	"Speedy Express"
10930	"Federal Shipping"
10931	"United Package"
10932	"Speedy Express"
10933	"Federal Shipping"
10934	"Federal Shipping"
10935	"Federal Shipping"
10936	"United Package"
10937	"Federal Shipping"
10938	"United Package"
10939	"United Package"
10940	"Federal Shipping"
10941	"United Package"
10942	"Federal Shipping"
10943	"United Package"
10944	"Federal Shipping"
10945	"Speedy Express"
10946	"United Package"
10947	"United Package"
10948	"Federal Shipping"
10949	"Federal Shipping"
10950	"United Package"
10951	"United Package"
10952	"Speedy Express"
10953	"United Package"
10954	"Speedy Express"
10955	"United Package"
10956	"United Package"
10957	"Federal Shipping"
10958	"United Package"
10959	"United Package"
10960	"Speedy Express"
10961	"Speedy Express"
10962	"United Package"
10963	"Federal Shipping"
10964	"United Package"
10965	"Federal Shipping"
10966	"Speedy Express"
10967	"United Package"
10968	"Federal Shipping"
10969	"United Package"
10970	"Speedy Express"
10971	"United Package"
10972	"United Package"
10973	"United Package"
10974	"Federal Shipping"
10975	"Federal Shipping"
10976	"Speedy Express"
10977	"Federal Shipping"
10978	"United Package"
10979	"United Package"
10980	"Speedy Express"
10981	"United Package"
10982	"Speedy Express"
10983	"United Package"
10984	"Federal Shipping"
10985	"Speedy Express"
10986	"United Package"
10987	"Speedy Express"
10988	"United Package"
10989	"Speedy Express"
10990	"Federal Shipping"
10991	"Speedy Express"
10992	"Federal Shipping"
10993	"Federal Shipping"
10994	"Federal Shipping"
10995	"Federal Shipping"
10996	"United Package"
10997	"United Package"
10998	"United Package"
10999	"United Package"
11000	"Federal Shipping"
11001	"United Package"
11002	"Speedy Express"
11003	"Federal Shipping"
11004	"Speedy Express"
11005	"Speedy Express"
11006	"United Package"
11007	"United Package"
11008	"Federal Shipping"
11009	"Speedy Express"
11010	"United Package"
11011	"Speedy Express"
11012	"Federal Shipping"
11013	"Speedy Express"
11014	"Federal Shipping"
11015	"United Package"
11016	"United Package"
11017	"United Package"
11018	"United Package"
11019	"Federal Shipping"
11020	"United Package"
11021	"Speedy Express"
11022	"United Package"
11023	"United Package"
11024	"Speedy Express"
11025	"Federal Shipping"
11026	"Speedy Express"
11027	"Speedy Express"
11028	"Speedy Express"
11029	"Speedy Express"
11030	"United Package"
11031	"United Package"
11032	"Federal Shipping"
11033	"Federal Shipping"
11034	"Speedy Express"
11035	"United Package"
11036	"Federal Shipping"
11037	"Speedy Express"
11038	"United Package"
11039	"United Package"
11040	"Federal Shipping"
11041	"United Package"
11042	"Speedy Express"
11043	"United Package"
11044	"Speedy Express"
11045	"United Package"
11046	"United Package"
11047	"Federal Shipping"
11048	"Federal Shipping"
11049	"Speedy Express"
11050	"United Package"
11051	"Federal Shipping"
11052	"Speedy Express"
11053	"United Package"
11054	"Speedy Express"
11055	"United Package"
11056	"United Package"
11057	"Federal Shipping"
11058	"Federal Shipping"
11059	"United Package"
11060	"United Package"
11061	"Federal Shipping"
11062	"United Package"
11063	"United Package"
11064	"Speedy Express"
11065	"Speedy Express"
11066	"United Package"
11067	"United Package"
11068	"United Package"
11069	"United Package"
11070	"Speedy Express"
11071	"Speedy Express"
11072	"United Package"
11073	"United Package"
11074	"United Package"
11075	"United Package"
11076	"United Package"
11077	"United Package"

9. -- Mostrar el número de pedidos (orders) realizados por cada expedidor (shipper).

SELECT shipper_id, company_name, phone
	FROM public.shippers;
SELECT sh.company_name, COUNT(o.order_id) AS NumberOfOrders 
FROM orders o
JOIN shippers sh ON o.ship_via = sh.shipper_id
GROUP BY sh.company_name;

"company_name"		"numberoforders"
"Federal Shipping"		"255"
"Speedy Express"		"249"
"United Package"		"326"

-- Consultas SQL adicionales en la base de datos Northwind

SELECT product_id, product_name, supplier_id, category_id, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued
	FROM public.products;

1.-- 	Mostrar los productos que tienen un precio unitario superior al precio medio de todos los procudctos
SELECT product_name
FROM products
WHERE unit_price > (SELECT AVG(unit_price) FROM products);

"product_name"
"Uncle Bob's Organic Dried Pears"
"Northwoods Cranberry Sauce"
"Mishi Kobe Niku"
"Ikura"
"Queso Manchego La Pastora"
"Alice Mutton"
"Carnarvon Tigers"
"Sir Rodney's Marmalade"
"Gumbär Gummibärchen"
"Schoggi Schokolade"
"Rössle Sauerkraut"
"Thüringer Rostbratwurst"
"Mascarpone Fabioli"
"Côte de Blaye"
"Ipoh Coffee"
"Manjimup Dried Apples"
"Perth Pasties"
"Gnocchi di nonna Alice"
"Raclette Courdavault"
"Camembert Pierrot"
"Tarte au sucre"
"Vegie-spread"
"Wimmers gute Semmelknödel"
"Gudbrandsdalsost"
"Mozzarella di Giovanni"

2.-- Listar los clientes que han realizado pedidos con un valor total superior a un valor determinado
SELECT c.contact_name, SUM(od.Unit_price * od.quantity * (1 - od.discount)) AS TotalOrderValue
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN "order_details" od ON o.order_id = od.order_id
GROUP BY c.contact_name
HAVING SUM(od.unit_price * od.quantity * (1 - od.discount)) > 1000; -- Reemplaza 1000 con el valor deseado

"contact_name"				"totalordervalue"
"André Fonseca"				8414.134980559349
"Pedro Afonso"				3810.749990463257
"Philip Cramer"				30908.383872538416
"Frédérique Citeaux"		18534.080079345105
"Paolo Accorti"				1545.6999979019165
"Jytte Petersen"			16817.097612204925
"Patricio Simpson"			1814.7999839782715
"Paula Wilson"				51097.80082826822
"Helen Bennett"				6146.299984931946
"Sergio Gutiérrez"			2844.099998474121
"Mary Saveley"				9182.42987764746
"Paula Parente"				6068.199970615655
"Anabela Domingues"			6850.664033139407
"Liz Nixon"					3361.0000038146973
"Art Braunschweiger"		11441.630072270782
"Patricia McKenna"			49979.90508149549
"Antonio Moreno"			7023.977433340102
"Thomas Hardy"				13390.649973928183
"Alejandra Camino"			1467.2900185585022
"Christina Berglund"		24927.577430965972
"Janete Limeira"			12450.800013110042
"Henriette Pfalzheim"		12496.1999632217
"Carlos González"	 		16076.599920950532
"Zbyszek Piestrzeniewicz"	3531.949995994568
"Ann Devon"					14761.034930229187
"Mario Pontes"				32841.369948457475
"Hari Kumar"				16215.325044126435
"Yoshi Latimer"				3063.2000246047974
"Annette Roulet"			9328.200014907121
"Dominique Perrier"			2423.3500022888184
"Rene Phillips"				15177.462503358722
"Elizabeth Brown"			1719.099988937378
"Martine Rancé"				11666.900089263916
"Janine Labrune"			1615.8999881744385
"Rita Müller"				9588.424962970987
"Matti Karttunen"			3161.349983215332
"Yang Wang"					12348.880053406656
"Hanna Moos"				3239.799991607666
"Lúcia Carvalho"			25717.497604973578
"Aria Cruz"					4107.5499232776465
"Elizabeth Lincoln"			20801.59995229095
"Liu Wong"					1947.2399940490723
"Karl Jablonski"			27363.604900210797
"Carine Schmitt"			3172.1600036621094
"Lino Rodriguez"			6427.422501099259
"Maria Anders"				4273.000009529293
"José Pedro Freyre"			11446.359954776763
"Jaime Yorres"				3076.4724822382627
"Felipe Izquierdo"			16476.56491531938
"Bernardo Batista"			6664.809939688891
"Howard Snyder"				18507.44997092657
"Ana Trujillo"				1402.949990272522
"Roland Mendel"				104874.97814367746
"Pascale Cartrain"			24088.780281318428
"Yvonne Moncada"			3460.200008392334
"Horst Kloss"				110277.30503039382
"Martín Sommer"				4232.850018620491
"Georg Pipps"				23128.86001497373
"Isabel de Castro"			5044.940011057854
"Helvetius Nagy"			1571.1999893188477
"Daniel Tonini"				1992.0500106811523
"Jean Fresnière"			28872.19015611842
"Palle Ibsen"				15843.924896007406
"Sven Ottlieb"				3763.209972381592
"Manuel Pereira"			1488.6999969482422
"Renate Messner"			19261.409954871837
"Maurizio Moroni"			7048.239968932271
"Jose Pavarotti"			104361.94954039395
"Miguel Angel Paolino"		10812.150033950806
"Victoria Ashworth"			6089.899990081787
"Catherine Dewey"			9736.075006915928
"Carlos Hernández"			22768.76392572349
"Giovanni Rovelli"			7176.214951009528
"Laurence Lebihan"			21963.252461684533
"Fran Wilson"				4258.599994659424
"Pirkko Koskitalo"			15648.702585553974
"Guillermo Fernández"		4242.200015068054
"Karin Josephs"				4778.140057610572
"Jonas Bergulfsen"			5735.1500153541565
"Maria Larsson"				29567.562490026656
"Michael Holz"				19343.778920320852
"Alexander Feuer"			5042.200035095215
"Paul Henriot"				1480.0000019073486
"Peter Franken"				26656.559403990017

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

"first_name"		"last_name"		"numberoforders"
"Andrew"			"Fuller"					96
"Robert"			"King"						72
"Janet"				"Leverling"				   127
"Nancy"				"Davolio"				   123
"Laura"				"Callahan"				   104
"Michael"			"Suyama"				    67
"Margaret"			"Peacock"				   156

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

"category_name"		"totalsales"
"Beverages"			267868.17978624784
"Produce"			99984.58007357619
"Condiments"		106047.08460955074
"Grains/Cereals"	95744.58735543818
"Meat/Poultry"		163022.3602687388
"Confections"		167357.22547338586
"Dairy Products"	234507.2845305777
"Seafood"			131261.7365558489

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

"contact_name"
"Maria Anders"
"Ana Trujillo"
"Antonio Moreno"
"Thomas Hardy"
"Christina Berglund"
"Hanna Moos"
"Frédérique Citeaux"
"Martín Sommer"
"Laurence Lebihan"
"Elizabeth Lincoln"
"Victoria Ashworth"
"Patricio Simpson"
"Francisco Chang"
"Yang Wang"
"Pedro Afonso"
"Elizabeth Brown"
"Sven Ottlieb"
"Janine Labrune"
"Ann Devon"
"Roland Mendel"
"Aria Cruz"
"Diego Roel"
"Martine Rancé"
"Maria Larsson"
"Peter Franken"
"Carine Schmitt"
"Paolo Accorti"
"Lino Rodriguez"
"Eduardo Saavedra"
"José Pedro Freyre"
"André Fonseca"
"Howard Snyder"
"Manuel Pereira"
"Mario Pontes"
"Carlos Hernández"
"Yoshi Latimer"
"Patricia McKenna"
"Helen Bennett"
"Philip Cramer"
"Daniel Tonini"
"Annette Roulet"
"Yoshi Tannamuri"
"John Steel"
"Renate Messner"
"Jaime Yorres"
"Carlos González"
"Felipe Izquierdo"
"Fran Wilson"
"Giovanni Rovelli"
"Catherine Dewey"
"Jean Fresnière"
"Alexander Feuer"
"Simon Crowther"
"Yvonne Moncada"
"Rene Phillips"
"Henriette Pfalzheim"
"Marie Bertrand"
"Guillermo Fernández"
"Georg Pipps"
"Isabel de Castro"
"Bernardo Batista"
"Lúcia Carvalho"
"Horst Kloss"
"Sergio Gutiérrez"
"Paula Wilson"
"Maurizio Moroni"
"Janete Limeira"
"Michael Holz"
"Alejandra Camino"
"Jonas Bergulfsen"
"Jose Pavarotti"
"Hari Kumar"
"Jytte Petersen"
"Dominique Perrier"
"Art Braunschweiger"
"Pascale Cartrain"
"Liz Nixon"
"Liu Wong"
"Karin Josephs"
"Miguel Angel Paolino"
"Anabela Domingues"
"Helvetius Nagy"
"Palle Ibsen"
"Mary Saveley"
"Paul Henriot"
"Rita Müller"
"Pirkko Koskitalo"
"Paula Parente"
"Karl Jablonski"
"Matti Karttunen"
"Zbyszek Piestrzeniewicz"
"Bilbo Baggins"

