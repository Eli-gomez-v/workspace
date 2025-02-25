# Practica_1

- Introducción
AWS Lambda es un servicio que me permite ejecutar código sin tener que aprovisionar o gestionar servidores.
-Puedo ejecutar el código para prácticamente cualquier tipo de aplicación o servicio backend, todo con una administración cero.

## En este ejercicio se me pide crear una función Lambda en Python, la probarás con un evento personalizado y revisarás los logs generados en CloudWatch.

1. Crear una Función Lambda en Python
Paso 1: Accede al Servicio Lambda

Inicia sesión en tu consola de AWS.

En la barra de búsqueda superior, escribe "Lambda" y selecciona el servicio Lambda de la lista.

Paso 2: Comenzar la Creación de la Función

Haz clic en el botón "Create function" (Crear función).

Paso 3: Configurar los Detalles Básicos

Asegúrate de que la opción "Author from scratch" (Crear desde cero) esté seleccionada.

Configura los siguientes campos:

Function name (Nombre de la función): myfunction

Runtime (Tiempo de ejecución): Selecciona la última versión disponible de Python (por ejemplo, Python 3.9).

Paso 4: Configurar el Rol de Ejecución

Despliega la sección "Change default execution role" (Cambiar rol de ejecución predeterminado).

Selecciona "Use an existing role" (Usar un rol existente).

En el campo "Existing role", elige LabRole.

>Nota: Si no ves LabRole en la lista, asegúrate de que el rol está creado y tiene los permisos necesarios para ejecutar funciones Lambda y acceder a CloudWatch.

![AWS Lambda](image1.png)

Paso 5: Crear la Función

Haz clic en "Create function" (Crear función). AWS creará la función y te dirigirá a la página de configuración de la función.

2. Agregar el Código a la Función Lambda
Paso 1: Navegar a la Sección de Código

En la página de configuración de tu función, ve a la pestaña "Code" (Código).

Paso 2: Seleccionar el Archivo de Código

Bajo "Code source" (Fuente de código), debería aparecer un archivo llamado lambda_function.py.

Haz clic en este archivo para abrir el editor de código integrado.

Paso 3: Reemplazar el Código de Ejemplo

Elimina el código predeterminado que aparece en el editor.

Copia y pega el siguiente código en el editor:

```python
import json

def lambda_handler(event, context):
    first_name = event.get('first_name', 'John')
    last_name = event.get('last_name', 'Doe')
    message = f'Hello, {first_name} {last_name}!'
    print(message)
    return {
        'statusCode': 200,
        'body': json.dumps({'message': message})
    }
```
![AWS Lambda](image3.png)

Descripción del Código:

Importación de Módulos:

Se importa el módulo json para manejar datos en formato JSON.

Función lambda_handler:

Recibe dos parámetros: event y context.

Obtiene los valores de first_name y last_name del evento. Si no se proporcionan, utiliza valores predeterminados ('John' y 'Doe').

Construye un mensaje de saludo personalizado.

Imprime el mensaje (esto aparecerá en los logs de CloudWatch).

Retorna un diccionario con el código de estado HTTP y el cuerpo en formato JSON que incluye el mensaje.

Paso 4: Implementar el Código

Una vez pegado el código, haz clic en "Deploy" (Implementar) en la parte superior derecha del editor de código. Esto guardará y desplegará el código en tu función Lambda.

3. Crear un Evento de Prueba y Ejecutar la Función Lambda
Paso 1: Crear un Evento de Prueba

En la parte superior de la consola Lambda, haz clic en el botón "Test" (Probar).

Se abrirá un menú desplegable. Selecciona "Configure test events" (Configurar eventos de prueba).

En la ventana emergente, selecciona "Create new test event" (Crear nuevo evento de prueba).

Paso 2: Configurar el Evento de Prueba

Event name (Nombre del evento): Escribe mytest.

Deja el selector de "Template" (Plantilla) en "Hello World" o cualquiera que esté seleccionada por defecto.

En la sección "Event JSON", reemplaza el contenido existente con el siguiente JSON:

```json
{
  "first_name": "Tu Nombre Aquí",
  "last_name": "Tu Apellido Aquí"
}
```

Personaliza el JSON:

Reemplaza "Tu Nombre Aquí" y "Tu Apellido Aquí" con tu nombre y apellido reales.

Paso 3: Formatear y Guardar el Evento

Haz clic en "Format JSON" para asegurarte de que el JSON está bien formateado.

Haz clic en "Create" (Crear) para guardar el evento de prueba.

