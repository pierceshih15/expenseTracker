const mongoose = require('mongoose');
const Record = require('../record.js');
const recordList = require('../../records.json').results;

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

  for (var i = 0; i < recordList.length; i++) {
    Record.create({
      ...recordList[i]
    })
  }

  console.log('Records data get ready!');
});