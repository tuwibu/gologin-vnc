FROM node:18

WORKDIR /home/vnc

COPY . .

RUN rm -rf node_modules
RUN rm -rf dist

RUN yarn install

RUN npm run build

ENV DOCKER_SOCKET="/var/run/docker.sock"

EXPOSE 8080

CMD ["npm", "start"]