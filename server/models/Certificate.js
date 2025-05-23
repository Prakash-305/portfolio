const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({
  title: String,
  link: String
})

module.exports = mongoose.model('Certificate', certificateSchema)
