FROM node:lts-fermium

COPY src www/src
COPY package*.json www/

RUN cd /www; npm install

WORKDIR /www

ENV PORT=3000

EXPOSE 3000
