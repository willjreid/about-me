'use strict';

var q1 = 'Is Will taller than you? -- Please answer YES or NO';
var q2 = 'Is Will a father of three?';
var q3 = 'Does Will have any tattoos?';
var q4 = 'Are burritos Will\'s favorite food?';
var q5 = 'Is Will from Seattle?';

var isTaller = prompt(q1).toUpperCase();
console.log('Q: ' + q1);
if (isTaller == 'YES' || isTaller == 'Y') {
  alert('Yes, there is a 99+% chance he is taller than you.');
}
else if (isTaller == 'NO' || isTaller == 'N') {
  alert('Really? If that\'s the case, there is a spot on a local basketball team for you!');
}
else if (isTaller != 'YES' && isTaller != 'NO' && isTaller != 'N' && isTaller != 'Y')
{
  alert('You probably didn\'t answer the question properly--please refresh and try again.');
};
console.log('A: ' + isTaller);
