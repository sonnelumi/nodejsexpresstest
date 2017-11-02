var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express testing!' });
});

module.exports = router;

var controllerMain = require('../controllers/main');

router.get('/readNameAndRespond/:name', controllerMain.readNameAndRespond);
router.get('/doit', controllerMain.doit);