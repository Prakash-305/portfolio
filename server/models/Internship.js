const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  company: String,
  role: String,
  duration: String,
  description: String
});

module.exports = mongoose.model('Internship', internshipSchema);
