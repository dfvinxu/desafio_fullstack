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
ENV MG_PASSWORD="6JAdnOzzBG0UnoyU"
ENV DB_HOST="horton.db.elephantsql.com"
ENV DB_DATABASE="mgbpdkuj"
ENV DB_USER="mgbpdkuj"
ENV DB_PASSWORD="eWB5RSUvGTg02c12AvdwjuV4YIRYhRHa"
ENV JWT_SECRET="qQa23Afda12rSfavbn668"
ENV CLIENT_ID="747043582960-eq8dfr8o6j3elfra5d77e9k8tiff0njb.apps.googleusercontent.com"
ENV CLIENT_SECRET="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"

# Expone el puerto en el que se ejecutará el servidor
EXPOSE $PORT

# Comando para iniciar el servidor
CMD ["npm", "start"]
