
FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./app ./

RUN apk add g++ make py3-pip pcsc-lite-dev pcsc-lite-libs pcsc-lite

RUN npm install --location=global npm@8.12.1
RUN npm install

CMD ["npm", "run", "dev"]
