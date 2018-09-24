var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/article');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/article', usersRouter);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  console.log(err)
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title: `${err.status}错误，页面请求失败`,
    contnet: `${err.status}<br/>_(:з」∠)_<br/>压得我喘不过气`
  });
});

app.get('*', function(req, res) {
  res.render('error', {
    title: `404错误，页面请求失败`,
    contnet: `404<br/>_(:з」∠)_<br/>压得我喘不过气`
  });
})


module.exports = app;
