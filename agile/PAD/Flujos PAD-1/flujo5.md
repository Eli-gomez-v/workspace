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