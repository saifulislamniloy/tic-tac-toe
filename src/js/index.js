let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let player1 = true;
let i = 0;
let j = 0;
let count = 0;
let indexName = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function reset() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  indexName.map((value) => (document.getElementById(value).innerText = ''));
}

function updateBoard() {
  count=0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      document.getElementById(indexName[count]).innerText = board[i][j];
      count += 1;
    }
  }
}

function clickTile(x, y) {
  if(board[x][y] === ''){
    if (player1 === true) board[x][y] = '+';
    else if (player1 === false) board[x][y] = 'O';
    player1 = !player1;
    updateBoard();
  }else alert("Click on empty space!")
}

// console.log(board[0][0])
