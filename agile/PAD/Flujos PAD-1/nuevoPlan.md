#Implementación de Flujos en Power Automate Desktop

Flujo 1: MD_WORD_rellenar_plantilla_word 1/2
Este flujo se encarga de abrir un documento Word, realizar múltiples sustituciones de texto y aplicar lógica condicional según diversos valores.

# Flujo principal: MD_WORD_rellenar_plantilla_word

# Variables iniciales

$ruta_trabajo = "" # Ruta base de trabajo donde se encuentran las plantillas
$txMes_actual = "" # Variable para el mes actual
$numAño_actual = 0 # Variable para el año actual (número)
$numAño_anterior = 0 # Variable para el año anterior (número)
$fecha_actual = "" # Fecha actual completa
$Num_fila = 0 # Contador de filas
$numvariable = [] # Array para almacenar valores variables
$numresultado = 0 # Variable para resultados

Paso a paso:

# Acceder a la ruta de trabajo con plantillas (Subflujo)

Establecer variable $ruta_plantillas = "%ruta_trabajo%\Plantillas"

# Abrir documento Word OE_cas

Iniciar Word
Abrir documento '%ruta_plantillas%\OE_cas.docx'
Almacenar instancia Word en variable $word_instance
Acceder a la ruta de plantillas y abrir documento

Sustituir mes actual en el documento

# Sustituir [MES ACTUAL] por el valor de txMes_actual

Reemplazar texto en documento de Word
   Instancia: $word_instance
   Texto a buscar: '[MES ACTUAL]'
   Reemplazar con: '%txMes_actual%'
   Reemplazar todas las apariciones: Verdadero

Lógica condicional para el mes

# Comprobar si el mes actual es noviembre o diciembre

Si $txMes_actual = 'noviembre' O $txMes_actual = 'diciembre' Entonces

# Sustituir [AÑO ACTUAL] por numAño_actual=numAño_actual-1; numAño_anterior=numAño_anterior-1

   Reemplazar texto en documento de Word
      Instancia: $word_instance
      Texto a buscar: '[AÑO ACTUAL]'
      Reemplazar con: '%numAño_actual-1%'

# Actualizar variables

   Establecer variable $numAño_anterior = $numAño_anterior - 1
Sino

# Realizar las siguientes acciones si no es noviembre o diciembre

Sustituir fecha actual en el documento

# Sustituir [FECHA HOY] por fecha actual

Reemplazar texto en documento de Word
   Instancia: $word_instance
   Texto a buscar: '[FECHA HOY]'
   Reemplazar con: '%fecha_actual%'

Sustituir año actual

# Sustituir [AÑO ACTUAL] por numAño_actual

Reemplazar texto en documento de Word
   Instancia: $word_instance
   Texto a buscar: '[AÑO ACTUAL]'
   Reemplazar con: '%numAño_actual%'

Establecer valor Num_fila

# Establecer Num_fila = 2

Establecer variable $Num_fila = 2

Abrir archivo Excel y realizar acciones

# Abrir OE_Filtros_robot.xls

Iniciar Excel
Abrir archivo Excel '%ruta_trabajo%\OE_Filtros_robot.xlsx'
Almacenar instancia Excel en variable $excel_filtros

Lógica condicional sobre Num_fila

# Comprobar si B[Num_fila] está vacío

Obtener valor de celda
   Instancia Excel: $excel_filtros
   Celda: B%Num_fila%
   Almacenar resultado en variable: $valorCelda

Si $valorCelda = "" Entonces

# No hay más datos en esta fila

Sino

# Continuar procesando la fila

Lógica para numvariable[3] y numvariable[4]

# Comprobar si numvariable[3] > 0

Si $numvariable[3] > 0 Entonces

# Sustituir [MAS_MENOS1] por "más"

   Reemplazar texto en documento de Word
      Instancia: $word_instance
      Texto a buscar: '[MAS_MENOS1]'
      Reemplazar con: 'más'
Sino

# Sustituir [MAS_MENOS1] por "menos"

   Reemplazar texto en documento de Word
      Instancia: $word_instance
      Texto a buscar: '[MAS_MENOS1]'
      Reemplazar con: 'menos'
Fin Si

# Comprobar si numvariable[4] > 0

Si $numvariable[4] > 0 Entonces

# Sustituir [AUM_DISM1] por "aumenta"

   Reemplazar texto en documento de Word
      Instancia: $word_instance
      Texto a buscar: '[AUM_DISM1]'
      Reemplazar con: 'aumenta'
Sino

# Sustituir [AUM_DISM1] por "disminuye"

   Reemplazar texto en documento de Word
      Instancia: $word_instance
      Texto a buscar: '[AUM_DISM1]'
      Reemplazar con: 'disminuye'
Fin Si

Sustituir VAR calculada

