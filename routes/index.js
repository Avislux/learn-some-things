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

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Home'
    });
});

router.get('/about', function (req, res) {
    res.render('about', {
        title: 'About'
    });
});
router.get('/JapaneseKana', function (req, res) {
    res.render('applications/JapaneseKana/JapaneseKana', {
        title: 'Japanese Kana Quiz'
    });
});
router.get('/JapaneseKana/Quiz', function (req, res) {
    res.render('applications/JapaneseKana/Quiz', {
        title: 'Japanese Kana Quiz'
    });
});
router.post('/JapaneseKana/Quiz', function (request, res) {
    var selectedRows = request.body['selectedRows[]'];
    var quizType = request.body['quizType'];
    console.log(selectedRows);
    console.log("quizType:" + quizType);
    res.render('applications/JapaneseKana/Quiz', {
        title: 'Japanese Kana Quiz',
        selectedRows: selectedRows,
        quizType:quizType
    });
    }
);
router.get('/Chinese', function (req, res) {
    res.render('applications/Chinese/Chinese', {
        title: 'Chinese'
    });
});
router.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'Contact'
    });
});
module.exports = router;