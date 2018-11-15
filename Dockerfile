FROM node:8-alpine as builder

COPY . /imbinn-engine
WORKDIR /imbinn-engine

RUN apk --no-cache add --virtual native-deps \
        g++ gcc libgcc libstdc++ linux-headers make python gettext git \
    && npm install -g --quiet node-gyp \
    && yarn install --quiet \
    && yarn build \
    && apk del native-deps

WORKDIR /imbinn-engine/http
RUN yarn install --quiet

FROM node:8-alpine
WORKDIR /imbinn-engine
COPY --from=builder /imbinn-engine/http ./
COPY --from=builder /imbinn-engine/build ./build
CMD node server.js
