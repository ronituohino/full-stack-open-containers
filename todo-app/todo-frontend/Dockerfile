FROM node:16

WORKDIR /usr/src/todo-frontend

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:8080/api

RUN npm ci

RUN CI=true npm run test

RUN npm run build

RUN npm install -g serve

CMD ["serve", "build"]

# This is a new stage, everything before this is gone, except the files we want to COPY
# FROM nginx:1.20-alpine

# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the docker hub page
# COPY --from=build-stage /usr/src/todo-frontend/build /usr/share/nginx/html