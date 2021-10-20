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

let winner

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
  console.log(winner)
  if (winner !== 0) {
    gameOver();
}
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
  let rowNumber;
  let idxNum = parseInt(evt.target.id.slice(8,10));
  let clNumArr = getColumn(columnNumber);
  if (evt.target.id === 'board') {
    return;
  } else {
    for (let i = clNumArr.length - 1; i >= 0; i--) {
      if (boardArr[clNumArr[i]] === 0) {
        rowNumber = i;
        boardArr[clNumArr[i]] = playerTurn;
        playerTurn = playerTurn * -1;
        console.log(boardArr)
        break;
      }
    }
  }
  winner = winConditions(rowNumber, columnNumber, idxNum);
  console.log(rowNumber)
  render()
}

function getColumn(columnNumber) {
  let arr = [columnNumber, columnNumber + 7, columnNumber + 14, columnNumber + 21, columnNumber + 28, columnNumber + 35];
  return arr;
}
// bottom row is 35 - 41
function getRow(rowNumber) {
  console.log('getRow rowNumber')
  console.log(rowNumber)
  let arr = [rowNumber*7, (rowNumber*7)+1, (rowNumber*7)+2, (rowNumber*7)+3, (rowNumber*7)+4, (rowNumber*7)+5,(rowNumber*7)+6];
  console.log('getRow returns this array')
  console.log(arr)
  return arr;
}

function getDiagonal1(idxNum, columnNumber, rowNumber) {
  let arr = [];
  let height = 5 - rowNumber;
  let colToRight = 6 - columnNumber;
  for (let i = 1; i <= Math.min(rowNumber,colToRight); i++) {
    arr.push(idxNum - (6*i));
  } 
  for (let i = 0; i <= Math.min(height,columnNumber); i++) {
    arr.push(idxNum + (6*i));
  }
  return arr.sort();
}

function getDiagonal2(idxNum, columnNumber, rowNumber) {
  let arr = [];
  let height = 5 - rowNumber;
  let colToRight = 6 - columnNumber; 
  for (let i = 1; i <= Math.min(columnNumber,rowNumber); i++) {
    arr.push(idxNum - (8*i));
  }
  for (let i = 0; i <= Math.min(height,colToRight); i++) {
    arr.push(idxNum + (8*i));
  } 
  return arr.sort();
}


function winConditions(rowNumber, columnNumber, idxNum) {
  console.log('rowNumber at winCondition')
  console.log(rowNumber)
  let vertWin = didWin(getColumn(columnNumber));
  let horizontalWin = didWin(getRow(rowNumber)); // currently doesn't work
  console.log(didWin(getRow(rowNumber)))
  let diagWin1 = didWin(getDiagonal1(idxNum))
  let diagWin2 = didWin(getDiagonal2(idxNum)) // currently doesn't work
  if (vertWin !== 0) {
    isGameOver = true;
    return vertWin
  } else if (horizontalWin !== 0) {
    isGameOver = true;
    return horizontalWin
  } else if (diagWin1 !== 0) {
    isGameOver = true;
    return diagWin1
  } else if (diagWin2 !== 0) {
    isGameOver = true;
    return diagWin2
  } else {
    return 0
  }
}

function lengthArrValues(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(boardArr[arr[i]]); // does this just need to be the idx num?
  }
  console.log('newArray at lengthArrValues')
  console.log(newArray)
  return newArray;
}

function didWin(arr1) {
  let arr2 = lengthArrValues(arr1);
  console.log('arr 2 at didWin')
  console.log(arr2)
  let arr3 = createConsecutiveArray(arr2)
  if (arr3.includes(4)) {
    return 1;
  } else if (arr3.includes(-4)) {
    return -1;
  } else {
    return 0
  }
}

function createConsecutiveArray(arr2) {
  let consecArr = [];
  let total = 0;
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

function gameOver() {
  if (winner === 1) {
    topMsg.innerText = `White has won!`;
  } else if (winner === -1) {
    topMsg.innerText = `Gray has won!`
  }
}