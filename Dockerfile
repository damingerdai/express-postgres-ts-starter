# Copyright 2020 大明二代
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM node:16.14.0-alpine as BUILD

ENV SELF_SIGNED_CERT_IN_CHAIN=true
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm config set strict-ssl false
RUN yarn config set strict-ssl false

COPY package.json yarn.lock /tmp/
RUN cd /tmp && yarn install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
COPY . /app

FROM node:16.14.0-alpine as RELEASE

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
