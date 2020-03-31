# Project №15 "Yandex_praktikum" 
[![Build Status](https://travis-ci.com/i-potashov/sprint_15.svg?branch=develop)](https://travis-ci.com/i-potashov/sprint_15)

The project was implemented in the Yandex cloud service and available at https://sprint15yp.tk

**Implemented:**

A centralized error handler.
Request validation  based on the Joi and Celebrate.
Logging requests and errors based on Winston.

### Getting started


**Start server:**
```sh
$ npm install
$ npm run start
```
**Start server with hot reload:**
```sh
$ npm install
$ npm run dev
```

**For analyzes your code to quickly find and fix problems:**
```sh
$ npm run eslint
$ npm run eslintfix
```
### Docker

**After starting the server, you can try these queries:**

```sh
POST /signin
POST /signup
POST /clearcookie
GET /users
GET /users/:userId
GET /cards
POST /cards
```
### Todos

 - Add automated testing
 - Fix custom errors
 
### License

MIT
