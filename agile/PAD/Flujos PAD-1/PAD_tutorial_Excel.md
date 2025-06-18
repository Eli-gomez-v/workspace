¡Entendido! Vamos a consolidar tu flujo de Power Automate Desktop para procesar múltiples archivos Excel, fusionar los resultados y aplicar filtrados avanzados. Aquí tienes una versión mejorada del flujo, junto con explicaciones detalladas:

Automatización Avanzada de Excel en Power Automate Desktop

Abrir
Reintentar sin Canvas
Profundizando en el Filtrado Avanzado
La clave para un filtrado avanzado está en la acción "Si". Aquí puedes combinar múltiples condiciones usando operadores lógicos:
* = (Es igual a)
* <> (No es igual a)
* < (Es menor que)
* > (Es mayor que)
* <= (Es menor o igual que)
* >= (Es mayor o igual que)
* Contiene
* No contiene
* Empieza con
* Termina con
Ejemplo de Filtrado Múltiple
Supongamos que quieres filtrar filas que cumplan TODAS estas condiciones:
* Año (columna 0) es igual a txAÑO
* Filtro1 (columna 2) contiene "ABC"
* Filtro2 (columna 3) es mayor que 10
Tu acción "Si" se vería así:
* Primera operando: %FilaActual[0]%
* Operador: =
* Segundo operando: txAÑO
* Y
* Primera operando: %FilaActual[2]%
* Operador: Contiene
* Segundo operando: "ABC"
* Y
* Primera operando: %FilaActual[3]%
* Operador: >
* Segundo operando: 10
Consideraciones Importantes
* Nombres de Hoja Consistentes: Este flujo asume que la hoja de Excel donde están los datos tiene el mismo nombre en todos los archivos. Si no es así, necesitarás una lógica más compleja para determinar el nombre de la hoja correcta para cada archivo (por ejemplo, leyendo los nombres de las hojas y eligiendo la que necesitas).
* Estructura de Datos Consistente: El flujo asume que las columnas que estás utilizando (0, 2, 3, 4 y 6) tienen el mismo significado en todos los archivos Excel. Si la estructura de las columnas varía, tendrás que adaptar las acciones "Establecer variable" y la acción "Insertar fila en tabla de datos" para que funcionen correctamente con cada archivo.
* Manejo de Errores: Para hacer tu flujo más robusto, considera agregar acciones de "Manejo de errores". Esto te permitirá capturar errores como archivos no encontrados o formatos de datos incorrectos, y tomar medidas apropiadas (como registrar el error o notificar a un usuario).
* Optimización del Rendimiento: Si estás procesando una gran cantidad de archivos o archivos muy grandes, el flujo puede tardar un tiempo en ejecutarse. Puedes mejorar el rendimiento considerando técnicas como:
   * Deshabilitar la visualización de la interfaz de Excel (si no necesitas verla).
   * Procesar archivos en paralelo (si es posible y seguro en tu entorno).
Este flujo consolidado debería proporcionarte una base sólida para automatizar tu proceso de Excel. ¡No dudes en preguntar si tienes alguna otra pregunta o necesitas modificarlo aún más!
Flujo de Power Automate Desktop Consolidado

## Este flujo está diseñado para:

* Procesar múltiples archivos Excel.
* Filtrar datos de cada archivo según tus criterios.
* Consolidar los resultados en una única tabla de datos.
Variables Necesarias

- Primero, define estas variables de entrada:
  
* ListaArchivos: Tipo: Lista de texto. Contendrá las rutas completas de los archivos Excel a procesar (uno por línea). Ejemplo:
C:\Carpeta1\archivo1.xlsx
C:\Carpeta2\archivo2.xlsx
C:\Carpeta3\archivo3.xlsx
* txAÑO: Tipo: Texto. El año que se utilizará como filtro.
* NombreHoja: Tipo: Texto. El nombre de la hoja de Excel donde se encuentran los datos en todos los archivos.
Acciones del Flujo
   1. Inicializar la tabla de resultados:
      * Acción: "Crear una nueva tabla de datos"
      * Número de columnas: 2
      * Número de filas: 0
      * Nombre de la variable: datos_final
  
   2. Iterar a través de los archivos:
      * Acción: "Para cada"
      * Valor para iterar: ListaArchivos
      * Almacenar en la variable: ArchivoActual
  
   3. Procesar cada archivo Excel:
      * Acción: "Iniciar Excel"
      * Abrir el siguiente documento: %ArchivoActual%
      * Nombre de la variable: InstanciaExcel
      * Acción: "Establecer la hoja de cálculo activa"
      * Instancia de Excel: InstanciaExcel
      * Seleccionar por: Nombre
      * Nombre de la hoja de cálculo: %NombreHoja%
      * Acción: "Leer desde la hoja de cálculo de Excel"
      * Instancia de Excel: InstanciaExcel
      * Leer: Todos los valores disponibles
      * Primera fila contiene nombres de columna: (Depende de tus archivos)
      * Nombre de la variable: ExcelData
      * Acción: "Cerrar Excel"
      * Instancia de Excel: InstanciaExcel
  
   4. Iterar a través de las filas de datos del archivo actual:
      * Acción: "Para cada"
      * Valor para iterar: ExcelData
      * Almacenar en la variable: FilaActual
  
   5. Filtrar y agregar a la tabla de resultados:
      * Acción: "Establecer variable"
      * Nombre de la variable: txFiltro1
      * Valor: %FilaActual[2]%
      * Acción: "Establecer variable"
      * Nombre de la variable: txFiltro2
      * Valor: %FilaActual[3]%
      * Acción: "Establecer variable"
      * Nombre de la variable: txFiltro3
      * Valor: %FilaActual[4]%
      * Acción: "Si"
      * Primera operando: %FilaActual[0]%
      * Operador: =
      * Segundo operando: txAÑO
      * Bloque "Si":
        * Acción: "Insertar fila en tabla de datos"
        * Tabla de datos de entrada: datos_final
        * Fila a insertar: [%FilaActual[6]%, 0]
      * Acción: "Fin"
   6. Fin de los bucles:
      * Acción: "Fin" (del bucle "Para cada" de las filas)
      * Acción: "Fin" (del bucle "Para cada" de los archivos)
  
