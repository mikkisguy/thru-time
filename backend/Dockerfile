FROM node:16.16-alpine

RUN mkdir -p /thru-time-api/node_modules

RUN addgroup thru-time-api && \
    adduser -S -G thru-time-api thru-time-api && \
    chown -R thru-time-api /thru-time-api

RUN apk --no-cache add yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

WORKDIR /thru-time-api

USER thru-time-api

COPY --chown=thru-time-api:thru-time-api . .

RUN yarn install --pure-lockfile

ENV NODE_ENV=production
EXPOSE ${EXPRESS_PORT}
CMD ["yarn", "start"]
