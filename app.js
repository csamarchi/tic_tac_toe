// Tic Tac Toe By Christine Samarchi

// Variables
let playerX = [];
let playerO = [];
let turnCounter = 0;



// Board Stuff / UI Layer
const getRow = (className) => {
  let strArr = className.split(' ');
  return parseInt(strArr[1])
}

const getCol = (className) => {
  let strArr = className.split(' ');
  return parseInt(strArr[2])
}

const handleClick = (e) => {
  let row = getRow(e.target.className);
  let col = getCol(e.target.className);
  if (turnCounter % 2 === 0) {
    e.target.style.background = 'blue'
    e.target.innerHTML = 'X';
    playerX.push(event.target.id)
    board[row][col] = 'X';
  } else {
    e.target.style.background= 'red';
    e.target.innerHTML = 'O';
    playerO.push(event.target.id)
    board[row][col] = 'O';
  }
  turnCounter++
  checkForSolution('X');
  checkForSolution('O');
}

const landing = () => {
  console.log('hello');
  $('.square').click(handleClick)
}

// Logic Layer

const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

const checkForSolution = (mark) => {
  let rows = checkRows(mark);
  let cols = checkCols(mark);
  let diag1 = checkDiag1(mark);
  let diag2 = checkDiag2(mark);

  if (rows || cols || diag1 || diag2) {
    console.log('WINNER!');
    return true
  } else {
    return false
  }
}

const checkRows = (mark) => {
  for (let i = 0; i < board.length; i++) {
    let solved = true;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== mark) {
        solved = false;
        break
      }
    }
    if (solved) {
      return true
    }
  }
  return false
}

const checkCols = (mark) => {
  for (let i = 0; i < board.length; i++) {
    let solved = true;
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== mark) {
        solved = false;
        break
      }
    }
    if (solved) {
      return true
    }
  }
  return false
}

const checkDiag1 = (mark) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] !== mark) {
      return false
    }
  }
  return true
}

const checkDiag2 = (mark) => {
  let colIndex = board.length - 1;

  for (let i = 0; i < board.length; i++) {
    if (board[i][colIndex] !== mark) {
      return false
    }
    colIndex--
  }
  return true
}


// WINDOW ON LOAD
$(() => {

  landing();

})
