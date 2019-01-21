FROM node:8

WORKDIR /app

COPY package*.json /app/

RUN npm install --global typescript ts-node
RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]