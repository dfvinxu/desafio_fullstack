# Define la imagen base adecuada para tu aplicación (por ejemplo, node:14)
FROM node:18.16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el contenido del directorio "server" en el contenedor
COPY package*.json ./

# Instala las dependencias del servidor
RUN npm install

# Copia el código fuente del servidor a la imagen del contenedor
COPY . .

# Establece variables de entorno necesarias
ENV PORT=3000

# Expone el puerto en el que se ejecutará el servidor
EXPOSE $PORT

# Comando para iniciar el servidor
CMD ["npm", "start"]
