const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  link: String
});

module.exports = mongoose.model('Blog', blogSchema);
