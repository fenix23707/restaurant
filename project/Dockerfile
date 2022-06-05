FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY src src

EXPOSE 2001

ENV MONGO_HOST=mongo-nodeport-svc
ENV POSTGRES_HOST=postgres
ENV RABBITMQ_HOST=rabbitmq


CMD [ "node", "src/index.js" ]
