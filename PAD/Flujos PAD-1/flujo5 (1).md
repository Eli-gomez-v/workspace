# Flujo 5: Monitoreo de Rendimiento NASTAT

## Descripción
Este flujo automatiza el monitoreo del rendimiento del sistema NASTAT, verificando el estado de la base de datos, tiempos de respuesta, y generando alertas ante posibles problemas.

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
    Valor: "monitor_user"

Acción: Inicializar variable
    Nombre: passwordSQL
    Tipo: Texto
    Valor: "MonitorPass123!" # En producción utilizar variables de entorno seguras

Acción: Inicializar variable
    Nombre: carpetaLogs
    Tipo: Texto
    Valor: "C:\Logs\NASTAT\Monitoreo"

Acción: Inicializar variable
    Nombre: fechaEjecucion
    Tipo: Texto
    Valor: %DateTime.Now.ToString("yyyyMMdd_HHmmss")%

Acción: Inicializar variable
    Nombre: logMonitoreo
    Tipo: Texto
    Valor: "Inicio de monitoreo: %DateTime.Now.ToString()%\n"

Acción: Inicializar variable
    Nombre: hayAlerta
    Tipo: Booleano
    Valor: False

Acción: Inicializar variable
    Nombre: mensajeAlerta
    Tipo: Texto
    Valor: ""

Acción: Inicializar variable
    Nombre: umbralesAlerta
    Tipo: Tabla
    Valor: [
        {"Metrica": "TiempoRespuestaConsulta", "Umbral": 3000, "Unidad": "ms", "Nivel": "Advertencia"},
        {"Metrica": "TiempoRespuestaConsulta", "Umbral": 5000, "Unidad": "ms", "Nivel": "Crítico"},
        {"Metrica": "EspacioDisco", "Umbral": 85, "Unidad": "%", "Nivel": "Advertencia"},
        {"Metrica": "EspacioDisco", "Umbral": 95, "Unidad": "%", "Nivel": "Crítico"},
        {"Metrica": "UsoCPU", "Umbral": 80, "Unidad": "%", "Nivel": "Advertencia"},
        {"Metrica": "UsoCPU", "Umbral": 95, "Unidad": "%", "Nivel": "Crítico"},
        {"Metrica": "UsoRAM", "Umbral": 80, "Unidad": "%", "Nivel": "Advertencia"},
        {"Metrica": "UsoRAM", "Umbral": 90, "Unidad": "%", "Nivel": "Crítico"}
    ]

# Verificar existencia de carpeta de logs
Acción: Si carpeta existe
    Carpeta: "%carpetaLogs%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaLogs%"

# 1. Verificación de conexión a la base de datos
Acción: Inicializar variable
    Nombre: tiempoInicio
    Tipo: Fecha
    Valor: %DateTime.Now%

Acción: Conectar a base de datos SQL
    Cadena de conexión: "Server=%servidorSQL%;Database=%baseDatos%;User Id=%usuarioSQL%;Password=%passwordSQL%;Connection Timeout=10;"
    Asignar conexión a variable: conexionSQL
    En caso de error: Continuar

Acción: Inicializar variable
    Nombre: tiempoFin
    Tipo: Fecha
    Valor: %DateTime.Now%

Acción: Inicializar variable
    Nombre: tiempoConexion
    Tipo: Número
    Valor: %DateDiff("millisecond", tiempoInicio, tiempoFin)%

