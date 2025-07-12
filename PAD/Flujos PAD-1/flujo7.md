# Flujo 7: Mantenimiento y Optimización del Sistema NASTAT

## Descripción
Este flujo automatiza el mantenimiento y la optimización del sistema NASTAT, incluyendo la limpieza de datos, archivado de registros históricos, optimización de la base de datos y mantenimiento del sistema operativo.

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
    Valor: "admin_nastat"

Acción: Inicializar variable
    Nombre: passwordSQL
    Tipo: Texto
    Valor: "MaintPass123!" # En producción utilizar variables de entorno seguras

Acción: Inicializar variable
    Nombre: carpetaRespaldo
    Tipo: Texto
    Valor: "D:\Backups\NASTAT"

Acción: Inicializar variable
    Nombre: carpetaArchivo
    Tipo: Texto
    Valor: "D:\Archived\NASTAT"

Acción: Inicializar variable
    Nombre: carpetaLogs
    Tipo: Texto
    Valor: "C:\Logs\NASTAT\Mantenimiento"

Acción: Inicializar variable
    Nombre: fechaEjecucion
    Tipo: Texto
    Valor: %DateTime.Now.ToString("yyyyMMdd_HHmmss")%

Acción: Inicializar variable
    Nombre: logMantenimiento
    Tipo: Texto
    Valor: "Inicio de mantenimiento: %DateTime.Now.ToString()%\n"

Acción: Inicializar variable
    Nombre: periodoRetencion
    Tipo: Número
    Valor: 365 # En días (1 año)

Acción: Inicializar variable
    Nombre: totalRegistrosArchivados
    Tipo: Número
    Valor: 0

Acción: Inicializar variable
    Nombre: totalRegistrosEliminados
    Tipo: Número
    Valor: 0

# Verificar existencia de carpetas
Acción: Si carpeta existe
    Carpeta: "%carpetaRespaldo%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaRespaldo%"

Acción: Si carpeta existe
    Carpeta: "%carpetaArchivo%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaArchivo%"

Acción: Si carpeta existe
    Carpeta: "%carpetaLogs%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaLogs%"

# 1. Realizar respaldo de la base de datos
Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "Iniciando respaldo de la base de datos...\n"

Acción: Inicializar variable
    Nombre: nombreRespaldo
    Tipo: Texto
    Valor: "%carpetaRespaldo%\NASTAT_Full_%fechaEjecucion%.bak"

Acción: Conectar a base de datos SQL
    Cadena de conexión: "Server=%servidorSQL%;Database=%baseDatos%;User Id=%usuarioSQL%;Password=%passwordSQL%;"
    Asignar conexión a variable: conexionSQL
    En caso de error: Continuar

Acción: Si
    Condición: %conexionSQL% is null
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "ERROR: No se pudo conectar a la base de datos NASTAT\n"
        Acción: Mostrar mensaje
            Mensaje: "Error al conectar con la base de datos. Verifique las credenciales y conexión."
        Acción: Terminar flujo

Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "BACKUP DATABASE [%baseDatos%] TO DISK='%nombreRespaldo%' WITH COMPRESSION, INIT"
    En caso de error: Continuar

Acción: Si
    Condición: %ERRORLEVEL% = 0
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "Respaldo de base de datos completado correctamente: %nombreRespaldo%\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "ERROR: No se pudo realizar el respaldo de la base de datos\n"
        Acción: Mostrar mensaje
            Mensaje: "Error al realizar el respaldo de la base de datos."
        Acción: Terminar flujo

# 2. Archivar datos históricos
Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "Iniciando proceso de archivado de datos históricos...\n"

# Obtener fecha límite para archivar (datos más antiguos que el período de retención)
Acción: Inicializar variable
    Nombre: fechaLimiteArchivo
    Tipo: Texto
    Valor: %DateTime.Now.AddDays(-periodoRetencion).ToString("yyyy-MM-dd")%

# a. Archivar transacciones antiguas
Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "SELECT * FROM Transacciones WHERE FechaTransaccion < '%fechaLimiteArchivo%' AND Archivado = 0"
    Asignar resultado a variable: transaccionesAntiguas
    En caso de error: Continuar

