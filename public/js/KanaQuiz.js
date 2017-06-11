var userInput = $('#user-input');
console.log("KanaQuiz.js Loaded");
var vowels = ['a','i','u','e','o'];
var kRow = ['ka','ki','ku','ke','ko'];
var gRow = ['ga','gi','gu','ge','go'];
var sRow = ['sa','shi','su','se','so'];
var zRow = ['za','ji','zu','ze','zo'];
var tRows = ['ta','chi','tsu','te','to'];
var romanjiSet = ['a','i','u','e','o'];
var keyIndex = 0;
console.log("From KanaQuiz:" + selectedRows); /*Imported from Quiz.pug template*/

/*For loop will not work*/
$.getJSON("/resources/gujuon.json", function (json) {
    console.log(json.a[0]);
    /* console.log(key + " -> " + json[key]);*/
    $('#show-kana').text(json[romanjiSet[keyIndex]][0]);
    userInput.keyup(function () {
        if ($(this).val() === romanjiSet[keyIndex]) {
            $('#message').text("Fucking lit");
            console.log("Got it");
            userInput.val('');/*Clear the field*/
            keyIndex++;
            $('#show-kana').text(json[romanjiSet[keyIndex]][0]);
        }
    })
});

function getAnotherKana() {

 }