Acción: Si
    Condición: %conexionSQL% is null
    Entonces:
        Acción: Asignar variable
            Variable: hayAlerta
            Valor: True
        
        Acción: Asignar variable
            Variable: mensajeAlerta
            Valor: "CRÍTICO: No se pudo establecer conexión con la base de datos NASTAT"
        
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "ERROR: No se pudo establecer conexión con la base de datos. Verifique las credenciales y que el servidor esté disponible.\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "Conexión establecida en %tiempoConexion% ms\n"
        
        # Verificar umbral de tiempo de conexión
        Acción: Si
            Condición: %tiempoConexion% > 1000
            Entonces:
                Acción: Asignar variable
                    Variable: hayAlerta
                    Valor: True
                
                Acción: Asignar variable
                    Variable: mensajeAlerta
                    Valor: "ADVERTENCIA: Tiempo de conexión a la base de datos elevado (%tiempoConexion% ms)"
                
                Acción: Agregar a variable
                    Variable: logMonitoreo
                    Valor a agregar: "ERROR: Fallo al ejecutar consulta de prueba en la base de datos\n"
            Si no:
                Acción: Agregar a variable
                    Variable: logMonitoreo
                    Valor a agregar: "Consulta ejecutada en %tiempoConsulta% ms. Registros: %resultadoConsulta[0][0]%\n"
                
                # Verificar umbrales de tiempo de consulta
                Acción: Para cada
                    Variable: umbral
                    Matriz/Lista: umbralesAlerta
                    Acciones:
                        Acción: Si
                            Condición: %umbral["Metrica"]% = "TiempoRespuestaConsulta" AND %tiempoConsulta% > %umbral["Umbral"]%
                            Entonces:
                                Acción: Asignar variable
                                    Variable: hayAlerta
                                    Valor: True
                                
                                Acción: Asignar variable
                                    Variable: mensajeAlerta
                                    Valor: "%umbral["Nivel"]%: Tiempo de respuesta de consulta elevado (%tiempoConsulta% ms)"
                                
                                Acción: Agregar a variable
                                    Variable: logMonitoreo
                                    Valor a agregar: "%umbral["Nivel"]%: Tiempo de respuesta de consulta elevado (%tiempoConsulta% ms > %umbral["Umbral"]% %umbral["Unidad"]%)\n"

# 3. Verificación de espacio en disco
Acción: Ejecutar script de PowerShell
    Script: |
        $drives = Get-WmiObject Win32_LogicalDisk | Where-Object { $_.DriveType -eq 3 } | Select-Object DeviceID, Size, FreeSpace
        $resultados = @()
        foreach ($drive in $drives) {
            $porcentajeUso = [Math]::Round(100 - (($drive.FreeSpace / $drive.Size) * 100), 2)
            $resultados += [PSCustomObject]@{
                Unidad = $drive.DeviceID
                EspacioTotal = [Math]::Round($drive.Size / 1GB, 2)
                EspacioLibre = [Math]::Round($drive.FreeSpace / 1GB, 2)
                PorcentajeUso = $porcentajeUso
            }
        }
        $resultados | ConvertTo-Json
    Asignar salida a variable: resultadoEspacioDisco

Acción: Ejecutar JavaScript
    Código JavaScript: |
        try {
            return JSON.parse(resultadoEspacioDisco);
        } catch (e) {
            return null;
        }
    Asignar salida a variable: espacioDisco

Acción: Si
    Condición: %espacioDisco% is null
    Entonces:
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "ERROR: No se pudo obtener información del espacio en disco\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "Información de espacio en disco:\n"
        
        Acción: Para cada
            Variable: unidad
            Matriz/Lista: espacioDisco
            Acciones:
                Acción: Agregar a variable
                    Variable: logMonitoreo
                    Valor a agregar: "Unidad %unidad.Unidad%: %unidad.EspacioLibre% GB libres de %unidad.EspacioTotal% GB (%unidad.PorcentajeUso%% usado)\n"
                
                # Verificar umbrales de espacio en disco
                Acción: Para cada
                    Variable: umbral
                    Matriz/Lista: umbralesAlerta
                    Acciones:
                        Acción: Si
                            Condición: %umbral["Metrica"]% = "EspacioDisco" AND %unidad.PorcentajeUso% > %umbral["Umbral"]%
                            Entonces:
                                Acción: Asignar variable
                                    Variable: hayAlerta
                                    Valor: True
                                
                                Acción: Asignar variable
                                    Variable: mensajeAlerta
                                    Valor: "%umbral["Nivel"]%: Espacio en disco bajo en unidad %unidad.Unidad% (%unidad.PorcentajeUso%%)"
                                
                                Acción: Agregar a variable
                                    Variable: logMonitoreo
                                    Valor a agregar: "%umbral["Nivel"]%: Espacio en disco bajo en unidad %unidad.Unidad% (%unidad.PorcentajeUso%% > %umbral["Umbral"]%%)\n"

