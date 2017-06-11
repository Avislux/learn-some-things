(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.japaneseKana = global.japaneseKana || {})));
}(this, (function (exports) { 'use strict';

var a = ["あ","ア"];
var i = ["い","イ"];
var u = ["う","ウ"];
var e = ["え","エ"];
var o = ["お","オ"];
var ka = ["か","カ"];
var ki = ["き","キ"];
var ku = ["く","ク"];
var ke = ["け","ケ"];
var ko = ["こ","コ"];
var sa = ["さ","サ"];
var shi = ["し","シ"];
var su = ["す","ス"];
var se = ["せ","セ"];
var so = ["そ","ソ"];
var ta = ["た","タ"];
var chi = ["ち","チ"];
var tsu = ["つ","ツ"];
var te = ["て","テ"];
var to = ["と","ト"];
var na = ["な","ナ"];
var ni = ["に","ニ"];
var nu = ["ぬ","ヌ"];
var ne = ["ね","ネ"];
var no = ["の","ノ"];
var ha = ["は","ハ"];
var hi = ["ひ","ヒ"];
var fu = ["ふ","フ"];
var he = ["へ","ヘ"];
var ho = ["ほ","ホ"];
var ma = ["ま","マ"];
var mi = ["み","ミ"];
var mu = ["む","ム"];
var me = ["め","メ"];
var mo = ["も","モ"];
var ya = ["や","ヤ"];
var yu = ["ゆ","ユ"];
var yo = ["よ","ヨ"];
var ra = ["ら","ラ"];
var ri = ["り","リ"];
var ru = ["る","ロ"];
var re = ["れ","レ"];
var ro = ["ろ","ロ"];
var wa = ["わ","ワ"];
var wo = ["を","ヲ"];
var n = ["ん","ン"];
var gujuon = {
	a: a,
	i: i,
	u: u,
	e: e,
	o: o,
	ka: ka,
	ki: ki,
	ku: ku,
	ke: ke,
	ko: ko,
	sa: sa,
	shi: shi,
	su: su,
	se: se,
	so: so,
	ta: ta,
	chi: chi,
	tsu: tsu,
	te: te,
	to: to,
	na: na,
	ni: ni,
	nu: nu,
	ne: ne,
	no: no,
	ha: ha,
	hi: hi,
	fu: fu,
	he: he,
	ho: ho,
	ma: ma,
	mi: mi,
	mu: mu,
	me: me,
	mo: mo,
	ya: ya,
	yu: yu,
	yo: yo,
	ra: ra,
	ri: ri,
	ru: ru,
	re: re,
	ro: ro,
	wa: wa,
	wo: wo,
	n: n
};

/**
 * Get line by first Romaji of each line
 * @param {string} name - The first Romaji of each line
 * @return {Array<Array<Hiragana, Katakana>>} Kana
 * @example
 * kana.line('ka')
 * //=> return
    [ [ 'か', 'カ' ],
      [ 'き', 'キ' ],
      [ 'く', 'ク' ],
      [ 'け', 'ケ' ],
      [ 'こ', 'コ' ] ]
 */
function line(name) {
  var keys = Object.keys(gujuon);
  var start = keys.indexOf(name);

  var end;

  if (name === 'ya') {
    end = start + 3;
  } else if (name === 'ra') {
    end = start + 2;
  } else if (name === 'n') {
    end = start + 1;
  } else {
    end = start + 5;
  }

  return keys.slice(start, end).map(function (n$$1) { return gujuon[n$$1]; })
}

/**
 * Get Romaji By Kana
 * @param {string} kana - Kana
 * @return {string|undefined} Romaji
 * @example
 * kana.getRomajiByKana('キ')
 * //=> return `ki`
 */
function getRomajiByKana(kana) {
  for (var romaji in gujuon) {
    if (gujuon[romaji].indexOf(kana) > -1) {
      return romaji
    }
  }
}

/**
 * Get Kana By Romaji
 * @param {string} romaji - Romaji
 * @return {Array<Hiragana, Katakana>} Kana
 * @example
 * kana.getKanaByRomaji('mo')
 * //=> return ["も", "モ"]
 */
function getKanaByRomaji(romaji) {
  return gujuon[romaji]
}

/**
 * Get Hiragana by Romaji
 * @param {string} romaji - Romaji
 * @return {string} Hiragana
 * @example
 * kana.getHiraganaByRomaji('fu')
 * //=> return 'ふ'
 */
function getHiraganaByRomaji(romaji) {
  return getKanaByRomaji(romaji)[0]
}

/**
 * Get Katakana by Romaji
 * @param {string} romaji - Romaji
 * @return {string} Katakana
 * @example
 * kana.getKatakanaByRomaji('ha')
 * //=> return 'ハ'
 */
function getKatakanaByRomaji(romaji) {
  return getKanaByRomaji(romaji)[1]
}

exports.gujuon = gujuon;
exports.line = line;
exports.getRomajiByKana = getRomajiByKana;
exports.getKanaByRomaji = getKanaByRomaji;
exports.getHiraganaByRomaji = getHiraganaByRomaji;
exports.getKatakanaByRomaji = getKatakanaByRomaji;

Object.defineProperty(exports, '__esModule', { value: true });

})));
