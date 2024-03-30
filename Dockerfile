FROM node:18-alpine

WORKDIR /infinite-carousel

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]