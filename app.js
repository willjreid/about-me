'use strict';
//declare questions and arrays
var q0 = 'Hello. Welcome to a Q&A game about Will J. Reid. To begin, please enter your name.';
var q1 = 'Is Will taller than you? -- Please answer YES or NO';
var q2 = 'Is Will a father of three?';
var q3 = 'Does Will have any tattoos?';
var q4 = 'Are burritos Will\'s favorite food?';
var q5 = 'Is Will from Seattle?';
var q6 = 'In what year was Will born?';
var q7 = 'Who is Will\'s favorite member of the Sounders FC? -- Please enter the player\'s last name';
var validAnswers = ['YES', 'Y', 'NO', 'N'];
var validPlayers = ['DEMPSEY', 'DEUCE', 'MORRIS', 'FREI', 'TORRES', 'EVANS', 'ALONSO'];
var correct = 0;

//begin promts and alerts for 7 questions
var guestName = prompt(q0);
console.log('Guest\'s name: ' + guestName);
var isTaller = prompt(q1);
console.log('Q: ' + q1);
if (isTaller.toUpperCase() === 'YES' || isTaller.toUpperCase() === 'Y') {
  alert('Yes, there is a 99+% chance he is taller than you.');
  correct++;
}
else if (isTaller.toUpperCase() === 'NO' || isTaller.toUpperCase() === 'N') {
  alert('Really? If that\'s the case, there is a spot on a local basketball team for you!');
}
else if (validAnswers.includes(isTaller.toUpperCase()) !== true)
{
  alert('You probably didn\'t answer the question properly--please refresh and try again.');
};
console.log('A: ' + isTaller);

var isFather = prompt(q2);
console.log('Q: ' + q2);
if (isFather.toUpperCase() === 'YES' || isFather.toUpperCase() === 'Y') {
  alert('Incorrect--Will is the proud father of two children.');
}
else if (isFather.toUpperCase() === 'NO' || isFather.toUpperCase() === 'N') {
  alert('Right! Will is the proud father of two children.');
  correct++;
}
else if (validAnswers.includes(isFather.toUpperCase()) !== true)
{
  alert('You probably didn\'t answer the question properly--please refresh and try again.');
};
console.log('A: ' + isFather);

var hasTattoo = prompt(q3);
console.log('Q: ' + q3);
if (hasTattoo.toUpperCase() === 'YES' || hasTattoo.toUpperCase() === 'Y') {
  alert('Not so fast--Will is thinking about a boss wave tattoo but he hasn\'t been inked yet.');
}
else if (hasTattoo.toUpperCase() === 'NO' || hasTattoo.toUpperCase() === 'N') {
  alert('Correct! Will is thinking about a boss wave tattoo but he hasn\'t been inked yet.');
  correct++;
}
else if (validAnswers.includes(hasTattoo.toUpperCase()) !== true)
{
  alert('You probably didn\'t answer the question properly--please refresh and try again.');
};
console.log('A: ' + hasTattoo);

var lovesBurritos = prompt(q4);
console.log('Q: ' + q4);
if (lovesBurritos.toUpperCase() === 'YES' || lovesBurritos.toUpperCase() === 'Y') {
  alert('Of course! Will loves burritos!');
  correct++;
}
else if (lovesBurritos.toUpperCase() === 'NO' || lovesBurritos.toUpperCase() === 'N') {
  alert('Trick question! Will loves all forms of sustenance!');
}
else if (validAnswers.includes(lovesBurritos.toUpperCase()) !== true)
{
  alert('You probably didn\'t answer the question properly--please refresh and try again.');
};
console.log('A: ' + lovesBurritos);

var fromSeattle = prompt(q5);
console.log('Q: ' + q5);
if (fromSeattle.toUpperCase() === 'YES' || fromSeattle.toUpperCase() === 'Y') {
  alert('Weeeeell... he\'s been here 5.5 years, and he no longer owns an umbrella, so he feels like a native.');
}
else if (fromSeattle.toUpperCase() === 'NO' || fromSeattle.toUpperCase() === 'N') {
  alert('Will has been here 5.5 years, and he no longer owns an umbrella, so he feels like a native.');
  correct++;
}
else if (validAnswers.includes(fromSeattle.toUpperCase()) !== true)
{
  alert('You probably didn\'t answer the question properly--please refresh and try again.');
};
console.log('A: ' + fromSeattle);

//sixth question, numbers, using a random number assignment for yearBorn
var randYear = (Math.floor(Math.random() * 10) + 1980);
console.log('Random Year: ' + randYear);

var attempts6 = 0;
var yearBorn = prompt(q6);
console.log('Q: ' + q5);
while (attempts6 < 3) {
  if (yearBorn < randYear) {
    yearBorn = prompt('Too old, please try again.');
    attempts6++;
    console.log('A: ' + yearBorn);
  }
  else if (yearBorn > randYear) {
    yearBorn = prompt('Too young, please try again.');
    attempts6++;
    console.log('A: ' + yearBorn);
  }
  else if (isNaN(yearBorn)) {
    yearBorn = prompt('You probably didn\'t answer the question properly--please refresh and try again.');
    attempts6++;
    console.log('A: ' + yearBorn);
  }
  else {
    alert('Correct, Will was born in ' + randYear + '. (He was really born in 1982 but he has implemented a random number generator for yearBorn)');
    correct++;
    console.log('A: ' + yearBorn);
    break;
  };
}

//seventh question, numbers
var attempts7 = 0;
var playerLName = prompt(q7);
console.log('Q: ' + q5);
while (attempts7 < 5) {
  if (validPlayers.includes(playerLName.toUpperCase()) !== true) {
    playerLName = prompt('Nah, he sounds like a Timber. Please try again.');
    console.log('A: ' + playerLName);
    attempts7++;
  }
  else {
    alert('Correct, ' + playerLName + ' is a great hero of the Sounders!');
    correct++;
    console.log('A: ' + playerLName);
    break;
  };
}
alert('Just FYI, Will\'s favorite players are: ' + validPlayers.toString() + ' and we can all agree the team is better off without Andy Rose.');

//tabulate the results and share with the guestName
if (correct < 4) {
  alert('Thanks for playing ' + guestName + '. You got ' + correct + ' questions right out of 7. Please catch up with Will over a cup of coffee, then try again.');
}
else if (4 <= correct && 7 > correct) {
  alert('Thanks for playing ' + guestName + '. You got ' + correct + ' questions right out of 7. You are becomming quite the Will afficionado. Please try again after having a beer with Will.');
}
else if (7 === correct) {
  alert(guestName + ', you must really know Will. You got ' + correct + ' questions right out of 7. Will should buy you a beer!');
}
console.log('Total score: ' + correct + ' out of 7.');
