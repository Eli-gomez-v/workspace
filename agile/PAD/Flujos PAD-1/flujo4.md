# Flujo 4: Generación de Informes NASTAT

## Descripción
Este flujo automatiza la generación de informes a partir de los datos procesados en NASTAT. Incluye la extracción de datos de la base de datos, generación de gráficos y distribución de informes.

## Implementación en Power Automate Desktop

```
# Inicialización de variables
Acción: Inicializar variable
    Nombre: servidorSQL
    Tipo: Texto
    Valor: "SQL-SERVER-NASTAT"

Acción: Inicializar variable
    Nombre: baseDatos
    Tipo: Texto
    Valor: "NASTAT_DB"

Acción: Inicializar variable
    Nombre: usuarioSQL
    Tipo: Texto
    Valor: "reporting_user"

Acción: Inicializar variable
    Nombre: passwordSQL
    Tipo: Texto
    Valor: "ReportPass123!" # En producción utilizar variables de entorno seguras

Acción: Inicializar variable
    Nombre: carpetaInformes
    Tipo: Texto
    Valor: "C:\Informes\NASTAT"

Acción: Inicializar variable
    Nombre: plantillaExcel
    Tipo: Texto
    Valor: "C:\Plantillas\NASTAT\PlantillaInforme.xlsx"

Acción: Inicializar variable
    Nombre: fechaInforme
    Tipo: Texto
    Valor: %DateTime.Now.ToString("yyyyMMdd")%

Acción: Inicializar variable
    Nombre: mesActual
    Tipo: Texto
    Valor: %DateTime.Now.ToString("MMMM yyyy")%

Acción: Inicializar variable
    Nombre: tiposInforme
    Tipo: Lista
    Valor: ["Diario", "Semanal", "Mensual"]

# Verificar existencia de carpetas
Acción: Si carpeta existe
    Carpeta: "%carpetaInformes%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaInformes%"

# Verificar existencia de plantilla
Acción: Si archivo existe
    Archivo: "%plantillaExcel%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Mostrar mensaje
            Mensaje: "Error: No se encuentra la plantilla de informes"
        Acción: Terminar flujo

# Establecer conexión a la base de datos
Acción: Conectar a base de datos SQL
    Cadena de conexión: "Server=%servidorSQL%;Database=%baseDatos%;User Id=%usuarioSQL%;Password=%passwordSQL%;"
    Asignar conexión a variable: conexionSQL

Acción: Si
    Condición: %conexionSQL% is not null
    Entonces:
        # Continuar
    Si no:
        Acción: Mostrar mensaje
            Mensaje: "Error al conectar con la base de datos. Verifique las credenciales y que el servidor esté disponible."
        Acción: Terminar flujo

# Determinar qué informes generar según el día
Acción: Inicializar variable
    Nombre: informesAGenerar
    Tipo: Lista
    Valor: ["Diario"]  # Por defecto, siempre generamos el informe diario

Acción: Si
    Condición: %DateTime.Now.DayOfWeek% = "Friday"  # Viernes
    Entonces:
        Acción: Agregar elemento a lista
            Lista: informesAGenerar
            Elemento: "Semanal"

Acción: Si
    Condición: %DateTime.Now.Day% = %DateTime.DaysInMonth(DateTime.Now.Year, DateTime.Now.Month)%  # Último día del mes
    Entonces:
        Acción: Agregar elemento a lista
            Lista: informesAGenerar
            Elemento: "Mensual"

# Generar cada tipo de informe necesario
Acción: Para cada
    Variable: tipoInforme
    Matriz/Lista: informesAGenerar
    Acciones:
        # Crear copia de la plantilla
        Acción: Inicializar variable
            Nombre: nombreInforme
            Tipo: Texto
            Valor: "Informe_%tipoInforme%_%fechaInforme%.xlsx"
        
        Acción: Inicializar variable
            Nombre: rutaInforme
            Tipo: Texto
            Valor: "%carpetaInformes%\%nombreInforme%"
        
        Acción: Copiar archivo
            Origen: "%plantillaExcel%"
            Destino: "%rutaInforme%"
            Sobrescribir si existe: Si
        
        # Consultar datos según el tipo de informe
        Acción: Si
            Condición: %tipoInforme% = "Diario"
            Entonces:
                Acción: Ejecutar consulta SQL
                    Conexión: conexionSQL
                    Consulta: "EXEC sp_GenerarDatosDiarios @Fecha = '%DateTime.Now.ToString("yyyy-MM-dd")%'"
                    Asignar resultado a variable: datosDiarios
            Si no si
                Condición: %tipoInforme% = "Semanal"
                Entonces:
                    Acción: Ejecutar consulta SQL
                        Conexión: conexionSQL
                        Consulta: "EXEC sp_GenerarDatosSemanales @FechaInicio = '%DateTime.Now.AddDays(-6).ToString("yyyy-MM-dd")%', @FechaFin = '%DateTime.Now.ToString("yyyy-MM-dd")%'"
                        Asignar resultado a variable: datosSemanales
            Si no si
                Condición: %tipoInforme% = "Mensual"
                Entonces:
                    Acción: Ejecutar consulta SQL
                        Conexión: conexionSQL
                        Consulta: "EXEC sp_GenerarDatosMensuales @Mes = %DateTime.Now.Month%, @Anio = %DateTime.Now.Year%"
                        Asignar resultado a variable: datosMensuales
        
        # Abrir el archivo Excel
        Acción: Abrir aplicación Excel
            Visible: Si
            Asignar a variable: excelApp
        
        Acción: Abrir libro de Excel
            Aplicación Excel: excelApp
            Archivo: "%rutaInforme%"
            Asignar a variable: libroExcel
        
        # Actualizar datos en el informe según el tipo
        Acción: Si
            Condición: %tipoInforme% = "Diario"
            Entonces:
                # Escribir datos en hoja "Datos"
                Acción: Trabajar con hoja de Excel
                    Libro: libroExcel
                    Hoja de trabajo: "Datos"
                    Asignar a variable: hojaDatos
                
                Acción: Escribir en celda de Excel
                    Hoja de trabajo: hojaDatos
                    Celda: "A1"
                    Valor: "Informe Diario - %DateTime.Now.ToString("dd/MM/yyyy")%"
                
                # Escribir datos desde la variable datosDiarios a partir de la celda A3
                Acción: Escribir datos en rango de Excel
                    Hoja de trabajo: hojaDatos
                    Rango inicial: "A3"
                    Datos: datosDiarios
                
                # Actualizar gráficos (suponiendo que la plantilla ya tiene gráficos configurados)
                Acción: Ejecutar macro de Excel
                    Libro: libroExcel
                    Nombre de la macro: "ActualizarGraficosDiarios"
            
            Si no si
                Condición: %tipoInforme% = "Semanal"
                Entonces:
                    # Escribir datos en hoja "Datos"
                    Acción: Trabajar con hoja de Excel
                        Libro: libroExcel
                        Hoja de trabajo: "Datos"
                        Asignar a variable: hojaDatos
                    
                    Acción: Escribir en celda de Excel
                        Hoja de trabajo: hojaDatos
                        Celda: "A1"
                        Valor: "Informe Semanal - %DateTime.Now.AddDays(-6).ToString("dd/MM/yyyy")% al %DateTime.Now.ToString("dd/MM/yyyy")%"
                    
                    # Escribir datos desde la variable datosSemanales a partir de la celda A3
                    Acción: Escribir datos en rango de Excel
                        Hoja de trabajo: hojaDatos
                        Rango inicial: "A3"
                        Datos: datosSemanales
                    
                    # Actualizar gráficos
                    Acción: Ejecutar macro de Excel
                        Libro: libroExcel
                        Nombre de la macro: "ActualizarGraficosSemanales"
            
            Si no si
                Condición: %tipoInforme% = "Mensual"
                Entonces:
                    # Escribir datos en hoja "Datos"
                    Acción: Trabajar con hoja de Excel
                        Libro: libroExcel
                        Hoja de trabajo: "Datos"
                        Asignar a variable: hojaDatos
                    
                    Acción: Escribir en celda de Excel
                        Hoja de trabajo: hojaDatos
                        Celda: "A1"
                        Valor: "Informe Mensual - %mesActual%"
                    
                    # Escribir datos desde la variable datosMensuales a partir de la celda A3
                    Acción: Escribir datos en rango de Excel
                        Hoja de trabajo: hojaDatos
                        Rango inicial: "A3"
                        Datos: datosMensuales
                    
                    # Actualizar gráficos
                    Acción: Ejecutar macro de Excel
                        Libro: libroExcel
                        Nombre de la macro: "ActualizarGraficosMensuales"
                    
                    # Generar gráficas adicionales para el informe mensual
                    Acción: Ejecutar consulta SQL
                        Conexión: conexionSQL
                        Consulta: "EXEC sp_ObtenerComparativoMensual @Mes = %DateTime.Now.Month%, @Anio = %DateTime.Now.Year%"
                        Asignar resultado a variable: datosComparativo
                    
                    Acción: Trabajar con hoja de Excel
                        Libro: libroExcel
                        Hoja de trabajo: "Comparativo"
                        Asignar a variable: hojaComparativo
                    
                    Acción: Escribir datos en rango de Excel
                        Hoja de trabajo: hojaComparativo
                        Rango inicial: "A3"
                        Datos: datosComparativo
                    
                    Acción: Ejecutar macro de Excel
                        Libro: libroExcel
                        Nombre de la macro: "ActualizarGraficosComparativos"
        
        # Guardar y cerrar el libro
        Acción: Guardar libro de Excel
            Libro: libroExcel
        
        Acción: Cerrar libro de Excel
            Libro: libroExcel
            Guardar cambios: Si
        
        # Generar versión PDF del informe
        Acción: Inicializar variable
            Nombre: nombreInformePDF
            Tipo: Texto
            Valor: "Informe_%tipoInforme%_%fechaInforme%.pdf"
        
        Acción: Inicializar variable
            Nombre: rutaInformePDF
            Tipo: Texto
            Valor: "%carpetaInformes%\%nombreInformePDF%"
        
        Acción: Convertir Excel a PDF
            Archivo Excel: "%rutaInforme%"
            Archivo PDF: "%rutaInformePDF%"
            Sobrescribir si existe: Si

# Cerrar Excel
Acción: Cerrar aplicación Excel
    Aplicación Excel: excelApp

# Cerrar conexión a la base de datos
Acción: Cerrar conexión SQL
    Conexión: conexionSQL

# Distribuir informes generados
Acción: Si
    Condición: %informesAGenerar.Contains("Diario")%
    Entonces:
        Acción: Enviar correo electrónico (SMTP)
            Servidor: "smtp.empresa.com"
            Puerto: 25
            De: "reportes@empresa.com"
            Para: "equipo@empresa.com"
            Asunto: "Informe Diario NASTAT - %DateTime.Now.ToString("dd/MM/yyyy")%"
            Cuerpo: "Adjunto encontrará el informe diario de NASTAT correspondiente al %DateTime.Now.ToString("dd/MM/yyyy")%."
            Adjuntos: "%carpetaInformes%\Informe_Diario_%fechaInforme%.pdf"

Acción: Si
    Condición: %informesAGenerar.Contains("Semanal")%
    Entonces:
        Acción: Enviar correo electrónico (SMTP)
            Servidor: "smtp.empresa.com"
            Puerto: 25
            De: "reportes@empresa.com"
            Para: "gerencia@empresa.com; coordinadores@empresa.com"
            Asunto: "Informe Semanal NASTAT - %DateTime.Now.AddDays(-6).ToString("dd/MM/yyyy")% al %DateTime.Now.ToString("dd/MM/yyyy")%"
            Cuerpo: "Adjunto encontrará el informe semanal de NASTAT correspondiente al periodo del %DateTime.Now.AddDays(-6).ToString("dd/MM/yyyy")% al %DateTime.Now.ToString("dd/MM/yyyy")%."
            Adjuntos: "%carpetaInformes%\Informe_Semanal_%fechaInforme%.pdf"

Acción: Si
    Condición: %informesAGenerar.Contains("Mensual")%
    Entonces:
        Acción: Enviar correo electrónico (SMTP)
            Servidor: "smtp.empresa.com"
            Puerto: 25
            De: "reportes@empresa.com"
            Para: "direccion@empresa.com; gerencia@empresa.com"
            CC: "auditoria@empresa.com"
            Asunto: "Informe Mensual NASTAT - %mesActual%"
            Cuerpo: "Adjunto encontrará el informe mensual de NASTAT correspondiente al mes de %mesActual%."
            Adjuntos: "%carpetaInformes%\Informe_Mensual_%fechaInforme%.pdf"

# Actualizar registro de informes generados
Acción: Leer archivo CSV
    Archivo: "%carpetaInformes%\registro_informes.csv"
    Separador de columnas: ","
    Tiene encabezados: Si
    Asignar a variable: registroInformes
    En caso de error: Continuar

Acción: Si
    Condición: %registroInformes% is null
    Entonces:
        Acción: Crear tabla
            Columnas: ["Fecha", "TipoInforme", "NombreArchivo", "Distribuido"]
            Asignar salida a variable: registroInformes

# Agregar los nuevos informes al registro
Acción: Para cada
    Variable: tipoInforme
    Matriz/Lista: informesAGenerar
    Acciones:
        Acción: Agregar fila a tabla
            Tabla: registroInformes
            Fila: {"Fecha": DateTime.Now.ToString("yyyy-MM-dd"), "TipoInforme": tipoInforme, "NombreArchivo": "Informe_" + tipoInforme + "_" + fechaInforme + ".pdf", "Distribuido": "Si"}

# Guardar el registro actualizado
Acción: Escribir tabla CSV
    Tabla: registroInformes
    Archivo: "%carpetaInformes%\registro_informes.csv"
    Separador de columnas: ","
    Incluir encabezados: Si
    Codificación: UTF-8

# Notificar finalización
Acción: Mostrar mensaje
    Mensaje: "Proceso de generación de informes completado.\nInformes generados: %String.Join(", ", informesAGenerar)%"
```
...existing code...

