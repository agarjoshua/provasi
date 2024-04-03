FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install @vue/cli@4.5.13 -g
RUN npm i @vue/cli-service

COPY package.json .
COPY package-lock.json .
RUN npm install

CMD ["npm", "run", "serve"]