Acción: Si
    Condición: %transaccionesAntiguas% is not null
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "Se encontraron %transaccionesAntiguas.RowCount% transacciones para archivar\n"
        
        # Exportar transacciones a CSV
        Acción: Escribir tabla CSV
            Tabla: transaccionesAntiguas
            Archivo: "%carpetaArchivo%\Transacciones_%fechaEjecucion%.csv"
            Separador de columnas: ","
            Incluir encabezados: Si
            Codificación: UTF-8
        
        # Marcar como archivadas en la base de datos
        Acción: Ejecutar consulta SQL
            Conexión: conexionSQL
            Consulta: "UPDATE Transacciones SET Archivado = 1, FechaArchivado = GETDATE() WHERE FechaTransaccion < '%fechaLimiteArchivo%' AND Archivado = 0"
            En caso de error: Continuar
        
        Acción: Incrementar variable
            Variable: totalRegistrosArchivados
            Incremento: %transaccionesAntiguas.RowCount%

# b. Archivar actividades de clientes antiguas
Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "SELECT * FROM ActividadesCliente WHERE FechaActividad < '%fechaLimiteArchivo%' AND Archivado = 0"
    Asignar resultado a variable: actividadesAntiguas
    En caso de error: Continuar

Acción: Si
    Condición: %actividadesAntiguas% is not null
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "Se encontraron %actividadesAntiguas.RowCount% actividades de clientes para archivar\n"
        
        # Exportar actividades a CSV
        Acción: Escribir tabla CSV
            Tabla: actividadesAntiguas
            Archivo: "%carpetaArchivo%\ActividadesCliente_%fechaEjecucion%.csv"
            Separador de columnas: ","
            Incluir encabezados: Si
            Codificación: UTF-8
        
        # Marcar como archivadas en la base de datos
        Acción: Ejecutar consulta SQL
            Conexión: conexionSQL
            Consulta: "UPDATE ActividadesCliente SET Archivado = 1, FechaArchivado = GETDATE() WHERE FechaActividad < '%fechaLimiteArchivo%' AND Archivado = 0"
            En caso de error: Continuar
        
        Acción: Incrementar variable
            Variable: totalRegistrosArchivados
            Incremento: %actividadesAntiguas.RowCount%

# c. Archivar logs antiguos
Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "SELECT * FROM LogSistema WHERE Fecha < '%fechaLimiteArchivo%'"
    Asignar resultado a variable: logsAntiguos
    En caso de error: Continuar

Acción: Si
    Condición: %logsAntiguos% is not null
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "Se encontraron %logsAntiguos.RowCount% logs del sistema para archivar\n"
        
        # Exportar logs a CSV
        Acción: Escribir tabla CSV
            Tabla: logsAntiguos
            Archivo: "%carpetaArchivo%\LogSistema_%fechaEjecucion%.csv"
            Separador de columnas: ","
            Incluir encabezados: Si
            Codificación: UTF-8
        
        # Eliminar logs antiguos (no solo marcarlos como archivados)
        Acción: Ejecutar consulta SQL
            Conexión: conexionSQL
            Consulta: "DELETE FROM LogSistema WHERE Fecha < '%fechaLimiteArchivo%'"
            En caso de error: Continuar
        
        Acción: Incrementar variable
            Variable: totalRegistrosArchivados
            Incremento: %logsAntiguos.RowCount%
        
        Acción: Incrementar variable
            Variable: totalRegistrosEliminados
            Incremento: %logsAntiguos.RowCount%

# 3. Compresión de archivos históricos
Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "Iniciando compresión de archivos históricos...\n"

Acción: Inicializar variable
    Nombre: archivoZip
    Tipo: Texto
    Valor: "%carpetaArchivo%\ArchivoHistorico_%fechaEjecucion%.zip"

Acción: Ejecutar script de PowerShell
    Script: |
        $filesToCompress = @(
            "%carpetaArchivo%\Transacciones_%fechaEjecucion%.csv",
            "%carpetaArchivo%\ActividadesCliente_%fechaEjecucion%.csv",
            "%carpetaArchivo%\LogSistema_%fechaEjecucion%.csv"
        )
        
        $filesExist = $false
        foreach ($file in $filesToCompress) {
            if (Test-Path $file) {
                $filesExist = $true
                break
            }
        }
        
        if ($filesExist) {
            Add-Type -AssemblyName System.IO.Compression.FileSystem
            [System.IO.Compression.ZipFile]::CreateFromDirectory("%carpetaArchivo%", "%archivoZip%")
            
            # Eliminar los archivos CSV originales después de comprimirlos
            foreach ($file in $filesToCompress) {
                if (Test-Path $file) {
                    Remove-Item $file -Force
                }
            }
            
            Write-Output "Archivos comprimidos correctamente en: %archivoZip%"
        } else {
            Write-Output "No se encontraron archivos para comprimir"
        }
    Asignar salida a variable: resultadoCompresion
    En caso de error: Continuar

Acción: Agr