var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'I have been here', link: "http://www.gucci.ca" });
});

module.exports = router;
