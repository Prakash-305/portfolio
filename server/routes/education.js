const express = require('express')
const router = express.Router()
const Education = require('../models/Education')

router.get('/', async (req, res) => {
  const data = await Education.find()
  res.json(data)
})

router.post('/', async (req, res) => {
  const edu = new Education(req.body)
  await edu.save()
  res.json(edu)
})

router.put('/:id', async (req, res) => {
  const edu = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(edu)
})

module.exports = router