# Sustituir [VAR32-VAR-5] por numresultado=numVariable[32]-numVariable[5]

Establecer variable $numresultado = $numvariable[32] - $numvariable[5]

Reemplazar texto en documento de Word
   Instancia: $word_instance
   Texto a buscar: '[VAR32-VAR-5]'
   Reemplazar con: '%numresultado%'

Comprobar numresultado

# Comprobar si numresultado > 0

Si $numresultado > 0 Entonces

# Sustituir [MAS_MENOS2] por "más"

   Reemplazar texto en documento de Word
      Instancia: $word_instance
      Texto a buscar: '[MAS_MENOS2]'
      Reemplazar con: 'más'
Sino

# Sustituir [MAS_MENOS2] por "menos"

   Reemplazar texto en documento de Word
      Instancia: $word_instance
      Texto a buscar: '[MAS_MENOS2]'
      Reemplazar con: 'menos'
Fin Si

# Continúa en página 2

Flujo 2: SUBFLUJO OBTENER VARIABLES DE NOTA ESTADISTICA
Este subflujo se encarga de leer datos desde archivos Excel y procesar información estadística.

# Variables iniciales del subflujo

$ruta_trabajo = "" # Ruta base de trabajo
$año = 0 # Año a procesar
$fila_actual = 0 # Contador de fila actual
$txfiltro1 = "" # Filtro 1
$txfiltro2 = "" # Filtro 2
$txfiltro3 = "" # Filtro 3

Paso a paso:
Acceder a las rutas de trabajo e inicializar

# Acceder a la ruta de trabajo con plantillas

Establecer variable $ruta_plantillas = "%ruta_trabajo%\Plantillas"

Abrir archivo de filtros

# Abrir excel Filtros_robot.xls

Iniciar Excel
Abrir archivo Excel '%ruta_plantillas%\Filtros_robot.xlsx'
Almacenar instancia Excel en variable $excel_filtros

Abrir archivo de datos del mes según año

# Abrir excel OE_MES_xxAÑO.xls

Iniciar Excel
Abrir archivo Excel '%ruta_plantillas%\OE_MES_%año%.xlsx'
Almacenar instancia Excel en variable $excel_mes

Acceder a la hoja OE

# Acceder a la hoja OE de Filtros_robot.xlsx

Establecer hoja de cálculo activa
   Instancia Excel: $excel_filtros
   Nombre de hoja: 'OE'

Leer todos los datos de la hoja

# Leer datos de la hoja OE

Leer rango de hoja de cálculo
   Instancia Excel: $excel_filtros
   Rango: UsedRange
   Leer como tabla: Verdadero
   Almacenar en variable: $tabla_filtros

Recorrer la tabla leída

# Recorrer cada fila de la tabla

Para cada $fila en $tabla_filtros

# Comprobar si el año de la fila coincide con el año buscado

   Si $fila['A'] = $año Entonces
      # Procesar la fila

Obtener valores de filtros

# Obtener valores de filtros para búsqueda

Establecer variable $txfiltro1 = $fila['Tipo_sociedad_cas']
Establecer variable $txfiltro2 = $fila['variable_cas']
Establecer variable $txfiltro3 = $fila['medida_cas']

Acceder a archivo de datos mensuales

# Acceder al archivo OE_Mes.xlsx

Establecer hoja de cálculo activa
   Instancia Excel: $excel_mes
   Nombre de hoja: 'Datos'

Aplicar filtros a las columnas

# Aplicar filtro1 en columna C

Filtrar datos en Excel
   Instancia Excel: $excel_mes
   Columna: 'C'
   Filtrar por: $txfiltro1

# Aplicar filtro2 en columna D

Filtrar datos en Excel
   Instancia Excel: $excel_mes
   Columna: 'D'
   Filtrar por: $txfiltro2

# Aplicar filtro3 en columna E

Filtrar datos en Excel
   Instancia Excel: $excel_mes
   Columna: 'E'
   Filtrar por: $txfiltro3

Guardar resultado en documento Word

# Obtener el valor resultante después de aplicar los filtros

Obtener valor de celda visible
   Instancia Excel: $excel_mes
   Columna: 'F'
   Fila: 1
   Almacenar en variable: $valor_medida

# Guardar en documento Word

Establecer variable $InformeEjecucion_fechaactual = "OE_MES_%año%[%valor_medida%]"

Guardar resultados finales

# Guardar Excel InformeEjecucion_fechaactual

Guardar libro de Excel como
   Instancia Excel: $excel_mes
   Ruta: '%ruta_trabajo%\InformeEjecucion_fechaactual.xlsx'

Cerrar todos los archivos Excel

# Cerrar archivos Excel

Cerrar Excel
   Instancia: $excel_filtros
   Guardar cambios: Falso

Cerrar Excel
   Instancia: $excel_mes
   Guardar cambios: Falso
