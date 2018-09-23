var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    id: 10,
    title: '2123132132',
    content: 456,
    date: 123
  })
  // res.sendfile('../views/home.html')
});

module.exports = router;
