var express = require('express');
var router = express.Router();

/* GET system page. */
router.get('/', function(req, res, next) {
  if(req.param('id') === 'admin') {
    res.render('system'); 
  } else {
    res.render('error'); 
  }
});

module.exports = router;