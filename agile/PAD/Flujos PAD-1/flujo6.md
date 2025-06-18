# Flujo 6: Sincronización de Datos entre Sistemas

## Descripción
Este flujo automatiza la sincronización de datos entre el sistema NASTAT y otros sistemas empresariales, garantizando la consistencia de la información en todas las plataformas.

## Implementación en Power Automate Desktop

```
# Inicialización de variables
Acción: Inicializar variable
    Nombre: servidorNASTAT
    Tipo: Texto
    Valor: "SQL-SERVER-NASTAT"

Acción: Inicializar variable
    Nombre: bdNASTAT
    Tipo: Texto
    Valor: "NASTAT_DB"

Acción: Inicializar variable
    Nombre: servidorERP
    Tipo: Texto
    Valor: "SQL-SERVER-ERP"

Acción: Inicializar variable
    Nombre: bdERP
    Tipo: Texto
    Valor: "ERP_DB"

Acción: Inicializar variable
    Nombre: servidorCRM
    Tipo: Texto
    Valor: "SQL-SERVER-CRM"

Acción: Inicializar variable
    Nombre: bdCRM
    Tipo: Texto
    Valor: "CRM_DB"

Acción: Inicializar variable
    Nombre: usuarioSQL
    Tipo: Texto
    Valor: "sync_user"

Acción: Inicializar variable
    Nombre: passwordSQL
    Tipo: Texto
    Valor: "SyncPass123!" # En producción utilizar variables de entorno seguras

Acción: Inicializar variable
    Nombre: carpetaTemporal
    Tipo: Texto
    Valor: "C:\Temp\NASTAT\Sync"

Acción: Inicializar variable
    Nombre: carpetaLogs
    Tipo: Texto
    Valor: "C:\Logs\NASTAT\Sync"

Acción: Inicializar variable
    Nombre: fechaEjecucion
    Tipo: Texto
    Valor: %DateTime.Now.ToString("yyyyMMdd_HHmmss")%

Acción: Inicializar variable
    Nombre: logSync
    Tipo: Texto
    Valor: "Inicio de sincronización: %DateTime.Now.ToString()%\n"

Acción: Inicializar variable
    Nombre: registrosSincronizados
    Tipo: Número
    Valor: 0

Acción: Inicializar variable
    Nombre: registrosConflicto
    Tipo: Número
    Valor: 0

# Verificar existencia de carpetas
Acción: Si carpeta existe
    Carpeta: "%carpetaTemporal%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaTemporal%"

Acción: Si carpeta existe
    Carpeta: "%carpetaLogs%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaLogs%"

# 1. Establecer conexiones a las bases de datos
Acción: Agregar a variable
    Variable: logSync
    Valor a agregar: "Estableciendo conexiones a bases de datos...\n"

Acción: Conectar a base de datos SQL
    Cadena de conexión: "Server=%servidorNASTAT%;Database=%bdNASTAT%;User Id=%usuarioSQL%;Password=%passwordSQL%;"
    Asignar conexión a variable: conexionNASTAT
    En caso de error: Continuar

Acción: Si
    Condición: %conexionNASTAT% is null
    Entonces:
        Acción: Agregar a variable
            Variable: logSync
            Valor a agregar: "ERROR: No se pudo conectar a la base de datos NASTAT\n"
        Acción: Mostrar mensaje
            Mensaje: "Error al conectar con la base de datos NASTAT. Verificar credenciales y conexión."
        Acción: Terminar flujo

Acción: Conectar a base de datos SQL
    Cadena de conexión: "Server=%servidorERP%;Database=%bdERP%;User Id=%usuarioSQL%;Password=%passwordSQL%;"
    Asignar conexión a variable: conexionERP
    En caso de error: Continuar

Acción: Si
    Condición: %conexionERP% is null
    Entonces:
        Acción: Agregar a variable
            Variable: logSync
            Valor a agregar: "ERROR: No se pudo conectar a la base de datos ERP\n"
        Acción: Mostrar mensaje
            Mensaje: "Error al conectar con la base de datos ERP. Verificar credenciales y conexión."
        Acción: Cerrar conexión SQL
            Conexión: conexionNASTAT
        Acción: Terminar flujo

Acción: Conectar a base de datos SQL
    Cadena de conexión: "Server=%servidorCRM%;Database=%bdCRM%;User Id=%usuarioSQL%;Password=%passwordSQL%;"
    Asignar conexión a variable: conexionCRM
    En caso de error: Continuar

Acción: Si
    Condición: %conexionCRM% is null
    Entonces:
        Acción: Agregar a variable
            Variable: logSync
            Valor a agregar: "ERROR: No se pudo conectar a la base de datos CRM\n"
        Acción: Mostrar mensaje
            Mensaje: "Error al conectar con la base de datos CRM. Verificar credenciales y conexión."
        Acción: Cerrar conexión SQL
            Conexión: conexionNASTAT
        Acción: Cerrar conexión SQL
            Conexión: conexionERP
        Acción: Terminar flujo

Acción: Agregar a variable
    Variable: logSync
    Valor a agregar: "Conexiones establecidas correctamente\n"

# 2. Sincronización de datos de Clientes (CRM -> NASTAT)
Acción: Agregar a variable
    Variable: logSync
    Valor a agregar: "Iniciando sincronización de Clientes desde CRM...\n"

# Obtener clientes actualizados en CRM
Acción: Ejecutar consulta SQL
    Conexión: conexionCRM
    Consulta: "SELECT ClienteID, Nombre, Email, Telefono, Direccion, FechaUltimaActualizacion FROM Clientes WHERE FechaUltimaActualizacion > DATEADD(day, -1, GETDATE())"
    Asignar resultado a variable: clientesCRM

Acción: Agregar a variable
    Variable: logSync
    Valor a agregar: "Se encontraron %clientesCRM.RowCount% clientes actualizados en CRM\n"

# Exportar los datos a CSV para procesamiento
Acción: Escribir tabla CSV
    Tabla: clientesCRM
    Archivo: "%carpetaTemporal%\clientes_crm_%fechaEjecucion%.csv"
    Separador de columnas: ","
    Incluir encabezados: Si
    Codificación: UTF-8

# Procesar cada cliente
Acción: Para cada
    Variable: cliente
    Matriz/Lista: clientesCRM.Rows
    Acciones:
        # Verificar si el cliente existe en NASTAT
        Acción: Ejecutar consulta SQL
            Conexión: conexionNASTAT
            Consulta: "SELECT COUNT(*) AS Existe FROM ClientesNASTAT WHERE ClienteID = '%cliente["ClienteID"]%'"
            Asignar resultado a variable: clienteExiste
        
        Acción: Si
            Condición: %clienteExiste[0]["Existe"]% > 0
            Entonces:
                # Actualizar cliente existente
                Acción: Ejecutar consulta SQL
                    Conexión: conexionNASTAT
                    Consulta: "UPDATE ClientesNASTAT SET 
                              Nombre = '%cliente["Nombre"].Replace("'", "''")%',
                              Email = '%cliente["Email"].Replace("'", "''")%',
                              Telefono = '%cliente["Telefono"].Replace("'", "''")%',
                              Direccion = '%cliente["Direccion"].Replace("'", "''")%',
                              FechaUltimaActualizacion = '%cliente["FechaUltimaActualizacion"]%',
                              SincronizadoEl = GETDATE()
                              WHERE ClienteID = '%cliente["ClienteID"]%'"
                    En caso de error: Continuar
                
                Acción: Si
                    Condición: %ERRORLEVEL% = 0
                    Entonces:
                        Acción: Incrementar variable
                            Variable: registrosSincronizados
                            Incremento: 1
                    Si no:
                        Acción: Incrementar variable
                            Variable: registrosConflicto
                            Incremento: 1
                        Acción: Agregar a variable
                            Variable: logSync
                            Valor a agregar: "ERROR: No se pudo actualizar el cliente ID=%cliente["ClienteID"]%\n"
            Si no:
                # Insertar nuevo cliente
                Acción: Ejecutar consulta SQL
                    Conexión: conexionNASTAT
                    Consulta: "INSERT INTO ClientesNASTAT (ClienteID, Nombre, Email, Telefono, Direccion, FechaUltimaActualizacion, SincronizadoEl)
                              VALUES (
                                '%cliente["ClienteID"]%',
                                '%cliente["Nombre"].Replace("'", "''")%',
                                '%cliente["Email"].Replace("'", "''")%',
                                '%cliente["Telefono"].Replace("'", "''")%',
                                '%cliente["Direccion"].Replace("'", "''")%',
                                '%cliente["FechaUltimaActualizacion"]%',
                                GETDATE()
                              )"
                    En caso de error: Continuar
                
                Acción: Si
                    Condición: %ERRORLEVEL% = 0
                    Entonces:
                        Acción: Incrementar variable
                            Variable: registrosSincronizados
                            Incremento: 1
                    Si no:
                        Acción: Incrementar variable
                            Variable: registrosConflicto
                            Incremento: 1
                        Acción: Agregar a variable
                            Variable: logSync
                            Valor a agregar: "ERROR: No se pudo insertar el cliente ID=%cliente["ClienteID"]%\n"

# 3. Sincronización de datos de Productos (ERP -> NASTAT)
Acción: Agregar a variable
    Variable: logSync
    Valor a agregar: "Iniciando sincronización de Productos desde ERP...\n"

# Obtener productos actualizados en ERP
Acción: Ejecutar consulta SQL
    Conexión: conexionERP
    Consulta: "SELECT ProductoID, Codigo, Nombre, Descripcion, Precio, Stock, FechaActualizacion FROM Productos WHERE FechaActualizacion > DATEADD(day, -1, GETDATE())"
    Asignar resultado a variable: productosERP

Acción: Agregar a variable
    Variable: logSync
    Valor a agregar: "Se encontraron %productosERP.RowCount% productos actualiz