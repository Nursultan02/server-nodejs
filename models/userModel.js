const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: String,
  password: String,
});

module.exports = model('User', userSchema);
