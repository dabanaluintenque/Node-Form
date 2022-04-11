var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/form

router.get('/form', function(req, res){

// it mean go up one step and open public inside public send form.html
  res.sendFile(path.join(_dirname, '..', 'public', 'form.html'));
});

router.post('/form', function(req, res){

  res.json({
    first: req.body.first,
    last: req.body.last
  });
});

module.exports = router;
