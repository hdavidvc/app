FROM node:16.14.2


WORKDIR /app

COPY package*.json ./
RUN npm i express nodemon pg

COPY . .

CMD ["npm", "run", "dev"]
