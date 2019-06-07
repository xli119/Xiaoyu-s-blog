const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-first-fullstack', {useNewUrlParser: true})

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: 0    //0 keep secret
  },
  email: {
    type: String,
    default: ''
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  modified_date: {
    type: Date,
    default: Date.now
  },
  birthday: {
    type: Date
  },
  avatar: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  status: {
    type: Number,
    enum: [0, 1, 2],  //0: no limit, 1: not allowed to make a comments, 2: not allowed to login
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);