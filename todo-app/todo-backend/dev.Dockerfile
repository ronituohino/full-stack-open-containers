FROM node:16

WORKDIR /usr/src/todo-backend

COPY --chown=node:node . .

RUN npm install

USER node

CMD npm run dev
