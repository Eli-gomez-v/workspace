
# Profundizando en el Filtrado Avanzado

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
Este flujo está diseñado para:
* Procesar múltiples archivos Excel.
* Filtrar datos de cada archivo según tus criterios.
* Consolidar los resultados en una única tabla de datos.
Variables Necesarias
Primero, define estas variables de entrada:
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
   1. Iterar a través de los archivos:
   * Acción: "Para cada"
   * Valor para iterar: ListaArchivos
   * Almacenar en la variable: ArchivoActual
   1. Procesar cada archivo Excel:
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
   1. Iterar a través de las filas de datos del archivo actual:
   * Acción: "Para cada"
   * Valor para iterar: ExcelData
   * Almacenar en la variable: FilaActual
   1. Filtrar y agregar a la tabla de resultados:
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
   1. Fin de los bucles:
   * Acción: "Fin" (del bucle "Para cada" de las filas)
   * Acción: "Fin" (del bucle "Para cada" de los archivos)