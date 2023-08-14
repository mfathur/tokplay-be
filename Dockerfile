# FROM node:lts-fermium

# COPY src www/src
# COPY package*.json www/

# RUN cd /www; npm install

# WORKDIR /www

# ARG NODE_ENV
# ENV NODE_ENV=production
# ENV PORT=80

# EXPOSE 80

# CMD ["npm", "start"]

FROM node:lts-fermium

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=80
ARG NODE_ENV
ENV NODE_ENV=production

EXPOSE 80

CMD [ "npm", "start" ]
