'use strict';

var q1 = 'Is Will taller than you? -- Please answer YES or NO';
var q2 = 'Is Will a father of three?';
var q3 = 'Does Will have any tattoos?';
var q4 = 'Are burritos Will\'s favorite food?';
var q5 = 'Is Will from Seattle?';
var q6 = 'In what year was Will born?';
var q7 = 'Who is Will\'s favorite member of the Sounders FC? -- Please enter player\'s last name';
var validAnswers = ['YES', 'Y', 'NO', 'N'];
var validPlayers = ['Dempsey', 'Deuce', 'Morris', 'Frei', 'Torres', 'Evans'];

var isTaller = prompt(q1);
console.log('Q: ' + q1);
if (isTaller.toUpperCase() === 'YES' || isTaller.toUpperCase() === 'Y') {
  alert('Yes, there is a 99+% chance he is taller than you.');
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
}
else if (lovesBurritos.toUpperCase() === 'NO' || lovesBurritos.toUpperCase() === 'N') {
  alert('Trick question! Will loves all forms of sustinance!');
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
}
else if (validAnswers.includes(fromSeattle.toUpperCase()) !== true)
{
  alert('You probably didn\'t answer the question properly--please refresh and try again.');
};
console.log('A: ' + fromSeattle);
