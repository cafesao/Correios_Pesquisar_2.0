FROM node:15 as build
WORKDIR app/
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx.conf /etc/nginx/conf.d
EXPOSE 7070
CMD ["nginx", "-g", "daemon off;"]