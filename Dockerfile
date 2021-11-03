FROM node:14.17.0

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install

RUN npm run build

EXPOSE 8080

CMD echo "Waiting mongo" && sleep 5 && npm run serve