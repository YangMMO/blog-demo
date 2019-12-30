var express = require('express');
var router = express.Router();
const blog = require('../db/blog');

/* GET article page. */
router.get('/article', function(req, res, next) {
  const id = req.param('id')

  blog.findById(id).then(result=>{
    res.render('article', {
      title: result.title,
      content: result.content
    })
  }).catch(err => {
    next(err);
  })
});

module.exports = router;
