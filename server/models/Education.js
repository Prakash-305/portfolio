const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  year: String
})

module.exports = mongoose.model('Education', educationSchema)
