# https://hub.docker.com/_/node
FROM node:lts-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install --only=production

RUN npm install -g typescript pm2

COPY . .

EXPOSE 3000/tcp

CMD ["npm", "start"]
