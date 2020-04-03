const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { SERVER_ERROR, USER_NOT_FOUND } = require('../configuration/constants');
const { JWT_KEY } = require('../configuration/config');
const NotFoundError = require('../errors/NotFoundError');
const ServerError = require('../errors/ServerError');

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(() => {
      throw new NotFoundError(USER_NOT_FOUND);
    })
    .then((user) => res.status(200).send({ data: user }))
    .catch(next);
};

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((user) => res.status(200).send({ data: user }))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => res.status(201).send({
      _id: user._id,
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      email: user.email,
    }))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_KEY);
      res.cookie('jwt', token, { maxAge: 3600000 * 24 * 7, httpOnly: true }).end();
    })
    .catch(next);
};

module.exports.clearToken = (req, res, next) => {
  try {
    res.clearCookie('jwt', '/');
  } catch (err) {
    throw new ServerError(SERVER_ERROR);
  }
  return next();
};
