FROM node:lts-alpine3.14

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . .
