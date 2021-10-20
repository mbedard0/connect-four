/*------------------------ Cached Element References ------------------------*/

let board = document.getElementById('board')
let start = document.getElementById('startBtns')
let startMsg = document.getElementById('startMsg')
let reset = document.getElementById('resetBtn')
let topMsg = document.getElementById('msg')
let circles = document.querySelectorAll('.circle')

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let isGameOver, playerTurn, boardArr

/*----------------------------- Event Listeners -----------------------------*/

start.addEventListener('click', handleStartClick)
reset.addEventListener('click', init)
board.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  startMsg.innerText = 'Start the game by picking a color.';
  start.style.display = 'block';
  boardArr = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ];
  isGameOver = false;
  playerTurn = 0;
  render();
  
}

function render() {
  boardArr.forEach((item, idx) => {
    if (item === 0) {
      circles[idx].classList.remove('white-circle');
      circles[idx].classList.remove('gray-circle');
    } else if (item === 1) {
      circles[idx].classList.add('white-circle');
    } else if (item === -1) {
      circles[idx].classList.add('gray-circle');
    }
  });
  // pass function to end game, prevent further pieces from dropping
}


function handleStartClick(evt) {
  startMsg.innerHTML = `<h3>Choose the column you'd like to drop your piece down.</h3><br><p>First to get four chips in a row wins!</p>`;
  start.style.display = 'none';
  if (evt.target.id === 'whiteStartBtn') {
    playerTurn = 1;
  } else if (evt.target.id === 'grayStartBtn') {
    playerTurn = -1;
  }
}

function handleClick(evt) {
  if (isGameOver === true) {
    return;
  }
  let columnNumber = parseInt(evt.target.id[2]);
  let rowNumber = parseInt(evt.target.id[4]);
  let clNumArr = getColumn(columnNumber);
  if (evt.target.id === 'board') {
    return;
  } else {
    for (let i = clNumArr.length - 1; i >= 0; i--) {
      if (boardArr[clNumArr[i]] === 0) {
        boardArr[clNumArr[i]] = playerTurn;
        playerTurn = playerTurn * -1
        console.log(boardArr)
        break;
      }
    }
  }
  isGameOver = winConditions(rowNumber, columnNumber);
  render()
}

function getColumn(columnNumber) {
  let arr = [columnNumber, columnNumber + 7, columnNumber + 14, columnNumber + 21, columnNumber + 28, columnNumber + 35];
  return arr;
}

function getRow(rowNumber) {
  let arr = [rowNumber, rowNumber + 6, rowNumber + 12, rowNumber + 18, rowNumber + 24, rowNumber + 30];
  return arr;
}

function columnArrValues(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(board[arr[i]]);
  }
  return newArray;
}

function winConditions(rowNumber, columnNumber) {
  if (vertWin(columnNumber) === true) {
    isGameOver = true;
  } else if (horizontalWin(rowNumber) === true) {
    isGameOver = true;
  } else if (diag1Win(arr) === true) {
    isGameOver = true;
  } else if ()
}

function vertWin(columnNumber) {
  let arr1 = getColumn(columnNumber);
  let arr2 = columnArrValues(arr1);

  let arr3 = arr2.forEach(function(a,b)  {
    if (a === b) {
      return a+b;
    }
  })
  if (arr3.includes(4) || arr3.includes(-4)) {
    return true
  }
}

function createConsecutiveArray(arr2) {
  let consecArr = [];
  let total = 0
  for (let i = 0; i < arr2.length; i++) {
    if (i+1 === arr2.length) {
      total += arr2[i];
      consecArr.push(total);
    } else if (arr2[i] === arr2[i+1]) {
      total += arr2[i];
    } else {
      consecArr.push(total+arr2[i]);
      total = 0;
    }
  }
  return consecArr;
}

// [0, 0, 0, 0, 0, 1]
// [1, 1, 1, 1, -1, -1]
// [1, -1, 1, -1, 1, 1]