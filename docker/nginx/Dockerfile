FROM node:16.19.0 as build-stage

WORKDIR /usr/src/app
COPY ./client .
RUN npm install && npm run build

FROM nginx:1.21 as production-stage

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
