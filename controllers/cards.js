const Card = require('../models/card');
const NotFoundError = require('../errors/NotFoundError');
const { ITEM_NOT_FOUND, ACCESS_DENIED } = require('../configuration/constants');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.status(201).send({ data: card }))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findById({ _id: cardId })
    .then((card) => {
      if (!card) {
        return next(new NotFoundError(ITEM_NOT_FOUND));
      }
      if (card.owner.equals(req.user._id)) {
        return Card.remove(card).then(() => res.status(200).send({ data: card }));
      }
      return res.status(403).send({ message: ACCESS_DENIED });
    })
    .catch(next);
};