### Filtrar una Tabla de Datos en Power Automate Desktop

Para filtrar una tabla de datos en Power Automate Desktop, puedes usar la acción "Filtrar filas en una tabla de datos". Aquí tienes un ejemplo paso a paso:

1. **Acción: "Filtrar filas en una tabla de datos"**
   - **Tabla de datos de entrada:** `datos_final`
   - **Condiciones de filtrado:**
     - Columna: `0` (Año)
     - Operador: `Es igual a`
     - Valor: `%txAÑO%`
   - **Nombre de la tabla de datos de salida:** `datos_filtrados`

2. **Acción: "Para cada" (opcional, para procesar los datos filtrados)**
   - **Valor para iterar:** `datos_filtrados`
   - **Almacenar en la variable:** `FilaFiltrada`

3. **Procesar las filas filtradas según sea necesario.**

Este enfoque te permite trabajar únicamente con las filas que cumplen tus criterios de filtrado, optimizando el flujo y simplificando el manejo de datos.

1.	Creo las variables de entrada (las llamáis como queráis):
a.	Ruta al Excel Filtros robot.xlsx
b.	Ruta al Excel 010601_Mes.xlsx
c.	Ruta al Excel 010601_MesAñoAnterior.xlsx
d.	Nombre de la pestaña OE a activar en el Excel Filtros robot.xlsx
e.	Ruta al Excel InformeEjecución_OE_fechaactual.xlsx
f.	txtAño que almacena si es “año_anterior” o “año_actual”

2.	Abro Excel de Filtros robot.xlsx, leo todo el contenido y lo cierro  el contenido leído se habrá guardado en una variable de tipo datatable. (contenido_filtros_robot)
3.	Si txtAño == año_actual:
a.	Abro Excel 010601_Mes.xlsx, leo todo el contenido y lo cierro  el contenido leído se habrá guardado en una variable de tipo datatable. (contenido_mes)
4.	Else if  txtAño == año_anterior:
a.	Abro Excel 010601_MesAñoAnterior.xlsx, leo todo el contenido y lo cierro  el contenido leído se habrá guardado en una variable de tipo datatable.
5.	Creamos una tabla de datos donde vamos a guardar los pares codigo, valor. (tabla_final)
6.	Recorro contenido_filtros_robot y busco las 3 columnas de los filtros (imaginemos que son la 3, 4 y 5):
For each fila_filtros_robot in contenido_filtros_robot:
Guardo en txtFiltro1 el contenido de la columna 3  txtFiltro1 = fila_filtros_robot[3] (o fila_filtros_robot[‘Column4’], lo que funcione)
Guardo en txtFiltro2 el contenido de la columna 4  txtFiltro2 = fila_filtros_robot[4] (o fila_filtros_robot[‘Column5’], lo que funcione)
Guardo en txtFiltro3 el contenido de la columna 5  txtFiltro3 = fila_filtros_robot[5] (o fila_filtros_robot[‘Column6’], lo que funcione)

Suponiendo que la clave que quiero obtener de Filtros robot.xlsx está en la columna 7  codigo = fila_filtros_robot[7] (o fila_filtros_robot[‘Column8’], lo que funcione)

Con el contenido de los filtros, filtramos el contenido de contenido_mes:
[![imagen filtros tabla](image.png)]


Esto devolverá una tabla, normalmente con una sola fila, que será la fila que tiene esos tres campos. (tabla_matches)
Suponiendo que el valor que buscamos está en la columna 6  valor = tabla_matches[0][6] (o tabla_matches[‘Column7’], lo que funcione)

Añadimos una fila a la tabla_final con los valores obtenidos  %[código, valor]%

7.	Cuando finaliza el bucle añadimos el contenido de la tabla_final al Excel InformeEjecución_OE_fechaactual.xlsx.

La idea es que esto funcione como módulo, entonces se le llamará 2 veces, una con la variable txtAño = año_actual y otra con txtAño = año_anterior.

Claro, aquí tienes las acciones de Power Automate Desktop (PAD) que debes usar para pedir al usuario la ruta de la carpeta y el nombre del archivo antes de guardar el Excel:

1. **Mostrar cuadro de diálogo para seleccionar carpeta**  
   - Acción: `Mostrar cuadro de diálogo para seleccionar carpeta`
   - Almacenar en variable: `RutaCarpeta`

2. **Mostrar cuadro de entrada para pedir nombre de archivo**  
   - Acción: `Mostrar cuadro de entrada`
   - Mensaje: "Introduce el nombre con el que quieres guardar el archivo (sin extensión):"
   - Almacenar en variable: `NombreArchivo`

3. **Construir la ruta completa del archivo**  
   - Acción: `Establecer variable`
   - Nombre: `RutaCompleta`
   - Valor: `%RutaCarpeta%\%NombreArchivo%.xlsx`

4. **Guardar el archivo Excel en la ruta especificada**  
   - Acción: `Guardar documento de Excel como`
   - Instancia de Excel: (tu variable de instancia, por ejemplo, `InstanciaExcel`)
   - Ruta del archivo: `%RutaCompleta%`

Estas acciones permiten que el usuario elija la carpeta y el nombre del archivo antes de guardar el Excel. ¿Te gustaría ver un ejemplo de cómo integrarlo en tu flujo?
