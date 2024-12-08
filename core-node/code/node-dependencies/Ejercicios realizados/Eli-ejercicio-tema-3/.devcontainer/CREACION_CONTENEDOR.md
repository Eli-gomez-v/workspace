### Extras - Contenedores

Revisar `.devcontainer/devcontainer.json`

Este contenedor proporciona todo el entorno necesario para que pueda usar este módulo de entrenamiento sin tener que instalar un IDE o Node.js. No es necesario saber nada sobre el contenedor para completar este módulo de entrenamiento. Pero si te interesa puedes buscar información y hacer el ejercicio en casa usando contenedores, el ejercicio podrá presentarse como ejercicio voluntario.

### Asegurarse de tener los permisos adecuados en el repositorio. Si no eres el propietario es posible que necesites solicitar permisos para hacer push en la rama master.

### Verifica la Protección de Ramas: Si la rama master/main está protegida debes ir a tu repositorio de GitHub y navegar a "Settings">"Branches" y verifica si hay reglas de protección para master/main:
    ## Crea un Pull Request (la rama si está protegida) y crea una nueva rama en donde realizar los cambios.
    ## Luego abre una pull request para que tus cambios sean revisados e integrados en la rama master/main.
1.
### En tu terminal y/o en directo en VS Code
-(TERMINAL) code .
-(VS CODE) npm init -y ==> crea file package.json predeterminado.
2.
### Crea y configura .devcontiner/devcontainer.json
- Instala la extensión en la sección de la misma en VS Code: busca "Remote-Containers".
- Crea la estructura de directorios para el contenedor: (Ver y copiar devcontainer.json).
3.
### Configura el script en package.json
- Abre y edita package.json y agrega el contenido en la sección "scripts": (ver contenido en el archivo).
4.
### Crea un archivo index.js
- En la raíz del proyecto y agreaga un console que devuelva un mensaje (ver contenido en el archivo).
5.
### Usar el entorno de desarrollo en contenedores
- Reabrir el proyecto en el contenedor: 
    - Presiona F1 y escribe/selecciona dentro de la pestaña de la paleta de comandos de VS Code "remote-Containers: Reopen in Container".
6.
### Ejecuta el proyecto
- En el terminal integrado (seleccionar en la pestaña Terminal) escribe "npm start" y debería verse el mensaje que has escrito dentro de tu console.log.
7.
### Resumen
- Ahora has creado un proyecto Node.js, configurado yn entorno de desarrollo con contenedores y añadido scripts básicos en package.json.
    - Con ello puedes desarrollar y ejecutar tu proyecto en un entorno aislado sin necesidad de instalar Node.js localmente.

    ## Crear una nueva rama:
    - git checkout -b my-feature-branch
    -git add . y commit -m "describe-tus-cambios"
    -git push origin my-feature-branch (empuja la nueva rama al repositorio remoto).
    ## Debes ir a tu repo GiHub y abrir una pull request desde tu nueva rama hacia la rama master.

    ## Volver a la rama principal:
    - git branch -r (listar todas las ramas remotas)
    - git checkout master ó main (depende como se llame tu rama principal)
    - git pull origin master/main (actualiza la rama principal)

### Cómo salir del contenedor remoto y volver al repositorio

Para salir del contenedor remoto y volver a tu repositorio local, sigue estos pasos:

1. Abre la paleta de comandos en Visual Studio Code con `Ctrl+Shift+P`.
2. Escribe `Remote-Containers: Reopen Folder Locally` y selecciona la opción.
3. Visual Studio Code se reiniciará y abrirá tu repositorio local.

### Cómo volver al contenedor remoto

Para volver al contenedor remoto, sigue estos pasos:

1. Abre la paleta de comandos en Visual Studio Code con `Ctrl+Shift+P`.
2. Escribe `Remote-Containers: Reopen in Container` y selecciona la opción.
3. Visual Studio Code se reiniciará y abrirá el contenedor remoto.
