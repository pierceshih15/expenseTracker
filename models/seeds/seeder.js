const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Record = require('../record');
const recordsList = require('../../records.json').results;
const User = require('../user');
const usersList = require('../../users.json').results;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/records', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('Oh no, mongodb error!');
});

db.once('open', () => {
  console.log('Okay, mongodb is connected!');

  for (let i = 0; i < usersList.length; i++) {
    const user = User(usersList[i]);
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        user.save().then().catch(err => {
          console.log(err);
        });
      });
    });

    for (let num = i * 3; num < (i + 1) * 3; num++) {
      Record.create({
        ...recordsList[num],
        userId: user._id,
      })
      if (num === recordsList.length) return;
    }
  }

  console.log('User and Record data get ready!');
});