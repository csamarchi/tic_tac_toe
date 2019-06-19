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
  let newState = !board[row][col]
  board[row][col] = newState
  if (newState) {
    if (turnCounter % 2 === 0) {
      e.target.style.background = 'blue'
      e.target.innerHTML = 'X';
      playerX.push(event.target.id)
    } else {
      e.target.style.background= 'red';
      e.target.innerHTML = 'O';
      playerO.push(event.target.id)
    }
  } else {
    $(e.target).removeClass('clicked')
  }
  turnCounter++
  console.log(playerX, playerO)
  checkForSolution();
}

const landing = () => {
  console.log('hello');
  $('.square').click(handleClick)
}

// Logic Layer

const board = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
]

const checkForSolution = () => {
  let rows = checkRows();
  let cols = checkCols();
  let diag1 = checkDiag1();
  let diag2 = checkDiag2();

  if (rows || cols || diag1 || diag2) {
    console.log('WINNER');
    return true
  } else {
    return false
  }
}

const checkRows = () => {
  for (let i = 0; i < board.length; i++) {
    let solved = true;
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j]) {
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

const checkCols = () => {
for (let i = 0; i < board.length; i++) {
  let solved = true;
  for (let j = 0; j < board.length; j++) {
    if (!board[j][i]) {
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

const checkDiag1 = () => {

  for (let i = 0; i < board.length; i++) {
    if (!board[i][i]) {
      return false
    }
  }
  return true;
}

const checkDiag2 = () => {

  let colIndex = board.length - 1;

  for (let i = 0; i < board.length; i++) {
    if (!board[i][colIndex]) {
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
