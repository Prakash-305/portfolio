const express = require('express')
const router = express.Router()
const Certificate = require('../models/Certificate')

router.get('/', async (req, res) => {
  const certs = await Certificate.find()
  res.json(certs)
})

router.post('/', async (req, res) => {
  const cert = new Certificate(req.body)
  await cert.save()
  res.json(cert)
})

router.put('/:id', async (req, res) => {
  const cert = await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(cert)
})

module.exports = router
