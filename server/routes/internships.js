const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship');

router.get('/', async (req, res) => {
  const internships = await Internship.find();
  res.json(internships);
});

router.post('/', async (req, res) => {
  const internship = new Internship(req.body);
  await internship.save();
  res.json(internship);
});

router.put('/:id', async (req, res) => {
  const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(internship);
});

router.delete('/:id', async (req, res) => {
  await Internship.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
