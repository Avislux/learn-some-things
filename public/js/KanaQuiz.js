var userInput = $('#user-input');
console.log("KanaQuiz.js Loaded");
var vowels = ['a', 'i', 'u', 'e', 'o'];
var kRow = ['ka', 'ki', 'ku', 'ke', 'ko'];
var gRow = ['ga', 'gi', 'gu', 'ge', 'go'];
var sRow = ['sa', 'shi', 'su', 'se', 'so'];
var zRow = ['za', 'ji', 'zu', 'ze', 'zo'];
var tRow = ['ta', 'chi', 'tsu', 'te', 'to'];
var dRow = ['da', 'de', 'do'];
var dRowFull = ['da', 'di', 'du', 'de', 'do'];
var nRow = ['na', 'ni', 'nu', 'ne', 'no'];
var hRow = ['ha', 'hi', 'fu', 'he', 'ho'];
var bRow = ['ba', 'bi', 'bu', 'be', 'bo'];
var pRow = ['pa', 'pi', 'pu', 'pe', 'po'];
var mRow = ['ma', 'mi', 'mu', 'me', 'mo'];
var yRow = ['ya', 'yu', 'yo'];
var rRow = ['ra', 'ri', 'ru', 're', 'ro'];
var wRow = ['wa', 'wo'];
var otherRow = ['n'];
var keyIndex = 0;
/*TODO: Fill json file for diacritics*/
/*Imported from Quiz.pug template*/
console.log("From KanaQuiz:" + selectedRows);

var selectedRowsParse = selectedRows.split(",");
var selectedKana = [];
console.log('Selected Rows Parse');
console.log(selectedRowsParse);
console.log(selectedRowsParse.length);
console.log("quizType: " + quizType);
/*for (var row = 0; row < selectedRowsParse.length; row++){
 console.log(row);
 selectedKana.push.apply(selectedKana,eval(selectedRowsParse[row]));
 }*/
/*Equivalent with for loop.*/
selectedRowsParse.forEach(function (row) {
    selectedKana.push.apply(selectedKana, eval(row));
    if (quizType === '2'){
        /*For both, do it twice.*/
        selectedKana.push.apply(selectedKana, eval(row));
    }
    /*Parses string into a var name.*/
});
console.log('Selected kana ');
console.log(selectedKana);
selectedKana = shuffle(selectedKana);
console.log("shuffled");
console.log(selectedKana);
var maxKeyIndex = selectedKana.length - 1;
var messageTextSelect = $('#message');
var typeSelector = (quizType === '1' || quizType === '0') ? quizType : 0;
$.getJSON("/resources/gujuon.json", function (json) {
    $('#show-kana').text(json[selectedKana[keyIndex]][typeSelector]);
    /*0 for hiragana, 1 for Katakana.*/
    console.log(selectedKana[keyIndex]);/*Romanji character*/
    userInput.keyup(function () { /*Check if correct.*/
        if ($(this).val() === selectedKana[keyIndex]) {
            messageTextSelect.text("Fucking lit").delay(800).fadeOut(400, function () {
                messageTextSelect.text("");
                messageTextSelect.css('display', 'block');
            });
            console.log("Got it");
            /*Clear the field*/
            userInput.val('');

            if (keyIndex === maxKeyIndex) {
                messageTextSelect.text("You're done! Go away");
            } else {
                keyIndex++;
            }
            /*Get another kana*/
            $('#show-kana').text(json[selectedKana[keyIndex]][typeSelector]);
            if (quizType === '2'){
                typeSelector = (typeSelector == 0) ? 1: 0 ;
            }
            console.log(selectedKana[keyIndex]);/*Romanji character*/
            /*Todo not guarenteed to select both hira and kana for a specific romanji*/
        }
    })
});
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}


