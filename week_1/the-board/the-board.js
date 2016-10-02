console.log('hi'+ '\n' + 'yo');

var width = (8) * 2 ;
var height = 8;
var symbol = '#'
var board = ''

for ( i = 0 ; i <= height ; i++) { //makes a new line every loop of i
  for ( k = 0 ; k < width ; k++ ) { //makes the horizontal board lines
    if (( i + k ) % 2 !== 0 )
      board += symbol; // Adds a symbol to the board.
    else
      board += ' '; //Adds a space, between symbols.
  }
  board += '\n'; //Adds a newline to the 'board' string.
}
console.log(board);

/*
loop for the new line,
nested loop for the printing for thw width.
*/

/*console.log('Warmup Day4');

var boardWidth = 16;
var boardHeight = 8;
var symbol = '#';
var altSymbol = ' ';


var board = [];
var i = 0;
var h = 0;
for(h=0; h<=boardHeight; h++) {
for(w=0; w<=boardWidth; w++) {
  if ( w%2 === 0) {
   board.push(altSymbol);
} else if (w%2 !== 0) {
   board.push(symbol);
}
}
  board.push('\n');
  if (h%2 === 0) {
    symbol = ' '
    altSymbol = '#'
  } else {
    symbol = '#';
    altSymbol = ' ';
  }
}


console.log(board.join(''));


console.log(board.join(''));

ANSWER:

var size = 8;
var symbol = '#';
var board = '';

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += ' ';
    else
      board += symbol;
  }
  board += '\n';
}

console.log(board);*/
