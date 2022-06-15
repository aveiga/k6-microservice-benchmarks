# k6-microservice-benchmarks

Benchmarking scripts to decide between two technologies using k6

## Pre-requirements

- [Keycloak, PostgreSQL and RabbitMQ](https://github.com/aveiga/basic-golang-staticfile-server/blob/main/docker-compose.yml) must be up and running: `docker compose up -d`
- The sample [NodeJS](https://github.com/aveiga/basic-express-staticfile-server) and [Go](https://github.com/aveiga/basic-golang-staticfile-server) micro-services must be up and running.

## How to

Run nodejs benchmarks: `npm run node-bench`

Run golang benchmarks: `npm run go-bench`
