FROM node:12.16.2-alpine as BUILD

ENV SELF_SIGNED_CERT_IN_CHAIN=true
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm config set strict-ssl false
RUN yarn config set strict-ssl false

COPY package.json yarn.lock /tmp/
RUN cd /tmp && yarn install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
COPY . /app

FROM node:12.16.2-alpine as RELEASE

ENV SELF_SIGNED_CERT_IN_CHAIN=true
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm config set strict-ssl false
RUN yarn config set strict-ssl false

RUN mkdir -p /app

WORKDIR /app
COPY . /app
COPY --from=build /app .
RUN npm prune --production

# Define the url as the healthcheck
HEALTHCHECK CMD curl --fail http://localhost:3000/ping || exit 1

# Start 'er up
CMD ["yarn", "start:dev"]
