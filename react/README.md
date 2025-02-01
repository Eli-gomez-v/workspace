# REACT

1. Al instalar las dependencias en React en global

```javascript
npx create-react-app my-app
```

- Se produce un problema con los localhost y al intentar liverarlos
      - Al final hay que desinstalarlas

```bash
npm uninstall react react-dom react-scripts
```

1. Detener Ngnix

```bash
sudo systemctl stop nginx
```

2. Deshabilitar Nginx

```bash
sudo systemctl disable nginx
```

3. Verificar que Nginx está detenido

```bash
sudo systemctl status nginx
```

4. Reiniciar la aplicación según indicaciones de tu package.json

```bash
npm run start-dev
npm run start-services
npm run stop-services
```

5. La mejor opción es crear una nueva carpeta y reiniciarla como un nuevo proyecto:

```bash
mkdir react-project
cd react-project
npm init -y
npm install react react-dom # Instalar dependencias de React
npm install --save-dev create-react-app-my-app # Herr de Desarrollo glogal
npx create-react-my-app # Crear la estrutucra del proyecto autmátiamente.
```

## Vista de package.json

```json
{
  "name": "react-project",
  "version": "1.0.0",
  "description": "A new React project",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "keywords": [],
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "create-react-app": "^5.0.0"
  }
}
```

```bash
npm start
```

## Verificar y solucionar problemas de vulnerabilidades

```bash
npm audit
npm audit fix
npm audit fix --foce
```
>NOTA: npx create-react-app my-app

Creating a new React app in /home/curso/Escritorio/workspace/my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1324 packages in 50s

267 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: my-app@0.1.0
npm ERR! Found: react@19.0.0
npm ERR! node_modules/react
npm ERR!   react@"^19.0.0" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^18.0.0" from @testing-library/react@13.4.0
npm ERR! node_modules/@testing-library/react
npm ERR!   @testing-library/react@"^13.0.0" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! 
npm ERR! For a full report see:
npm ERR! /home/curso/.npm/_logs/2025-01-23T14_38_58_736Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/curso/.npm/_logs/2025-01-23T14_38_58_736Z-debug-0.log
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0` failed: El error indica que hay un conflicto de dependencias al intentar instalar las dependencias del proyecto React. Vamos a resolver este problema utilizando la opción `--legacy-peer-deps` para permitir la instalación de dependencias con conflictos de versiones.

### Paso 1: Crear el Proyecto React con `create-react-app`

Ejecuta el siguiente comando para crear un nuevo proyecto React utilizando `create-react-app` y resolver los conflictos de dependencias:

```bash
npx create-react-app my-app --legacy-peer-deps
```

### Paso 2: Navegar al Directorio del Proyecto

Navega al directorio del proyecto recién creado:

```bash
cd my-app
```

### Paso 3: Iniciar el Proyecto React

Inicia el proyecto React:

```bash
npm start
```

Esto debería iniciar tu aplicación React en `http://localhost:3000`.

### Resumen

1. **Crear el Proyecto React con `create-react-app`**: Usa la opción `--legacy-peer-deps` para resolver conflictos de dependencias.
2. **Navegar al Directorio del Proyecto**: Cambia al directorio del proyecto recién creado.
3. **Iniciar el Proyecto React**: Usa `npm start` para iniciar el proyecto.

Al seguir estos pasos, deberías poder crear y ejecutar tu proyecto React sin problemas de dependencias.

```bash
npx create-react-app my-app --force
```
