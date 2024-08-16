FROM node:20.9.0

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . /app

CMD ["npm", "start"]
