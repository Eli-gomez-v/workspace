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
    Valor a agregar: "%resultadoCompresion%\n"

# 4. Optimización de la base de datos
Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "Iniciando optimización de la base de datos...\n"

# a. Reconstruir índices
Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "EXEC sp_MSforeachtable @command1='PRINT ''?''; ALTER INDEX ALL ON ? REBUILD'"
    En caso de error: Continuar

Acción: Si
    Condición: %ERRORLEVEL% = 0
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "Reconstrucción de índices completada correctamente\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "ERROR: No se pudieron reconstruir todos los índices\n"

# b. Actualizar estadísticas
Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "EXEC sp_updatestats"
    En caso de error: Continuar

Acción: Si
    Condición: %ERRORLEVEL% = 0
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "Actualización de estadísticas completada correctamente\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "ERROR: No se pudieron actualizar las estadísticas\n"

# c. Reducir el tamaño de los archivos de la base de datos
Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "DBCC SHRINKDATABASE (%baseDatos%, 10)"
    En caso de error: Continuar

Acción: Si
    Condición: %ERRORLEVEL% = 0
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "Reducción del tamaño de la base de datos completada correctamente\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "ERROR: No se pudo reducir el tamaño de la base de datos\n"

# 5. Limpieza de archivos temporales
Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "Iniciando limpieza de archivos temporales...\n"

# a. Limpiar carpeta de archivos temporales de NASTAT
Acción: Ejecutar script de PowerShell
    Script: |
        $tempPath = "C:\Temp\NASTAT"
        $daysToKeep = 7
        
        if (Test-Path $tempPath) {
            $deletedCount = 0
            $failedCount = 0
            
            # Eliminar archivos más antiguos que $daysToKeep días
            Get-ChildItem -Path $tempPath -Recurse -File | 
                Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-$daysToKeep) } | 
                ForEach-Object {
                    try {
                        Remove-Item $_.FullName -Force
                        $deletedCount++
                    } catch {
                        $failedCount++
                    }
                }
            
            # Eliminar carpetas vacías
            Get-ChildItem -Path $tempPath -Recurse -Directory | 
                Where-Object { (Get-ChildItem -Path $_.FullName -Recurse -File) -eq $null } | 
                ForEach-Object {
                    try {
                        Remove-Item $_.FullName -Force -Recurse
                    } catch {
                        # Ignorar error si no se puede eliminar la carpeta
                    }
                }
            
            Write-Output "Limpieza completada. Se eliminaron $deletedCount archivos. No se pudieron eliminar $failedCount archivos."
        } else {
            Write-Output "La carpeta de archivos temporales no existe: $tempPath"
        }
    Asignar salida a variable: resultadoLimpieza
    En caso de error: Continuar

Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "%resultadoLimpieza%\n"

# b. Limpiar registros de logs locales antiguos
Acción: Ejecutar script de PowerShell
    Script: |
        $logPath = "%carpetaLogs%"
        $daysToKeep = 30
        
        if (Test-Path $logPath) {
            $deletedCount = 0
            $failedCount = 0
            
            # Eliminar archivos de log más antiguos que $daysToKeep días
            Get-ChildItem -Path $logPath -Filter "*.log" -Recurse -File | 
                Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-$daysToKeep) } | 
                ForEach-Object {
                    try {
                        Remove-Item $_.FullName -Force
                        $deletedCount++
                    } catch {
                        $failedCount++
                    }
                }
            
            Write-Output "Limpieza de logs completada. Se eliminaron $deletedCount archivos de log antiguos. No se pudieron eliminar $failedCount archivos."
        } else {
            Write-Output "La carpeta de logs no existe: $logPath"
        }
    Asignar salida a variable: resultadoLimpiezaLogs
    En caso de error: Continuar

Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "%resultadoLimpiezaLogs%\n"

# 6. Mantenimiento de respaldos
Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "Iniciando mantenimiento de respaldos...\n"

