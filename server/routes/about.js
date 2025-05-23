const express = require('express');
const router = express.Router();
const About = require('../models/About');

router.get('/', async (req, res) => {
  const about = await About.findOne();
  res.json(about);
});

router.post('/', async (req, res) => {
  const about = new About(req.body);
  await about.save();
  res.json(about);
});

router.put('/:id', async (req, res) => {
  const about = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(about);
});

module.exports = router;
