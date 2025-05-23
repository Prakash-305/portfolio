const express = require('express');
const router = express.Router();
const PersonalInfo = require('../models/PersonalInfo');

router.get('/', async (req, res) => {
  try {
    const info = await PersonalInfo.findOne();
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    await PersonalInfo.deleteMany();
    const info = new PersonalInfo(req.body);
    await info.save();
    res.status(201).json(info);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
