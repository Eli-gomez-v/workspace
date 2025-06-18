# Flujo 1: Proceso de Carga de Datos NASTAT

## Descripción
Este flujo automatiza el proceso de extracción, transformación y carga de datos para el sistema NASTAT. Incluye la conexión a diversas fuentes, procesamiento de archivos y actualización de la base de datos.

## Implementación en Power Automate Desktop

```
# Inicialización de variables
Acción: Inicializar variable
    Nombre: rutaOrigen
    Tipo: Texto
    Valor: "C:\Datos\NASTAT\origen"

Acción: Inicializar variable
    Nombre: rutaDestino 
    Tipo: Texto
    Valor: "C:\Datos\NASTAT\procesados"

Acción: Inicializar variable
    Nombre: fechaActual
    Tipo: Texto
    Valor: %DateTime.Now.ToString("yyyyMMdd")%

Acción: Inicializar variable
    Nombre: logErrores
    Tipo: Texto
    Valor: ""

Acción: Inicializar variable
    Nombre: contadorArchivos
    Tipo: Número
    Valor: 0

# Verificar existencia de carpetas
Acción: Si carpeta existe
    Carpeta: "%rutaOrigen%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%rutaOrigen%"

Acción: Si carpeta existe
    Carpeta: "%rutaDestino%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Crear carpeta
            Ruta de carpeta: "%rutaDestino%"

# Conexión al servidor de origen
Acción: Establecer conexión FTP
    Servidor: "ftp.datos-nastat.com"
    Puerto: 21
    Nombre de usuario: "%ftpUsuario%"
    Contraseña: "%ftpPassword%"
    Asignar salida a variable: conexionFTP

# Verificar conexión exitosa
Acción: Si
    Condición: %conexionFTP% = True
    Entonces:
        # Continuar con la descarga
    Si no:
        Acción: Agregar a variable
            Variable: logErrores
            Valor a agregar: "Error de conexión FTP: %DateTime.Now.ToString()%\n"
        Acción: Mostrar mensaje
            Mensaje: "Error al conectar con el servidor FTP. Verificar credenciales y conexión."
        Acción: Terminar flujo

# Descargar archivos nuevos
Acción: Obtener archivos de FTP
    Servidor FTP: conexionFTP
    Directorio remoto: "/datos/diarios/"
    Filtro: "*.csv"
    Asignar a variable: archivosDisponibles

Acción: Para cada
    Variable: archivo
    Matriz/Lista: archivosDisponibles
    Acciones:
        Acción: Descargar archivo desde FTP
            Servidor FTP: conexionFTP
            Ruta de archivo remoto: archivo.RutaCompleta
            Ruta de archivo local: "%rutaOrigen%\%archivo.Nombre%"
            Sobrescribir: Si
        
        Acción: Incrementar variable
            Variable: contadorArchivos
            Incremento: 1

# Procesar archivos descargados
Acción: Obtener archivos
    Carpeta: "%rutaOrigen%"
    Filtro: "*.csv"
    Incluir subcarpetas: No
    Asignar a variable: archivosLocales

Acción: Para cada
    Variable: archivoLocal
    Matriz/Lista: archivosLocales
    Acciones:
        # Verificar estructura del archivo
        Acción: Leer archivo CSV
            Archivo: archivoLocal.RutaCompleta
            Separador de columnas: ","
            Tiene encabezados: Si
            Asignar a variable: datosCSV
        
        Acción: Si
            Condición: datosCSV.ColumnCount >= 5
            Entonces:
                # Transformar datos
                Acción: Ejecutar script de PowerShell
                    Script: |
                        $datos = Import-Csv -Path '%archivoLocal.RutaCompleta%' -Delimiter ','
                        $datosFiltrados = $datos | Where-Object { ![string]::IsNullOrEmpty($_.ID) }
                        $datosFiltrados | Export-Csv -Path '%rutaDestino%\procesado_%archivoLocal.Nombre%' -NoTypeInformation -Delimiter ','
                    Esperar finalización: Si
                
                # Registrar en base de datos
                Acción: Conectar a base de datos SQL
                    Cadena de conexión: "Server=servidor-sql;Database=NASTAT_DB;User Id=usuario;Password=contraseña;"
                    Asignar conexión a variable: conexionSQL
                
                Acción: Ejecutar consulta SQL
                    Conexión: conexionSQL
                    Consulta: "INSERT INTO Importaciones (NombreArchivo, FechaImportacion, NumeroRegistros) VALUES ('%archivoLocal.Nombre%', GETDATE(), %datosCSV.RowCount%)"
                
                Acción: Mover archivo
                    Origen: archivoLocal.RutaCompleta
                    Destino: "%rutaDestino%\%fechaActual%_%archivoLocal.Nombre%"
                    Sobrescribir si existe: Si
            Si no:
                Acción: Agregar a variable
                    Variable: logErrores
                    Valor a agregar: "Archivo con formato incorrecto: %archivoLocal.Nombre% - %DateTime.Now.ToString()%\n"
                
                Acción: Mover archivo
                    Origen: archivoLocal.RutaCompleta
                    Destino: "%rutaDestino%\error_%archivoLocal.Nombre%"
                    Sobrescribir si existe: Si

# Cerrar conexiones
Acción: Cerrar conexión FTP
    Servidor FTP: conexionFTP

Acción: Cerrar conexión SQL
    Conexión: conexionSQL

# Generar informe de ejecución
Acción: Escribir archivo de texto
    Archivo: "%rutaDestino%\log_%fechaActual%.txt"
    Texto: "Ejecución completada el %DateTime.Now.ToString()%\nArchivos procesados: %contadorArchivos%\nErrores:\n%logErrores%"
    Codificación: UTF-8
    Agregar al final: No

# Notificación por correo
Acción: Enviar correo electrónico (SMTP)
    Servidor: "smtp.empresa.com"
    Puerto: 25
    De: "sistema@empresa.com"
    Para: "admin@empresa.com"
    Asunto: "Informe de carga NASTAT - %fechaActual%"
    Cuerpo: "Se ha completado el proceso de carga de datos para NASTAT.\nArchivos procesados: %contadorArchivos%\n\nConsulte el archivo de log para más detalles."
```