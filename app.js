var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gurusRouter = require('./routes/guru');
var eventRouter = require('./routes/event');
var authRouter = require('./routes/auth')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/guru', gurusRouter);
app.use('/api/data/event', eventRouter)
app.use('/api', authRouter)

app.listen(3000, () => console.log('Server running'))
// module.exports = app;
