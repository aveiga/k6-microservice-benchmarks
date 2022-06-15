# k6-microservice-benchmarks

Benchmarking scripts to decide between two technologies using k6

## Pre-requirements

- [Keycloak, PostgreSQL and RabbitMQ](https://github.com/aveiga/basic-golang-staticfile-server/blob/main/docker-compose.yml) must be up and running: `docker compose up -d`
- The sample [NodeJS](https://github.com/aveiga/basic-express-staticfile-server) and [Go](https://github.com/aveiga/basic-golang-staticfile-server) micro-services must be up and running.

## How to

Run nodejs benchmarks: `npm run node-bench`

Run golang benchmarks: `npm run go-bench`

# Results

| Tech             | Test                                                                                       | reqs/sec | CPU | Memory | Time |
| ---------------- | ------------------------------------------------------------------------------------------ | -------- | --- | ------ | ---- |
| Go               | POST requests with handler iterating over 10000 elements and finally persisting the object | 30       | -   | -      | 30s  |
| NodeJS (express) | POST requests with handler iterating over 10000 elements and finally persisting the object | 17       | -   | -      | 30s  |
| Go               | POST requests with handler persisting the object                                           | 4136     | -   | 33Mb   | 120s |
| NodeJS (express) | POST requests with handler persisting the object                                           | 22791    | -   | 1010Mb | 120s |
