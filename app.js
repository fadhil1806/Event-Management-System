var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var gurusRouter = require('./routes/guru');
var eventRouter = require('./routes/event');
var categoryRouter = require('./routes/category');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/guru', gurusRouter);
app.use('/api/data/event', eventRouter)
app.use('/api/category', categoryRouter);

console.log('Starting app...');
console.log(`Node.js version: ${process.version}`);
console.log(`Current working directory: ${process.cwd()}`);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

app.listen(3000, () => console.log('Server running'))
