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

let gameStatus = 'Null';

// eslint-disable-next-line no-unused-vars
function reset() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  indexName.map((value) => (document.getElementById(value).innerText = ''));
  player1 = true;
  gameStatus = 'Null';
  document.getElementById('status').innerText = gameStatus;
}

function updateBoard() {
  count = 0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      document.getElementById(indexName[count]).innerText = board[i][j];
      count += 1;
    }
  }
}

// eslint-disable-next-line no-unused-vars
function clickTile(x, y) {
  if (gameStatus === 'Null') {
    if (board[x][y] === '') {
      if (player1 === true) board[x][y] = '+';
      else if (player1 === false) board[x][y] = 'O';
      player1 = !player1;
      updateBoard();
      declareWinner();
      document.getElementById('status').innerText = gameStatus;
    } else alert('Click on empty space!');
  } else alert('Game Has finished. Reset board.');
}

function declareWinner() {
  if (checkWinner('+')) gameStatus = '+ Won';
  else if (checkWinner('O')) gameStatus = 'O Won';
  else gameStatus = 'Null';
  if (gameStatus === 'Null') {
    if (checkDraw()) gameStatus = 'Drawn';
  }
}

function checkWinner(x) {
  // COLUMN CHECK
  if (board[0][0] === x && board[0][1] === x && board[0][2] === x) return true;
  else if (board[1][0] === x && board[1][1] === x && board[1][2] === x)
    return true;
  else if (board[2][0] === x && board[2][1] === x && board[2][2] === x)
    return true;
  //ROW CHECK
  else if (board[0][0] === x && board[1][0] === x && board[2][0] === x)
    return true;
  else if (board[0][1] === x && board[1][1] === x && board[2][1] === x)
    return true;
  else if (board[0][2] === x && board[1][2] === x && board[2][2] === x)
    return true;
  //DIAGONAL CHECK
  else if (board[0][0] === x && board[1][1] === x && board[2][2] === x)
    return true;
  else if (board[0][2] === x && board[1][2] === x && board[2][0] === x)
    return true;
  //PLAYER DOES NOT WIN!
  return false;
}

function checkDraw() {
  count = 0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (board[i][j] !== '') count += 1;
    }
  }
  console.log('count: ' + count);
  if (count === 9) return true;
  else return false;
}

// console.log(board[0][0])
