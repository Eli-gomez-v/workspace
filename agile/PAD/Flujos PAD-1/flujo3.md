# Flujo 3: Actualización de Base de Datos NASTAT

## Descripción
Este flujo automatiza el proceso de actualización de la base de datos NASTAT con los nuevos registros procesados. Incluye validación de datos, gestión de errores y mantenimiento de registros históricos.

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
    Valor: "PasswordSeguro123!" # En producción utilizar variables de entorno seguras

Acción: Inicializar variable
    Nombre: carpetaDatos
    Tipo: Texto
    Valor: "C:\Datos\NASTAT\Procesados"

Acción: Inicializar variable
    Nombre: carpetaHistorico
    Tipo: Texto
    Valor: "C:\Datos\NASTAT\Historico"

Acción: Inicializar variable
    Nombre: fechaEjecucion
    Tipo: Texto
    Valor: %DateTime.Now.ToString("yyyyMMdd_HHmmss")%

Acción: Inicializar variable
    Nombre: logEjecucion
    Tipo: Texto
    Valor: "Inicio de actualización: %DateTime.Now.ToString()%\n"

Acción: Inicializar variable
    Nombre: totalRegistrosInsertados
    Tipo: Número
    Valor: 0

Acción: Inicializar variable
    Nombre: totalRegistrosActualizados
    Tipo: Número
    Valor: 0

Acción: Inicializar variable
    Nombre: totalRegistrosError
    Tipo: Número
    Valor: 0

# Verificar existencia de carpetas
Acción: Si carpeta existe
    Carpeta: "%carpetaDatos%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaDatos%"
        Acción: Agregar a variable
            Variable: logEjecucion
            Valor a agregar: "Se creó la carpeta de datos procesados\n"

Acción: Si carpeta existe
    Carpeta: "%carpetaHistorico%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%carpetaHistorico%"
        Acción: Agregar a variable
            Variable: logEjecucion
            Valor a agregar: "Se creó la carpeta de históricos\n"

# Establecer conexión a la base de datos
Acción: Conectar a base de datos SQL
    Cadena de conexión: "Server=%servidorSQL%;Database=%baseDatos%;User Id=%usuarioSQL%;Password=%passwordSQL%;"
    Asignar conexión a variable: conexionSQL

Acción: Si
    Condición: %conexionSQL% is not null
    Entonces:
        Acción: Agregar a variable
            Variable: logEjecucion
            Valor a agregar: "Conexión a la base de datos establecida correctamente\n"
    Si no:
        Acción: Agregar a variable
            Variable: logEjecucion
            Valor a agregar: "ERROR: No se pudo establecer conexión con la base de datos\n"
        Acción: Mostrar mensaje
            Mensaje: "Error al conectar con la base de datos. Verifique las credenciales y que el servidor esté disponible."
        Acción: Terminar flujo

# Crear tabla de control para seguimiento de registros
Acción: Crear tabla
    Columnas: ["Archivo", "Registros_Totales", "Registros_Insertados", "Registros_Actualizados", "Registros_Error"]
    Asignar salida a variable: tablaControl

# Obtener archivos a procesar
Acción: Obtener archivos
    Carpeta: "%carpetaDatos%"
    Filtro: "*.csv"
    Incluir subcarpetas: No
    Asignar a variable: archivosCSV

Acción: Si
    Condición: %archivosCSV.Count% > 0
    Entonces:
        Acción: Agregar a variable
            Variable: logEjecucion
            Valor a agregar: "Se encontraron %archivosCSV.Count% archivos para procesar\n"
    Si no:
        Acción: Agregar a variable
            Variable: logEjecucion
            Valor a agregar: "No se encontraron archivos para procesar\n"
        Acción: Mostrar mensaje
            Mensaje: "No hay archivos CSV para procesar"
        Acción: Ir a etiqueta
            Etiqueta: FinProceso

