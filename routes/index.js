var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Click!', link: "http://www.gucci.ca", head: 'Hello Shopper' });
});

module.exports = router;
