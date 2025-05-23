const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  profileImage: String
});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