# a. Eliminar respaldos antiguos
Acción: Ejecutar script de PowerShell
    Script: |
        $backupPath = "%carpetaRespaldo%"
        $daysToKeep = 90  # Mantener respaldos por 3 meses
        
        if (Test-Path $backupPath) {
            $deletedCount = 0
            $failedCount = 0
            
            # Eliminar archivos de respaldo más antiguos que $daysToKeep días
            Get-ChildItem -Path $backupPath -Filter "*.bak" -Recurse -File | 
                Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-$daysToKeep) } | 
                ForEach-Object {
                    try {
                        Remove-Item $_.FullName -Force
                        $deletedCount++
                    } catch {
                        $failedCount++
                    }
                }
            
            Write-Output "Limpieza de respaldos completada. Se eliminaron $deletedCount respaldos antiguos. No se pudieron eliminar $failedCount archivos."
        } else {
            Write-Output "La carpeta de respaldos no existe: $backupPath"
        }
    Asignar salida a variable: resultadoLimpiezaRespaldos
    En caso de error: Continuar

Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "%resultadoLimpiezaRespaldos%\n"

# 7. Verificación de integridad de la base de datos
Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "Iniciando verificación de integridad de la base de datos...\n"

Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "DBCC CHECKDB ('%baseDatos%') WITH NO_INFOMSGS"
    En caso de error: Continuar

Acción: Si
    Condición: %ERRORLEVEL% = 0
    Entonces:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "Verificación de integridad completada correctamente. No se encontraron problemas.\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMantenimiento
            Valor a agregar: "ERROR: Se encontraron problemas durante la verificación de integridad de la base de datos. Se requiere revisión manual.\n"
        
        Acción: Enviar correo electrónico (SMTP)
            Servidor: "smtp.empresa.com"
            Puerto: 25
            De: "sistema@empresa.com"
            Para: "dba@empresa.com"
            Asunto: "ALERTA: Problemas de integridad en la base de datos NASTAT"
            Cuerpo: "Se han detectado problemas durante la verificación de integridad de la base de datos NASTAT. Se requiere revisión manual urgente."
            Prioridad: Alta

# 8. Actualizar registro de mantenimiento
Acción: Ejecutar consulta SQL
    Conexión: conexionSQL
    Consulta: "INSERT INTO LogMantenimiento (FechaEjecucion, RegistrosArchivados, RegistrosEliminados, RespaldoRealizado)
              VALUES (GETDATE(), %totalRegistrosArchivados%, %totalRegistrosEliminados%, 1)"

# Cerrar conexión a la base de datos
Acción: Cerrar conexión SQL
    Conexión: conexionSQL

# Guardar log de mantenimiento
Acción: Agregar a variable
    Variable: logMantenimiento
    Valor a agregar: "\nResumen de mantenimiento:\n- Registros archivados: %totalRegistrosArchivados%\n- Registros eliminados: %totalRegistrosEliminados%\n\nFin de mantenimiento: %DateTime.Now.ToString()%"

Acción: Escribir archivo de texto
    Archivo: "%carpetaLogs%\mantenimiento_%fechaEjecucion%.log"
    Texto: "%logMantenimiento%"
    Codificación: UTF-8
    Agregar al final: No

# Notificar finalización de mantenimiento
Acción: Enviar correo electrónico (SMTP)
    Servidor: "smtp.empresa.com"
    Puerto: 25
    De: "sistema@empresa.com"
    Para: "it@empresa.com"
    Asunto: "Mantenimiento NASTAT - Completado %fechaEjecucion%"
    Cuerpo: "Se ha completado el proceso de mantenimiento del sistema NASTAT.\n\nResumen:\n- Registros archivados: %totalRegistrosArchivados%\n- Registros eliminados: %totalRegistrosEliminados%\n- Respaldo realizado: %nombreRespaldo%\n- Optimización de BD: Completada\n\nConsulte el archivo de log para más detalles: %carpetaLogs%\mantenimiento_%fechaEjecucion%.log"

# Mostrar mensaje de finalización
Acción: Mostrar mensaje
    Mensaje: "Proceso de mantenimiento completado.\n\nRegistros archivados: %totalRegistrosArchivados%\nRegistros eliminados: %totalRegistrosEliminados%\nRespaldo realizado: %nombreRespaldo%"
```egar a variable
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