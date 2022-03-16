const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  // TODO: Implement me!
  // console.log(req.body);
  // console.log(Math.floor(Math.random() * 9));
  // res.json({ id: '1', name: req.body.name, quote: 'something' });
  res.json(await ProfileService.create(req.body));
});