Paso 4: Ejecutar la Función con el Evento de Prueba

Con el evento mytest seleccionado, haz clic nuevamente en "Test".

La función Lambda se ejecutará utilizando los datos proporcionados en el evento de prueba.

Paso 5: Revisar los Resultados de la Ejecución

Después de ejecutar la función, se mostrará una sección con los resultados de la ejecución.

Haz clic en "Details" (Detalles) para expandir y revisar información adicional.

Información Clave a Revisar:

Summary (Resumen): Tiempo de ejecución, memoria usada, etc.

Logs (Registros): Salida que has impreso en el código (print(message)).

Response (Respuesta): El objeto retornado por tu función Lambda.

4. Verificar los Logs en CloudWatch
Paso 1: Acceder a la Pestaña de Monitoreo

En la consola Lambda, ve a la pestaña "Monitor" (Monitorear) de tu función.

Paso 2: Ir a los Logs de CloudWatch

Dentro de la pestaña de monitoreo, haz clic en el botón "View logs in CloudWatch" (Ver logs en CloudWatch).

Paso 3: Navegar a los Logs Recientes

Serás redirigido al servicio CloudWatch, directamente a los Log groups (Grupos de logs) correspondientes a tu función Lambda.

Haz clic en el Log group que corresponde a tu función, generalmente con un nombre como /aws/lambda/myfunction.

Paso 4: Seleccionar el Log Stream Más Reciente

Dentro del log group, verás una lista de Log streams (Flujos de logs). Estos están ordenados por fecha y hora.

Haz clic en el log stream más reciente para ver los logs de la última ejecución.

Paso 5: Revisar los Logs

Dentro del log stream, encontrarás entradas que muestran:

La solicitud y respuesta de tu función.

Los mensajes impresos con print(), incluyendo el saludo personalizado.

Información sobre la duración de la ejecución y el uso de memoria.
Status: Succeeded
Test Event Name: mytest

```json
Response:
{
  "message": "Hello Eli gomez! Keep being awesome!"
}
```

![AWS Lambda](image2.png)

```bash
Function Logs:
START RequestId: eccadee4-2a37-4376-b7ce-e6157c4fe91a Version: $LATEST
Hello Eli gomez! Keep being awesome!
END RequestId: eccadee4-2a37-4376-b7ce-e6157c4fe91a
REPORT RequestId: eccadee4-2a37-4376-b7ce-e6157c4fe91a	Duration: 1.42 ms	Billed Duration: 2 ms	Memory Size: 128 MB	Max Memory Used: 31 MB

Request ID: eccadee4-2a37-4376-b7ce-e6157c4fe91a
```

Resumen de Actividades Realizadas
Creación de la Función Lambda:

Se creó una función Lambda llamada myfunction utilizando Python como runtime.

Se configuró el rol de ejecución para permitir a la función interactuar con otros servicios de AWS, como CloudWatch.

Implementación del Código:

Se reemplazó el código de ejemplo con un script personalizado que genera un saludo utilizando datos proporcionados en el evento.

Se desplegó el código en la función Lambda.

Configuración y Ejecución de un Evento de Prueba:

Se creó un evento de prueba llamado mytest con datos personalizados (nombre y apellido).

La función Lambda se ejecutó utilizando este evento, generando una respuesta y logs.

Revisión de Logs en CloudWatch:

Se accedió a CloudWatch desde la consola de Lambda.

Se localizaron y revisaron los logs correspondientes a la última ejecución de la función.

Se verificó que los logs capturaron correctamente la salida esperada.

Análisis de Resultados
Ejecución Exitosa: La función Lambda se ejecutó correctamente, procesando los datos proporcionados y retornando una respuesta adecuada.

Logs Capturados: CloudWatch registró todos los eventos relevantes, incluyendo los mensajes impresos y la información de ejecución.

Integración de Servicios: El ejercicio demostró cómo Lambda y CloudWatch trabajan juntos para proporcionar una solución sin servidor con capacidades de monitoreo integradas.

Conclusiones
Simplicidad y Eficiencia: AWS Lambda permite ejecutar código en la nube sin preocuparse por la infraestructura, facilitando el desarrollo y despliegue de aplicaciones.

Monitoreo Efectivo: CloudWatch proporciona herramientas esenciales para monitorear y depurar funciones Lambda, asegurando que los desarrolladores puedan rastrear y resolver problemas rápidamente.

Personalización Mediante Eventos: La capacidad de probar funciones Lambda con eventos personalizados permite simular diferentes escenarios y asegurar que las funciones se comporten como se espera.