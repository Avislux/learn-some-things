/*
var express = require('express');
var router = express.Router();

/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {
        title: 'Home'
    });
});

router.get('/about', function(req, res){
    res.render('page', {
        title: 'About'
    });
});
router.get('/JapaneseKana', function(req, res){
    res.render('page', {
        title: 'Japanese Kana Quiz'
    });
});
router.get('/contact', function(req, res){
    res.render('contact', {
        title: 'Contact'
    });
});
module.exports = router;