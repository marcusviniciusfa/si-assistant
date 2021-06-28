# https://hub.docker.com/_/node
FROM node:lts-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install --only=production
RUN npm install -g typescript pm2

ENV PM2_PUBLIC_KEY 22qs7zc5cxvay6h
ENV PM2_SECRET_KEY eh9ova6g50wh1b3

COPY . .

EXPOSE 3000/tcp

CMD ["npm", "start"]
