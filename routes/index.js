var express = require('express');
var router = express.Router();
const blog = require('../db/blog');

/* GET home page. */
router.get('/', function(req, res, next) {
  blog.findAll().then(result=>{
    res.render('index', {
      data: result
    })
  }).catch(err => {
    next(err);
  })
});

module.exports = router;
