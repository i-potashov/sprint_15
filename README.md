# Project №15 "Yandex_praktikum" 
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/I-potashov/sprint_15/develop?color=green)
![GitHub](https://img.shields.io/github/license/I-potashov/sprint_15)

## Overview

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
