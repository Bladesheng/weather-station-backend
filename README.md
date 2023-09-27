# weather-station-backend

## About this repository

This repo contains backend API and database for my weather station.

Serves as data source for my weather station frontend [web app](https://github.com/Bladesheng/weather-station-frontend)

Uses Postgres to store 2x temperature, humidity and pressure readings every 5 minutes generated by my [weather station](https://github.com/Bladesheng/weather-station-V1)

The Express API includes endpoints for performing basic CRUD operations on the database using HTTP requests.

Creating, updating, and deleting records in the database is protected by a password passed in the headers.

The database and API is hosted on fly.io

## Building locally

- Clone the repo, then create `.env` file - see [`.env.example`](https://github.com/Bladesheng/weather-station-backend/blob/main/.env.example)

- Install packages:

```sh
pnpm install
```

- Now you have 2 options:

### a) Local dev server + local database

- Push Prisma schema to the database and seed it:

```sh
pnpm run db:push
pnpm run db:seed
```

- Run the dev server:

```sh
pnpm run dev
```

### b) Dev server + database in docker

- Run dev server and database container:

```sh
pnpm run docker
```

- Connect to the container:

```sh
docker compose exec app sh
```

- Run this inside the container to push the Prisma schema to the database and seed it:

```sh
pnpm run db:push
pnpm run db:seed
```

Example API requests in [Postman](https://www.postman.com/telecoms-operator-36486599/workspace/weather-station/request/24296961-8ced04cb-946c-4b14-909f-a094c9b36d4f)

Formatting with `Prettier` and linting with `ESLint`:

```sh
pnpm run format
pnpm run lint
```
