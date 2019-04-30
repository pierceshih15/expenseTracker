const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const helpers = require('handlebars-helpers')();
const session = require('express-session');
const passport = require('passport');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');

const Record = require('./models/record');
const User = require('./models/user');

// Router Variables
const HomeRouter = require('./routes/home');
const RecordRouter = require('./routes/record');
const UserRouter = require('./routes/user');
const AuthRouter = require('./routes/auth');

if (process.env.NODE_ENV !== 'production') { // 如果不是 production 模式
  require('dotenv').config() // 使用 dotenv 讀取 .env 檔案
}

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(methodOverride('_method'));

app.use(session({
  secret: 'ioqeodond',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
// flash
app.use(flash());

require('./config/passport')(passport);
app.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.success_msg = req.flash('success_msg');
  res.locals.warning_msg = req.flash('warning_msg');
  next();
});

// 建立 DB 連線
mongoose.connect('mongodb://localhost/records', {
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

// Import Router 
app.use('/', HomeRouter);
app.use('/records', RecordRouter);
app.use('/users', UserRouter);
app.use('/auth', AuthRouter);

app.listen(port, () => {
  console.log('Express is running.')
})