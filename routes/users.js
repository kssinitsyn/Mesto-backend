const users = require('express').Router();
const usersData = require('../data/users');

users.get('/', (req, res) => {
  res.json(usersData);
});

users.get('/:id', (req, res) => {
  const indexUser = usersData.findIndex((item) => item._id === req.params.id);
  if (indexUser < 0) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  } else {
    res.send(usersData[indexUser]);
  }
});

module.exports = users;
