# express-postgres-ts-starter

a starter project based on [express](https://expressjs.com/) and [postgres](https://www.postgresql.org/).

## Init

This project needs to install the following software:

1. [Docker](https://www.docker.com/)和[Docker Compose](https://docs.docker.com/engine/reference/commandline/compose/)
2. [Node](https://nodejs.org/)
3. [Yarn](https://classic.yarnpkg.com/lang/en/)

> Note: node >= 8.0.0

### Set up

use Docker create a postgres database

```
docker network create daming-network
docker volume create --name=daming-volume
docker compose up db
```

use yarn install 3rd dependencies

```
yarn
```

run server in develop mode

```
yarn start:dev
```

Now open the link [http://127.0.0.1:3000/graphql](http://127.0.0.1:3000/graphql) with your brower.
