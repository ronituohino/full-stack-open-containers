FROM node:16

WORKDIR /usr/src/pl-backend

COPY --chown=node:node . .

RUN npm ci 

USER node

CMD npm start
