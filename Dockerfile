# Usa una imagen de Node.js como base
FROM node:18.15.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación en el contenedor
COPY package*.json ./
COPY . .

# Instala las dependencias de la aplicación
RUN npm install

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Inicia la aplicación
CMD [ "node", "server.js" ]