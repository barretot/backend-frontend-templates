FROM node:22.11

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . /app

# Executa o build e depois inicia o servidor
CMD ["sh", "-c", "npm run build && npm start"]
