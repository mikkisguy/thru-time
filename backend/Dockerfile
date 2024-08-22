FROM node:20-alpine

RUN mkdir /thru-time-api

RUN addgroup thru-time-api && \
    adduser -S -G thru-time-api thru-time-api && \
    chown -R thru-time-api /thru-time-api

ENV TZ=Europe/Helsinki
RUN apk add --no-cache tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN rm -rf /usr/local/bin/yarn
RUN rm -rf /usr/local/bin/yarnpkg
RUN npm install yarn@berry -g

WORKDIR /thru-time-api 

USER thru-time-api

RUN rm -rf node_modules

COPY --chown=thru-time-api:thru-time-api . .

RUN yarn install

EXPOSE ${EXPRESS_PORT}
CMD ["yarn", "start"]
