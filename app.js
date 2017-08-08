'use strict';

//var q1 = 'Is Will taller than you? -- Please answer "YES" or "NO" ';
var isTaller = prompt('Is Will taller than you? -- Please answer "YES" or "NO" ');
console.log('Q: ' + q1);
if (isTaller == 'YES' || isTaller == 'Y') {
  alert('Yes, there is a 99+% chance he is taller than you.');
}
else if (isTaller == 'NO' || isTaller == 'N') {
  alert('Really? If that\'s the case, there is a spot on a local basketball team for you!');
}
/*else (isTaller != 'YES' && isTaller != 'Y' && isTaller != 'NO' && isTaller != 'N')
{
  alert('You probably didn\'t answer the question properly--please refresh and try again.');
}*/
//console.log('A: ' + isTaller);
