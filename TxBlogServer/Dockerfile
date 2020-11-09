FROM node:10
MAINTAINER Gabriele Käser gabriele.kaeser@gmail.com
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080

CMD ["node", "server.js"]
