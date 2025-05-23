const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  title: String,
  location: String,
  about: String,
  avatarUrl: String,
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
  }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
