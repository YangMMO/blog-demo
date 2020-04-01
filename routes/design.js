var express = require('express');
var router = express.Router();
const Blog = require('../db/blog');

/* GET design page. */
router.get('/', function(req, res, next) {
  res.render('design');
});

module.exports = router;
