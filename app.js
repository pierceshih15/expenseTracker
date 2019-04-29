const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Record = require('./models/record');
const User = require('./models/user');

// 建立 DB 連線
mongoose.connect('mongodb://localhost/expense-tracker', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', () => {
  console.log('Oh no, mongodb error!')
})

db.once('open', () => {
  console.log('Okay, mongodb is connected!')
})

app.get('/', (req, res) => {
  res.send('Expense Tracker Project Init.')
})

app.listen(port, () => {
  console.log('Express is running.')
})