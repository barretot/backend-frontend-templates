![Generic badge](https://img.shields.io/badge/NodeJS-20-green)
![Generic badge](https://img.shields.io/badge/fastify-4.24.3-green)

# api

## Description

API Fix<br>

[Postman collection](docs/)


### Routes:
 - [hello](docs/)

## Tech Stack
 - [NodeJS](https://nodejs.org/api/v8.html)
 - [Fastify](https://www.fastify.io/docs/latest/)

## Local variables
```
PORT=3001
SERVICE=
```

## Install dependencies
```
npm ci
```

## Run Application
```
npm run dev
```

## Running with Docker
```
docker build -t  .
docker run -d -p 3001:3001
```

## Run test
```
npm run test:all
```

## Pre-check to commit / push
```
npm run pretest
```
