FROM node:latest
MAINTAINER mpppk

RUN mkdir /tmp/work
WORKDIR /tmp/work
COPY package.json /tmp/work
RUN npm install
COPY . /tmp/work
EXPOSE 8080
CMD npm run start -- --host=0.0.0.0