Acción: Inicializar variable  
    Nombre: informesAGenerar  
    Tipo: Lista  
    Valor: ["Diario"]  # Por defecto, siempre generamos el informe diario

Acción: Si  
    Condición: %DateTime.Now.DayOfWeek% = "Friday"  # Si hoy es viernes  
    Entonces:  
        Acción: Agregar elemento a lista  
            Lista: informesAGenerar  
            Elemento: "Semanal"

Acción: Si  
    Condición: %DateTime.Now.Day% = %DateTime.DaysInMonth(DateTime.Now.Year, DateTime.Now.Month)%  # Si es el último día del mes  
    Entonces:  
        Acción: Agregar elemento a lista  
            Lista: informesAGenerar  
            Elemento: "Mensual"

# Generar cada tipo de informe necesario
Acción: Para cada  
    Variable: tipoInforme  
    Matriz/Lista: informesAGenerar  
    Acciones:  
        Acción: Inicializar variable  
            Nombre: nombreInforme  
            Tipo: Texto  
            Valor: "Informe_%tipoInforme%_%fechaInforme%.xlsx"

        Acción: Inicializar variable  
            Nombre: rutaInforme  
            Tipo: Texto  
            Valor: "%carpetaInformes%\%nombreInforme%"

        Acción: Copiar archivo  
            Origen: "%plantillaExcel%"  
            Destino: "%rutaInforme%"  
            Sobrescribir si existe: Si

        # Consultar datos según el tipo de informe
        Acción: Si  
            Condición: %tipoInforme% = "Diario"  
            Entonces:  
                Acción: Ejecutar consulta SQL  
                    Conexión: conexionSQL  
                    Consulta: "EXEC sp_GenerarDatosDiarios @Fecha = '%DateTime.Now.ToString("yyyy-MM-dd")%'"  
                    Asignar resultado a variable: datosDiarios  
            Si no si  
                Condición: %tipoInforme% = "Semanal"  
                Entonces:  
                    Acción: Ejecutar consulta SQL  
                        Conexión: conexionSQL  
                        Consulta: "EXEC sp_GenerarDatosSemanales @FechaInicio = '%DateTime.Now.AddDays(-6).ToString("yyyy-MM-dd")%', @FechaFin = '%DateTime.Now.ToString("yyyy-MM-dd")%'"  
                        Asignar resultado a variable: datosSemanales  
            Si no si  
                Condición: %tipoInforme% = "Mensual"  
                Entonces:  
                    Acción: Ejecutar consulta SQL  
                        Conexión: conexionSQL  
                        Consulta: "EXEC sp_GenerarDatosMensuales @Mes = %DateTime.Now.Month%, @Anio = %DateTime.Now.Year%"  
                        Asignar resultado a variable: datosMensuales

        # Abrir el archivo Excel generado
        Acción: Abrir aplicación Excel  
            Visible: Si  
            Asignar a variable: excelApp

        Acción: Abrir libro de Excel  
            Aplicación Excel: excelApp  
            Archivo: "%rutaInforme%"  
            Asignar a variable: libroExcel

        # Actualizar datos en el informe según el tipo
        Acción: Si  
            Condición: %tipoInforme% = "Diario"  
            Entonces:  
                Acción: Trabajar con hoja de Excel  
                    Libro: libroExcel  
                    Hoja de trabajo: "Datos"  
                    Asignar a variable: hojaDatos

                Acción: Escribir en celda de Excel  
                    Hoja de trabajo: hojaDatos  
                    Celda: "A1"  
                    Valor: "Informe Diario - %DateTime.Now.ToString("dd/MM/yyyy")%"

                Acción: Escribir datos en rango de Excel  
                    Hoja de trabajo: hojaDatos  
                    Rango inicial: "A3"  
                    Datos: datosDiarios

                Acción: Ejecutar macro de Excel  
                    Libro: libroExcel  
                    Nombre de la macro: "ActualizarGraficosDiarios"

            Si no si  
                Condición: %tipoInforme% = "Semanal"  
                Entonces:  
                    Acción: Trabajar con hoja de Excel  
                        Libro: libroExcel  
                        Hoja de trabajo: "Datos"  
                        Asignar a variable: hojaDatos

                    Acción: Escribir en celda de Excel  
                        Hoja de trabajo: hojaDatos  
                        Celda: "A1"  
                        Valor: "Informe Semanal - %DateTime.Now.AddDays(-6).ToString("dd/MM/yyyy")% al %DateTime.Now.ToString("dd/MM/yyyy")%"

                    Acción: Escribir datos en rango de Excel  
                        Hoja de trabajo: hojaDatos  
                        Rango inicial: "A3"  
                        Datos: datosSemanales

                    Acción: Ejecutar macro de Excel  
                        Libro: libroExcel  
                        Nombre de la macro: "ActualizarGraficosSemanales"

            Si no si  
                Condición: %tipoInforme% = "Mensual"  
                Entonces:  
                    Acción: Trabajar con hoja de Excel  
                        Libro: libroExcel  
                        Hoja de trabajo: "Datos"  
                        Asignar a variable: hojaDatos

                    Acción: Escribir en celda de Excel  
                        Hoja de trabajo: hojaDatos  
                        Celda: "A1"  
                        Valor: "Informe Mensual - %mesActual%"

                    Acción: Escribir datos en rango de Excel  
                        Hoja de trabajo: hojaDatos  
                        Rango inicial: "A3"  
                        Datos: datosMensuales

                    Acción: Ejecutar macro de Excel  
                        Libro: libroExcel  
                        Nombre de la macro: "ActualizarGraficosMensuales"

                    # Generar gráficas adicionales para el informe mensual
                    Acción: Ejecutar consulta SQL  
                        Conexión: conexionSQL  
                        Consulta: "EXEC sp_ObtenerComparativoMensual @Mes = %DateTime.Now.Month%, @Anio = %DateTime.Now.Year%"  
                        Asignar resultado a variable: datosComparativo

                    Acción: Trabajar con hoja de Excel  
                        Libro: libroExcel  
                        Hoja de trabajo: "Comparativo"  
                        Asignar a variable: hojaComparativo

                    Acción: Escribir datos en rango de Excel  
                        Hoja de trabajo: hojaComparativo  
                        Rango inicial: "A3"  
                        Datos: datosComparativo

                    Acción: Ejecutar macro de Excel  
                        Libro: libroExcel  
                        Nombre de la macro: "ActualizarGraficosComparativos"

        # Guardar y cerrar el libro
        Acción: Guardar libro de Excel  
            Libro: libroExcel

        Acción: Cerrar libro de Excel  
            Libro: libroExcel  
            Guardar cambios: Si

        # Generar versión PDF del informe
        Acción: Inicializar variable  
            Nombre: nombreInformePDF  
            Tipo: Texto  
            Valor: "Informe_%tipoInforme%_%fechaInforme%.pdf"

        Acción: Inicializar variable  
            Nombre: rutaInformePDF  
            Tipo: Texto  
            Valor: "%carpetaInformes%\%nombreInformePDF%"

        Acción: Convertir Excel a PDF  
            Archivo Excel: "%rutaInforme%"  
            Archivo PDF: "%rutaInformePDF%"  
            Sobrescribir si existe: Si

# Cerrar Excel
Acción: Cerrar aplicación Excel  
    Aplicación Excel: excelApp

# Cerrar conexión a la base de datos
Acción: Cerrar conexión SQL  
    Conexión: conexionSQL

