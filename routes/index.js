var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'StreamFox' });
});

router.get('/getstarted', function(req, res, next) {
  res.render('getstarted');
});

module.exports = router;
