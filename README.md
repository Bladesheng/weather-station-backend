# weather-station-backend

## About this repository

Backend REST API and database for my weather station.

Serves as data source for my weather station fronted [web app](https://github.com/Bladesheng/weather-station-frontend)

Uses Postgres to store 2x temperature, humidity and pressure readings every 5 minutes generated by my [weather station](https://github.com/Bladesheng/weather-station-V1)

The Express REST API includes endpoints for basic CRUD HTTP requests for manipulating the database.

Creating, updating and deleting records in database is protected by password passed in headers.

The database and API is hosted on fly.io

## Building locally

- Clone the repository, then:

```
npm install
```

- To deploy to `fly.io`, run:

```
fly deploy
```

- Set .env [secrets](https://fly.io/docs/reference/secrets/)

### Local development server

- Create `.env` file - see [`.env.example`](https://github.com/Bladesheng/weather-station-backend/blob/main/.env.example)

- Run the development server with:

```
docker compose up -d
```

- Once the app container is running, run database migration and seed inside:

```
npx prisma migrate dev --name init
npx ts-node ./prisma/seed.ts
```

Example API requests in [Postman](https://www.postman.com/telecoms-operator-36486599/workspace/weather-station/request/24296961-8ced04cb-946c-4b14-909f-a094c9b36d4f)

Formatting with `Prettier` and linting with `ESLint`:

```
npm run format
npm run lint
```
