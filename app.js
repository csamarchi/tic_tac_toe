// Tic Tac Toe By Christine Samarchi

// Variables
let playerX = 0;
let playerO = 0;
let turnCounter = 0;
let wins = 0;

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
  if (board[row][col] === 'X' || board[row][col] === 'O') {
    return
  }
  if (turnCounter % 2 === 0) {
    e.target.style.background = 'blue'
    e.target.innerHTML = '<h2>' + 'X' + '</h2>';
    board[row][col] = 'X';
  } else {
    e.target.style.background= 'red';
    e.target.innerHTML = '<h2>' + 'O' + '</h2>'
    board[row][col] = 'O';
  }
  turnCounter++
  if (checkForSolution('X')) {
    playerX++
    alert('PlayerX Won')
  }
  if (checkForSolution('O')) {
    playerO++
    alert('PlayerO Won')
  }
  document.getElementById('player1').innterHTML = playerX;
  document.getElementById('player2').innterHTML = playerO;
}

const handleReset = (e) => {
  let boxes = document.getElementsByClassName("square")
  for (let i = 0; i < boxes.length; i++) {
    boxes.style.background = 'gray';
  }
  // document.getElementsByClassName('square')[0][1][2].style.background = 'gray'

}


const landing = () => {
  console.log('hello');
  $('.square').click(handleClick)
  $('.btn').click(handleReset)
}

// Logic Layer

let board = [
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
    wins++
    return true
  } else {
    return false
  }

  if (wins === 3) {
    alert('Game Over')
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
