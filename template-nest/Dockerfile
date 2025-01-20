FROM node:22.11

WORKDIR /app

COPY package.json package-lock.json* ./

COPY . /app

CMD ["sh", "-c", "npm run build && npm start:prod"]