# 4. Verificación de uso de CPU y memoria
Acción: Ejecutar script de PowerShell
    Script: |
        $usoCPU = (Get-WmiObject -Class Win32_Processor | Measure-Object -Property LoadPercentage -Average).Average
        $memoriaTotal = (Get-WmiObject -Class Win32_ComputerSystem).TotalPhysicalMemory / 1GB
        $memoriaDisponible = (Get-WmiObject -Class Win32_OperatingSystem).FreePhysicalMemory / 1MB
        $memoriaUsada = $memoriaTotal - ($memoriaDisponible / 1024)
        $porcentajeUsoMemoria = [Math]::Round(($memoriaUsada / $memoriaTotal) * 100, 2)
        
        @{
            UsoCPU = $usoCPU
            MemoriaTotal = [Math]::Round($memoriaTotal, 2)
            MemoriaUsada = [Math]::Round($memoriaUsada, 2)
            MemoriaDisponible = [Math]::Round($memoriaDisponible / 1024, 2)
            PorcentajeUsoMemoria = $porcentajeUsoMemoria
        } | ConvertTo-Json
    Asignar salida a variable: resultadoRecursos

Acción: Ejecutar JavaScript
    Código JavaScript: |
        try {
            return JSON.parse(resultadoRecursos);
        } catch (e) {
            return null;
        }
    Asignar salida a variable: recursos

Acción: Si
    Condición: %recursos% is null
    Entonces:
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "ERROR: No se pudo obtener información de CPU y memoria\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "Uso de CPU: %recursos.UsoCPU%%\nMemoria: %recursos.MemoriaUsada% GB de %recursos.MemoriaTotal% GB (%recursos.PorcentajeUsoMemoria%% usado)\n"
        
        # Verificar umbrales de CPU
        Acción: Para cada
            Variable: umbral
            Matriz/Lista: umbralesAlerta
            Acciones:
                Acción: Si
                    Condición: %umbral["Metrica"]% = "UsoCPU" AND %recursos.UsoCPU% > %umbral["Umbral"]%
                    Entonces:
                        Acción: Asignar variable
                            Variable: hayAlerta
                            Valor: True
                        
                        Acción: Asignar variable
                            Variable: mensajeAlerta
                            Valor: "%umbral["Nivel"]%: Uso de CPU elevado (%recursos.UsoCPU%%)"
                        
                        Acción: Agregar a variable
                            Variable: logMonitoreo
                            Valor a agregar: "%umbral["Nivel"]%: Uso de CPU elevado (%recursos.UsoCPU%% > %umbral["Umbral"]%%)\n"
        
        # Verificar umbrales de memoria
        Acción: Para cada
            Variable: umbral
            Matriz/Lista: umbralesAlerta
            Acciones:
                Acción: Si
                    Condición: %umbral["Metrica"]% = "UsoRAM" AND %recursos.PorcentajeUsoMemoria% > %umbral["Umbral"]%
                    Entonces:
                        Acción: Asignar variable
                            Variable: hayAlerta
                            Valor: True
                        
                        Acción: Asignar variable
                            Variable: mensajeAlerta
                            Valor: "%umbral["Nivel"]%: Uso de memoria elevado (%recursos.PorcentajeUsoMemoria%%)"
                        
                        Acción: Agregar a variable
                            Variable: logMonitoreo
                            Valor a agregar: "%umbral["Nivel"]%: Uso de memoria elevado (%recursos.PorcentajeUsoMemoria%% > %umbral["Umbral"]%%)\n"

# 5. Verificación de procesos del sistema NASTAT
Acción: Ejecutar script de PowerShell
    Script: |
        $procesos = @("NASTAT_Service", "NASTAT_DBManager", "NASTAT_WebAPI")
        $resultados = @()
        
        foreach ($proceso in $procesos) {
            $proc = Get-Process -Name $proceso -ErrorAction SilentlyContinue
            if ($proc) {
                $resultados += [PSCustomObject]@{
                    Nombre = $proceso
                    Estado = "Ejecutando"
                    PID = $proc.Id
                    UsoMemoria = [Math]::Round($proc.WorkingSet64 / 1MB, 2)
                    TiempoEjecucion = [Math]::Round(((Get-Date) - $proc.StartTime).TotalHours, 2)
                }
            } else {
                $resultados += [PSCustomObject]@{
                    Nombre = $proceso
                    Estado = "Detenido"
                    PID = 0
                    UsoMemoria = 0
                    TiempoEjecucion = 0
                }
            }
        }
        
        $resultados | ConvertTo-Json
    Asignar salida a variable: resultadoProcesos
    En caso de error: Continuar

