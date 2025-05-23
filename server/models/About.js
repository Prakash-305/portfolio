const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  bio: String
});

module.exports = mongoose.model('About', aboutSchema);
