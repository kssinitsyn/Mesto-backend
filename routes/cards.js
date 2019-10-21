const cards = require('express').Router();
const cardsData = require('../data/cards');

cards.get('/', (req, res) => {
  res.json(cardsData);
});

module.exports = cards;