Acción: Ejecutar JavaScript
    Código JavaScript: |
        try {
            return JSON.parse(resultadoProcesos);
        } catch (e) {
            return null;
        }
    Asignar salida a variable: procesos

Acción: Si
    Condición: %procesos% is null
    Entonces:
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "ERROR: No se pudo obtener información de los procesos del sistema\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "Estado de procesos NASTAT:\n"
        
        Acción: Para cada
            Variable: proceso
            Matriz/Lista: procesos
            Acciones:
                Acción: Agregar a variable
                    Variable: logMonitoreo
                    Valor a agregar: "Proceso %proceso.Nombre%: %proceso.Estado%"
                
                Acción: Si
                    Condición: %proceso.Estado% = "Ejecutando"
                    Entonces:
                        Acción: Agregar a variable
                            Variable: logMonitoreo
                            Valor a agregar: " (PID: %proceso.PID%, Memoria: %proceso.UsoMemoria% MB, Tiempo: %proceso.TiempoEjecucion% horas)\n"
                    Si no:
                        Acción: Asignar variable
                            Variable: hayAlerta
                            Valor: True
                        
                        Acción: Asignar variable
                            Variable: mensajeAlerta
                            Valor: "CRÍTICO: Proceso %proceso.Nombre% detenido"
                        
                        Acción: Agregar a variable
                            Variable: logMonitoreo
                            Valor a agregar: " - CRÍTICO: Proceso detenido\n"

# 6. Verificación del estado del servicio web NASTAT
Acción: Inicializar variable
    Nombre: urlAPI
    Tipo: Texto
    Valor: "https://api.nastat.empresa.com/status"

Acción: Inicializar variable
    Nombre: tiempoInicioAPI
    Tipo: Fecha
    Valor: %DateTime.Now%

Acción: Realizar solicitud HTTP
    URL: "%urlAPI%"
    Método: GET
    Tiempo de espera: 10
    Asignar respuesta a variable: respuestaAPI
    En caso de error: Continuar

Acción: Inicializar variable
    Nombre: tiempoFinAPI
    Tipo: Fecha
    Valor: %DateTime.Now%

Acción: Inicializar variable
    Nombre: tiempoRespuestaAPI
    Tipo: Número
    Valor: %DateDiff("millisecond", tiempoInicioAPI, tiempoFinAPI)%

Acción: Si
    Condición: %respuestaAPI% is null
    Entonces:
        Acción: Asignar variable
            Variable: hayAlerta
            Valor: True
        
        Acción: Asignar variable
            Variable: mensajeAlerta
            Valor: "CRÍTICO: No se pudo conectar con la API Web de NASTAT"
        
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "ERROR: No se pudo conectar con la API Web en %urlAPI%\n"
    Si no:
        Acción: Agregar a variable
            Variable: logMonitoreo
            Valor a agregar: "API Web responde en %tiempoRespuestaAPI% ms. Estado: %respuestaAPI.StatusCode%\n"
        
        Acción: Si
            Condición: %respuestaAPI.StatusCode% != 200
            Entonces:
                Acción: Asignar variable
                    Variable: hayAlerta
                    Valor: True
                
                Acción: Asignar variable
                    Variable: mensajeAlerta
                    Valor: "CRÍTICO: API Web devuelve código de estado %respuestaAPI.StatusCode%"
                
                Acción: Agregar a variable
                    Variable: logMonitoreo
                    Valor a agregar: "CRÍTICO: API Web devuelve código de estado %respuestaAPI.StatusCode%\n"
        
        Acción: Si
            Condición: %tiempoRespuestaAPI% > 1000
            Entonces:
                Acción: Asignar variable
                    Variable: hayAlerta
                    Valor: True
                
                Acción: Asignar variable
                    Variable: mensajeAlerta
                    Valor: "ADVERTENCIA: Tiempo de respuesta de API Web elevado (%tiempoRespuestaAPI% ms)"
                
                Acción: Agregar a variable
                    Variable: logMonitoreo
                    Valor a agregar: "ADVERTENCIA: Tiempo de respuesta de API Web elevado (%tiempoRespuestaAPI% ms)\n"

# Cerrar la conexión a la base de datos si está activa
Acción: Si
    Condición: %conexionSQL% is not null
    Entonces:
        Acción: Cerrar conexión SQL
            Conexión: conexionSQL

