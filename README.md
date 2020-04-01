# Project №15 "Yandex_praktikum" 
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/I-potashov/sprint_15/develop?color=green)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Overview
Project on Node.js Express.js and Mongodb for creating a backend for a web application, the project was implemented in the Yandex cloud service and is available at [Sprint15YP.tk](https://sprint15yp.tk) or [84.201.157.205](84.201.157.205)

**Implemented:**
* A centralized error handler.

Example:
````swift
const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? SERVER_ERROR : message });
};
````
* Request validation  based on the [joi](https://www.npmjs.com/package/@hapi/joi) and [celebrate](https://www.npmjs.com/package/celebrate).

Example:
````swift
body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
};
````
* Logging requests and errors based on [winston](https://www.npmjs.com/package/winston).

* Code analysis is implemented using [eslint](https://www.npmjs.com/package/eslint).

## Getting started
Using the Postman program, you can run multiple queries:

```sh
POST https://sprint15yp.tk/signup
POST https://sprint15yp.tk/signin
POST https://sprint15yp.tk/clearcookie
```
After authorization:
```sh
GET https://sprint15yp.tk/users
GET https://sprint15yp.tk/users/:userId
GET https://sprint15yp.tk/cards
POST https://sprint15yp.tk/cards
```

## Launch locally

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
## Todos

 - Add automated testing
 - Fix custom errors
 
## License

MIT license. [See LICENSE](./LICENSE) for details.
