const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('Achievement', achievementSchema);