# Procesamiento por cada archivo
Acción: Para cada
    Variable: archivoCSV
    Matriz/Lista: archivosCSV
    Acciones:
        # Inicializar contadores para este archivo
        Acción: Inicializar variable
            Nombre: registrosTotales
            Tipo: Número
            Valor: 0
        
        Acción: Inicializar variable
            Nombre: registrosInsertados
            Tipo: Número
            Valor: 0
        
        Acción: Inicializar variable
            Nombre: registrosActualizados
            Tipo: Número
            Valor: 0
        
        Acción: Inicializar variable
            Nombre: registrosError
            Tipo: Número
            Valor: 0
        
        # Leer archivo CSV
        Acción: Leer archivo CSV
            Archivo: archivoCSV.RutaCompleta
            Separador de columnas: ","
            Tiene encabezados: Si
            Asignar a variable: datosCSV
        
        Acción: Asignar variable
            Variable: registrosTotales
            Valor: %datosCSV.RowCount%
        
        # Procesar cada fila del CSV
        Acción: Para cada
            Variable: fila
            Matriz/Lista: datosCSV.Rows
            Acciones:
                # Verificar si el registro ya existe en la base de datos
                Acción: Ejecutar consulta SQL
                    Conexión: conexionSQL
                    Consulta: "SELECT COUNT(*) AS Existe FROM Registros WHERE ID = '%fila["ID"]%'"
                    Asignar resultado a variable: resultadoExiste
                
                Acción: Si
                    Condición: %resultadoExiste[0]["Existe"]% > 0
                    Entonces:
                        # Actualizar registro existente
                        Acción: Ejecutar script de PowerShell
                            Script: |
                                try {
                                    $query = "UPDATE Registros SET 
                                        Nombre = '%fila["Nombre"].Replace("'", "''")%',
                                        Valor = '%fila["Valor"].Replace("'", "''")%',
                                        Fecha = '%fila["Fecha"].Replace("'", "''")%',
                                        Estado = '%fila["Estado"].Replace("'", "''")%',
                                        UltimaActualizacion = GETDATE()
                                        WHERE ID = '%fila["ID"]%'"
                                    
                                    $conn = New-Object System.Data.SqlClient.SqlConnection
                                    $conn.ConnectionString = "Server=%servidorSQL%;Database=%baseDatos%;User Id=%usuarioSQL%;Password=%passwordSQL%;"
                                    $conn.Open()
                                    
                                    $cmd = New-Object System.Data.SqlClient.SqlCommand($query, $conn)
                                    $rowsAffected = $cmd.ExecuteNonQuery()
                                    $conn.Close()
                                    
                                    if($rowsAffected -gt 0) {
                                        Write-Output "SUCCESS"
                                    } else {
                                        Write-Output "ERROR: No se actualizó ningún registro"
                                    }
                                } catch {
                                    Write-Output "ERROR: $($_.Exception.Message)"
                                }
                            Asignar salida a variable: resultadoActualizacion
                        
                        Acción: Si
                            Condición: %resultadoActualizacion.StartsWith("SUCCESS")%
                            Entonces:
                                Acción: Incrementar variable
                                    Variable: registrosActualizados
                                    Incremento: 1
                                Acción: Incrementar variable
                                    Variable: totalRegistrosActualizados
                                    Incremento: 1
                            Si no:
                                Acción: Incrementar variable
                                    Variable: registrosError
                                    Incremento: 1
                                Acción: Incrementar variable
                                    Variable: totalRegistrosError
                                    Incremento: 1
                                Acción: Agregar a variable
                                    Variable: logEjecucion
                                    Valor a agregar: "Error en actualización: ID=%fila["ID"]%, Error=%resultadoActualizacion%\n"
                    Si no:
                        # Insertar nuevo registro
                        Acción: Ejecutar script de PowerShell
                            Script: |
                                try {
                                    $query = "INSERT INTO Registros (ID, Nombre, Valor, Fecha, Estado, FechaCreacion, UltimaActualizacion) 
                                        VALUES (
                                            '%fila["ID"]%',
                                            '%fila["Nombre"].Replace("'", "''")%',
                                            '%fila["Valor"].Replace("'", "''")%',
                                            '%fila["Fecha"].Replace("'", "''")%',
                                            '%fila["Estado"].Replace("'", "''")%',
                                            GETDATE(),
                                            GETDATE()
                                        )"
                                    
                                    $conn = New-Object System.Data.SqlClient.SqlConnection
                                    $conn.