# Guardar log de monitoreo
Acción: Agregar a variable
    Variable: logMonitoreo
    Valor a agregar: "\nFin de monitoreo: %DateTime.Now.ToString()%"

Acción: Escribir archivo de texto
    Archivo: "%carpetaLogs%\monitoreo_%fechaEjecucion%.log"
    Texto: "%logMonitoreo%"
    Codificación: UTF-8
    Agregar al final: No

# Registro en base de datos de monitoreo (solo si hay conexión)
Acción: Inicializar variable
    Nombre: estadoGeneral
    Tipo: Texto
    Valor: "Normal"

Acción: Si
    Condición: %hayAlerta% = True
    Entonces:
        Acción: Asignar variable
            Variable: estadoGeneral
            Valor: "Alerta"

Acción: Conectar a base de datos SQL
    Cadena de conexión: "Server=%servidorSQL%;Database=%baseDatos%;User Id=%usuarioSQL%;Password=%passwordSQL%;"
    Asignar conexión a variable: conexionMonitoreo
    En caso de error: Continuar

Acción: Si
    Condición: %conexionMonitoreo% is not null
    Entonces:
        Acción: Ejecutar consulta SQL
            Conexión: conexionMonitoreo
            Consulta: "INSERT INTO MonitoreoSistema (FechaEjecucion, Estado, TiempoConexion, TiempoConsulta, UsoCPU, UsoMemoria, Mensaje) VALUES (GETDATE(), '%estadoGeneral%', %tiempoConexion%, %tiempoConsulta%, %recursos.UsoCPU%, %recursos.PorcentajeUsoMemoria%, '%mensajeAlerta%')"
            En caso de error: Continuar
        
        Acción: Cerrar conexión SQL
            Conexión: conexionMonitoreo

# Enviar notificación si hay alertas
Acción: Si
    Condición: %hayAlerta% = True
    Entonces:
        Acción: Enviar correo electrónico (SMTP)
            Servidor: "smtp.empresa.com"
            Puerto: 25
            De: "monitoreo@empresa.com"
            Para: "soporte@empresa.com; administradores@empresa.com"
            Asunto: "ALERTA: Monitoreo NASTAT - %mensajeAlerta%"
            Cuerpo: "Se ha detectado la siguiente alerta en el sistema NASTAT:\n\n%mensajeAlerta%\n\nConsulte el archivo de log para más detalles: %carpetaLogs%\monitoreo_%fechaEjecucion%.log"
            Prioridad: Alta

# Mostrar resumen
Acción: Si
    Condición: %hayAlerta% = True
    Entonces:
        Acción: Mostrar mensaje
            Mensaje: "Monitoreo completado con ALERTAS.\n\n%mensajeAlerta%"
    Si no:
        Acción: Mostrar mensaje
            Mensaje: "Monitoreo completado normalmente. No se detectaron problemas."
```: logMonitoreo
                    Valor a agregar: "ADVERTENCIA: Tiempo de conexión elevado\n"

# 2. Prueba de tiempo de respuesta a consultas
Acción: Si
    Condición: %conexionSQL% is not null
    Entonces:
        Acción: Inicializar variable
            Nombre: tiempoInicioConsulta
            Tipo: Fecha
            Valor: %DateTime.Now%
        
        Acción: Ejecutar consulta SQL
            Conexión: conexionSQL
            Consulta: "SELECT COUNT(*) FROM Registros"
            Asignar resultado a variable: resultadoConsulta
            En caso de error: Continuar
        
        Acción: Inicializar variable
            Nombre: tiempoFinConsulta
            Tipo: Fecha
            Valor: %DateTime.Now%
        
        Acción: Inicializar variable
            Nombre: tiempoConsulta
            Tipo: Número
            Valor: %DateDiff("millisecond", tiempoInicioConsulta, tiempoFinConsulta)%
        
        Acción: Si
            Condición: %resultadoConsulta% is null
            Entonces:
                Acción: Asignar variable
                    Variable: hayAlerta
                    Valor: True
                
                Acción: Asignar variable
                    Variable: mensajeAlerta
                    Valor: "CRÍTICO: Error al ejecutar consulta de prueba en la base de datos"
                
                Acción: Agregar a variable
                    Variable