var express = require('express');
var router = express.Router();
const Blog = require('../db/blog');

/* GET home page. */
router.get('/', function(req, res, next) {
  Blog.findAll().then(result=>{
    res.render('index', {
      data: result
    })
  }).catch(err => {
    next(err);
  }) 
});

module.exports = router;
