FROM node:16.17.1-alpine

RUN mkdir -p /thru-time-api/node_modules

RUN addgroup thru-time-api && \
    adduser -S -G thru-time-api thru-time-api && \
    chown -R thru-time-api /thru-time-api

ENV TZ=Europe/Helsinki
RUN apk add --no-cache tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apk --no-cache add yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

WORKDIR /thru-time-api

USER thru-time-api

COPY --chown=thru-time-api:thru-time-api . .

RUN yarn install --pure-lockfile

EXPOSE ${EXPRESS_PORT}
CMD ["yarn", "start"]
