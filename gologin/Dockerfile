# Stage 1
FROM node:18 AS builder

WORKDIR /root/gologin

COPY . .

RUN yarn clean && yarn install && yarn pkg

RUN rm -rf ./browser/

RUN rm -rf ./user-data-dir/*

RUN node dist/setup.js

# Stage 2
FROM debian:11

RUN apt-get update && apt-get install -y xvfb x11vnc ca-certificates fonts-liberation libasound2 libcurl3-gnutls libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils && rm -rf /var/lib/apt/lists/*

WORKDIR /root/gologin

COPY --from=builder /root/gologin/build/gologin ./

COPY --from=builder /root/gologin/browser ./browser

ENV DISPLAY=:0

EXPOSE 5900

CMD Xvfb :0 -screen 0 1920x1080x24+32 & \
  ./gologin & \
  x11vnc -forever -nopw -display :0 -shared -rfbport 5900 -o /var/log/x11vnc.log & \
  wait