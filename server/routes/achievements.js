const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

router.get('/', async (req, res) => {
  const achievements = await Achievement.find();
  res.json(achievements);
});

router.post('/', async (req, res) => {
  const achievement = new Achievement(req.body);
  await achievement.save();
  res.json(achievement);
});

router.put('/:id', async (req, res) => {
  const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(achievement);
});

router.delete('/:id', async (req, res) => {
  await Achievement.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
