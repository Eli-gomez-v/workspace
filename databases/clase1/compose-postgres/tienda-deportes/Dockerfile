FROM node:18  # O la versión de Node.js que prefieras

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]  # Reemplaza "start" con el comando para iniciar tu aplicación