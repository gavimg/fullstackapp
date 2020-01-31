FROM node:lts-alpine

WORKDIR /usr/app

COPY . .

RUN npm install --save

EXPOSE 3000

CMD ["node", "app.js"]
