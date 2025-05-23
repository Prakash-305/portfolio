const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

router.get('/', async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

router.post('/', async (req, res) => {
  const skill = new Skill(req.body);
  await skill.save();
  res.json(skill);
});

router.put('/:id', async (req, res) => {
  const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(skill);
});

router.delete('/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
