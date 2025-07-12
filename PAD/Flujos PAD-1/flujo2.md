# Flujo 2: Filtrado y Procesamiento de Datos

## Descripción
Este flujo automatiza el proceso de filtrado y procesamiento de datos según los criterios establecidos. Incluye la lectura de archivos Excel, aplicación de filtros y generación de informes.

## Implementación en Power Automate Desktop

```
# Inicialización de variables
Acción: Inicializar variable
    Nombre: rutaArchivos
    Tipo: Texto
    Valor: "C:\Datos\NASTAT\Informes"

Acción: Inicializar variable
    Nombre: archivoMaestro
    Tipo: Texto
    Valor: "C:\Datos\NASTAT\Maestros\Filtros.xlsx"

Acción: Inicializar variable
    Nombre: fechaInforme
    Tipo: Texto
    Valor: %DateTime.Now.ToString("yyyy-MM-dd")%

Acción: Inicializar variable
    Nombre: numRegistrosFiltrados
    Tipo: Número
    Valor: 0

# Verificar existencia del archivo maestro
Acción: Si archivo existe
    Archivo: "%archivoMaestro%"
    Si existe:
        # Continuar
    Si no existe:
        Acción: Mostrar mensaje
            Mensaje: "Error: No se encuentra el archivo maestro de filtros"
        Acción: Terminar flujo

# Leer archivo de filtros
Acción: Leer archivo Excel
    Archivo: "%archivoMaestro%"
    Hoja de trabajo: "Filtros"
    Leer como tabla: Si
    Asignar salida a variable: tablaFiltros

# Verificar que hay filtros configurados
Acción: Si
    Condición: %tablaFiltros.RowCount% > 0
    Entonces:
        # Continuar
    Si no:
        Acción: Mostrar mensaje
            Mensaje: "No hay filtros configurados en el archivo maestro"
        Acción: Terminar flujo

# Obtener lista de archivos a procesar
Acción: Obtener archivos
    Carpeta: "%rutaArchivos%"
    Filtro: "*.xlsx"
    Incluir subcarpetas: No
    Asignar a variable: archivosExcel

# Procesar cada archivo
Acción: Para cada
    Variable: archivoExcel
    Matriz/Lista: archivosExcel
    Acciones:
        # Abrir archivo
        Acción: Leer archivo Excel
            Archivo: archivoExcel.RutaCompleta
            Hoja de trabajo: "Datos"
            Leer como tabla: Si
            Asignar salida a variable: tablaDatos
        
        # Inicializar tabla para resultados filtrados
        Acción: Crear tabla
            Columnas: %tablaDatos.Columns%
            Asignar salida a variable: tablaResultados

        # Aplicar filtros
        Acción: Para cada
            Variable: fila
            Matriz/Lista: tablaDatos.Rows
            Acciones:
                Acción: Inicializar variable
                    Nombre: cumpleFiltros
                    Tipo: Booleano
                    Valor: True
                
                # Comprobar cada condición de filtro
                Acción: Para cada
                    Variable: filtro
                    Matriz/Lista: tablaFiltros.Rows
                    Acciones:
                        Acción: Si
                            Condición: %filtro["Activo"]% = "Si"
                            Entonces:
                                Acción: Inicializar variable
                                    Nombre: valorCampo
                                    Tipo: Texto
                                    Valor: %fila[filtro["Campo"]]%
                                
                                Acción: Inicializar variable
                                    Nombre: valorFiltro
                                    Tipo: Texto
                                    Valor: %filtro["Valor"]%
                                
                                Acción: Inicializar variable
                                    Nombre: operador
                                    Tipo: Texto
                                    Valor: %filtro["Operador"]%
                                
                                # Evaluar según el tipo de operador
                                Acción: Si
                                    Condición: %operador% = "igual"
                                    Entonces:
                                        Acción: Si
                                            Condición: %valorCampo% != %valorFiltro%
                                            Entonces:
                                                Acción: Asignar variable
                                                    Variable: cumpleFiltros
                                                    Valor: False
                                Si no si
                                    Condición: %operador% = "contiene"
                                    Entonces:
                                        Acción: Si
                                            Condición: NOT %valorCampo.Contains(valorFiltro)%
                                            Entonces:
                                                Acción: Asignar variable
                                                    Variable: cumpleFiltros
                                                    Valor: False
                                Si no si
                                    Condición: %operador% = "mayor"
                                    Entonces:
                                        Acción: Si
                                            Condición: %ToNumber(valorCampo)% <= %ToNumber(valorFiltro)%
                                            Entonces:
                                                Acción: Asignar variable
                                                    Variable: cumpleFiltros
                                                    Valor: False
                                Si no si
                                    Condición: %operador% = "menor"
                                    Entonces:
                                        Acción: Si
                                            Condición: %ToNumber(valorCampo)% >= %ToNumber(valorFiltro)%
                                            Entonces:
                                                Acción: Asignar variable
                                                    Variable: cumpleFiltros
                                                    Valor: False
                                Si no:
                                    # Operador no reconocido, se considera como cumplido
                                    Acción: Mostrar mensaje
                                        Mensaje: "Advertencia: Operador desconocido en filtro: %operador%"
                
                # Si la fila cumple todos los filtros, agregarla a resultados
                Acción: Si
                    Condición: %cumpleFiltros% = True
                    Entonces:
                        Acción: Agregar fila a tabla
                            Tabla: tablaResultados
                            Fila: fila
                        
                        Acción: Incrementar variable
                            Variable: numRegistrosFiltrados
                            Incremento: 1

        # Guardar resultados en nuevo archivo
        Acción: Inicializar variable
            Nombre: nombreArchivoResultado
            Tipo: Texto
            Valor: "%rutaArchivos%\Filtrado_%fechaInforme%_%archivoExcel.NombreSinExtension%.xlsx"
        
        Acción: Escribir tabla en Excel
            Tabla: tablaResultados
            Archivo: "%nombreArchivoResultado%"
            Hoja de trabajo: "Resultados"
            Agregar encabezados: Si
            Crear si no existe: Si

# Generar informe de resumen
Acción: Crear tabla
    Columnas: ["Archivo", "Registros Originales", "Registros Filtrados", "Porcentaje"]
    Asignar salida a variable: tablaResumen

Acción: Para cada
    Variable: archivoExcel
    Matriz/Lista: archivosExcel
    Acciones:
        # Leer datos originales
        Acción: Leer archivo Excel
            Archivo: archivoExcel.RutaCompleta
            Hoja de trabajo: "Datos"
            Leer como tabla: Si
            Asignar salida a variable: tablaDatosOriginales
        
        # Leer datos filtrados
        Acción: Leer archivo Excel
            Archivo: "%rutaArchivos%\Filtrado_%fechaInforme%_%archivoExcel.NombreSinExtension%.xlsx"
            Hoja de trabajo: "Resultados"
            Leer como tabla: Si
            Asignar salida a variable: tablaDatosFiltrados
        
        # Calcular porcentaje
        Acción: Inicializar variable
            Nombre: porcentaje
            Tipo: Número
            Valor: %Round((tablaDatosFiltrados.RowCount / tablaDatosOriginales.RowCount) * 100, 2)%
        
        # Agregar a resumen
        Acción: Agregar fila a tabla
            Tabla: tablaResumen
            Fila: {"Archivo": archivoExcel.Nombre, "Registros Originales": tablaDatosOriginales.RowCount, "Registros Filtrados": tablaDatosFiltrados.RowCount, "Porcentaje": porcentaje}

# Guardar informe de resumen
Acción: Escribir tabla en Excel
    Tabla: tablaResumen
    Archivo: "%rutaArchivos%\Resumen_Filtrado_%fechaInforme%.xlsx"
    Hoja de trabajo: "Resumen"
    Agregar encabezados: Si
    Crear si no existe: Si

# Notificar finalización
Acción: Enviar correo electrónico (SMTP)
    Servidor: "smtp.empresa.com"
    Puerto: 25
    De: "sistema@empresa.com"
    Para: "analistas@empresa.com"
    Asunto: "Informe de filtrado de datos NASTAT - %fechaInforme%"
    Cuerpo: "Se ha completado el proceso de filtrado de datos NASTAT.\n\nTotal de registros filtrados: %numRegistrosFiltrados%\n\nEl informe completo se encuentra en la carpeta compartida."
    Adjuntos: "%rutaArchivos%\Resumen_Filtrado_%fechaInforme%.xlsx"
```