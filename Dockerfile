# syntax=docker/dockerfile:1

FROM node:16.10.0-buster

ARG BUILD_TOKEN=""
ENV NODE_ENV=production
ENV TOKEN=${BUILD_TOKEN}

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

RUN apt-get update -y
RUN apt-get install ffmpeg -y

COPY . .

CMD npm start
