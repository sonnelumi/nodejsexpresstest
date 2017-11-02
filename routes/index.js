var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express testing!' });
});

module.exports = router;

router.get('/readNameAndRespond/:name', function(req, res, next) {
    //expecting data variable called name --retrieve value using body-parser
    var body = JSON.stringify(req.body);  //if wanted entire body as JSON
    var params = JSON.stringify(req.params);//if wanted parameters
    var value_name = req.params.name;  //retrieve the data associated with name
    res.send("hello " + value_name);
})