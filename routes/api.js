var express = require('express');
var router = express.Router();
// const Sequelize = require('sequelize');
const Blog = require('../db/blog');


/* POST admin.html login. */
router.post('/login', function(req, res, next) {
  let passwd = req.body.passwd;
  if (passwd === 'admin') {
    res.jsonp({
      code: 0
    })
  } else {
    res.jsonp({
      code: -1
    })
  }
});

/* POST system.html add article. */
router.post('/add-article', function(req, res, next) {
  let data = req.body;
  if (data.title && data.content) {
    Blog.create({
      title: data.title,
      content: data.content
    })

    res.jsonp({
      code: 0,
    })
  } else {
    res.jsonp({
      code: -2
    })
  }
});

/* GET system.html all article. */
router.get('/all-article', function(req, res, next) {
  Blog.findAll({
    attributes: ['id', 'title']
  }).then(data => {
    res.jsonp({
      code: 0,
      data: data
    })
  }).catch(err => {
    res.jsonp({
      code: -3
    })
  })
});


module.exports = router;