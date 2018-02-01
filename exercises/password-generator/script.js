//create sources for informatoin
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", ".", ",", ";", ":"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var hiraganaArray = ["あ", "い", "う", "え", "お",
  "か", "き", "く", "け", "こ",
  "さ", "し", "す", "せ", "そ",
  "た", "ち", "つ", "て", "と",
  "な", "に", "ぬ", "ね", "の",
  "ま", "み", "む", "め", "も",
  "は", "ひ", "ふ", "へ", "ほ",
  "や", "ゆ", "よ",
  "ら", "り", "る", "れ", "ろ",
  "わ", "を", "ん"
];


//create a for loop that will run for the length of the string inputted;

var passwordGenerator = function(num) {
  var password = [];
  for (var i = 0; i < num; i++) {

    switch (Math.floor(Math.random() * 5)) {

      case 0:
        var randomNum = Math.floor(Math.random() * numbersArray.length);
        password.push(numbersArray[randomNum]);
        break;

      case 1:
        var randomSymbol = Math.floor(Math.random() * symbolsArray.length);
        password.push(symbolsArray[randomSymbol]);
        break;

      case 2:
        var randomUpper = Math.floor(Math.random() * upperArray.length);
        password.push(upperArray[randomUpper]);
        break;

      case 3:
        var randomLower = Math.floor(Math.random() * lowerArray.length);
        password.push(lowerArray[randomLower]);

      case 4:
        var randomHiragana = Math.floor(Math.random() * hiraganaArray.length);
        password.push(hiraganaArray[randomHiragana]);
        break;

      default:
        var randomNum = Math.floor(Math.random() * numbersArray.length);
        password.push(numbersArray[randomNum]);
        break;


    }
  }
  var newPassword = password.join('');
  console.log(newPassword);
  return newPassword;
}

passwordGenerator(20);
