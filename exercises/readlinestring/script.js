var ask = require('readline-sync');
console.log('Hello! My name is Dennis. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
var lastName = ask.question('Okay, and your last name? ');
console.log("Hello " + firstName + " " + lastName + ", How are you?");
var age = ask.question("I'm OVER 9000 years old. How old are you? ");

console.log("Coolio. So, I know your name is " + firstName + " " + lastName + ", and you are " + age + " years old.");

var personalStatement = ask.question("So, tell me a little bit about yourself. ");

var pLength = personalStatement.length;
var pHalf = personalStatement.substring(personalStatement.length / 2, personalStatement.length);

console.log("So, to recap, " + personalStatement + ", and the info you gave me is " + pLength + " characters long.")
console.log(" The second half of your statement is this: " + pHalf);
var splitPoint = ask.question(" Tell me, where would you like to split this from?, from 0 to " + pHalf.length + "?");
var newString = pHalf.substring(pHalf.splitPoint, pHalf.Length);



console.log("Ok, here's your phrase: " + newString);

var firstPhrase = ask.question('Gimme a phrase.');
var secondPhrase = ask.question('Gimme another phrase.');

console.log("It's magic, my dude. " + firstPhrase.toUpperCase()  + secondPhrase.toUpperCase());
