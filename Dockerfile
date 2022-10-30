FROM node:16.14.2


WORKDIR /app

COPY package*.json ./
ENTRYPOINT npm install

COPY . .

CMD ["npm", "run", "dev"]
