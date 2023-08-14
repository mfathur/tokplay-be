FROM node:lts-alpine3.18

COPY src www/src
COPY package*.json www/

RUN cd /www; npm install

WORKDIR /www

ENV NODE_ENV=production

ENV PORT=80

EXPOSE 80

CMD ["npm", "start"]
