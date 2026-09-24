const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is Required'],
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
