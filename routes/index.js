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
    res.render('page', {
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

    console.log(request.body); /*Check the console you derp. This is server-side*/
    var selectedRows = request.body['selectedRows[]'];
    console.log(selectedRows);
    var i = 0;
    for (i; i < selectedRows.length; i++){
        console.log(selectedRows[i]);
    }
    res.render('applications/JapaneseKana/Quiz', {
        title: 'Japanese Kana Quiz',
        selectedRows: selectedRows
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