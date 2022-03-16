const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  console.log(req.body);
  res.json({ id: '1', name: req.body.name, quote: 'something' });
});
