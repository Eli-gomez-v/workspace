### Ejercicio 1: Librerías compartidas

En este ejercicio, crearás un proyecto de Node.js y utilizarás npm para instalar una biblioteca de terceros. A continuación, utilizarás la biblioteca para realizar una tarea simple y aprenderás a gestionar las dependencias de tu proyecto.

1. **Configuración inicial**:

   - Crea un directorio para tu proyecto y ejecuta `npm init` para crear un archivo `package.json`. Completa la información requerida.
   - Agrega un archivo `.gitignore` para evitar que los módulos de Node.js y los archivos generados se incluyan en el repositorio.

2. **Instalación de paquetes**:

   - Elige una biblioteca de npm que te interese utilizar en tu proyecto (por ejemplo, lodash, axios, moment.js) se recomienda el enlace https://github.com/sindresorhus/awesome-nodejs o hacer búsquedas en https://www.npmjs.com/.
   - Instala la biblioteca en tu proyecto usando `npm install nombre-de-la-biblioteca`.
   - Verifica que la biblioteca se agregó correctamente a tu archivo `package.json`.

3. **Uso de la biblioteca**:

   - Crea un archivo JavaScript en tu proyecto y utiliza la biblioteca instalada para realizar una tarea simple. Por ejemplo, si instalaste Lodash, puedes utilizar una función como `_.sortBy()` para ordenar un array de objetos.
   - En caso de instalar algo mas complejo o tener dudas con alguna biblioteca, se recomienda leer la documentación oficial de la misma o preguntar en clase.

4. **Gestión de dependencias**:

   - Agrega otra biblioteca de npm a tu proyecto y realiza una tarea que involucre el uso de ambas bibliotecas. Por ejemplo, puedes utilizar Axios para hacer una solicitud HTTP y Lodash para manipular los datos de la respuesta.

5. **Configuración de scripts personalizados**:

   - Abre tu archivo `package.json` y agrega un script personalizado. Por ejemplo, crea un script llamado "start" que ejecute tu archivo JavaScript principal.
   - Ejecuta el script usando `npm run nombre-del-script` para asegurarte de que funcione correctamente.

6. **Actualización de bibliotecas**:

   - Comprueba si hay actualizaciones disponibles para las bibliotecas que has instalado en tu proyecto utilizando `npm outdated`.
   - Actualiza una de las bibliotecas a la última versión y asegúrate de que tu proyecto siga funcionando correctamente.

7. **Eliminación de bibliotecas**:

   - Desinstala una de las bibliotecas que has agregado previamente usando `npm uninstall nombre-de-la-biblioteca`.
   - Asegúrate de que tu proyecto todavía funcione sin esa biblioteca y que el archivo `package.json` refleje la eliminación.

8. **(Opcional)Publicación en GitHub**:

   - Crea un repositorio en GitHub para tu proyecto y sigue los pasos para agregar tu proyecto al control de versiones.
   - Asegúrate de que tu archivo `.gitignore` excluya los archivos y directorios innecesarios.

9. **Colaboración con otros desarrolladores**:

   - Invita a un compañero de clase a colaborar en tu proyecto en GitHub.
   - Haz cambios en el proyecto y utiliza pull requests para revisar y fusionar los cambios.

10. **Documentación del proyecto**:

- Crea un archivo `README.md` que describa tu proyecto, sus dependencias y cómo ejecutarlo.
- Considera utilizar herramientas como JSDoc para documentar tu código.

11. **(Opcional)Publicación en npm**:

- Crea una cuenta de npm y sigue los pasos para publicar tu proyecto.
- Asegúrate de que tu archivo `.gitignore` excluya los archivos y directorios innecesarios.
