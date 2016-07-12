var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My First Express' });
});

router.get('/data', function(req, res, next) {
  var jObject={"Name":"Piyali","Age":25};
  res.json(jObject);
});

router.get('/calculator', function(req, res, next) {
  res.render('index', { title: 'My First Express' });
});

module.exports = router;
