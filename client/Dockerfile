# Define la imagen base adecuada para tu aplicación de frontend (por ejemplo, node:14)
FROM node:18.16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del cliente a la imagen del contenedor
COPY package*.json ./

# Instala las dependencias del cliente
RUN npm install

# Copia el código fuente del cliente a la imagen del contenedor
COPY . .

# Establece una variable de entorno para el puerto del cliente
ENV PORT=5173

# Expone el puerto en el que se ejecutará el cliente
EXPOSE $PORT

# Comando para iniciar el entorno de desarrollo del cliente
CMD ["sh", "-c", "npm run dev -- --port $PORT --host 0.0.0.0"]
