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

function init() { // initializes and resets the board.
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
  topMsg.innerText = '';
}

function render() { // adds/removes css depending of values of the board array
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
  if (winner !== 0) {
    gameOver();
}
}

function handleStartClick(evt) { // establishes which player should start and generates high level messages
  startMsg.innerHTML = `<h3>Choose the column you'd like to drop your piece down.</h3><br><p>First to get four chips in a row wins!</p>`;
  start.style.display = 'none';
  if (evt.target.id === 'whiteStartBtn') {
    playerTurn = 1;
  } else if (evt.target.id === 'grayStartBtn') {
    playerTurn = -1;
  }
}

function handleClick(evt) { // this function is called upon clicks to the board
  if (isGameOver === true) {
    return;
  }
  let columnNumber = parseInt(evt.target.id[2]); // takes the row number from the html id
  let rowNumber, idxNum;
  let clNumArr = getColumn(columnNumber); // calls a function that returns an array of indexes for all the circles that were in the column selected
  if (evt.target.id === 'board') { // if the player clicks the board, do nothing
    return;
  } else { // this establishes the lowest number in the column and then changes its value
    for (let i = clNumArr.length - 1; i >= 0; i--) {
      if (boardArr[clNumArr[i]] === 0) {
        idxNum = (clNumArr[i])
        rowNumber = i;
        boardArr[clNumArr[i]] = playerTurn;
        playerTurn = playerTurn * -1;
        break;
      }
    }
  }
  winner = winConditions(rowNumber, columnNumber, idxNum); // evaluates whether a win condition is met (will return 0, 1 or -1)
  render()
}

function getColumn(columnNumber) { // takes the column number and returns an array of the circle index numbers in that column
  let arr = [columnNumber, columnNumber + 7, columnNumber + 14, columnNumber + 21, columnNumber + 28, columnNumber + 35];
  return arr;
}

function getRow(rowNumber) { // takes the row number and returns an array of the circle index numbers in that row
  console.log('rowNum')
  console.log(rowNumber)
  let arr = [rowNumber*7, (rowNumber*7)+1, (rowNumber*7)+2, (rowNumber*7)+3, (rowNumber*7)+4, (rowNumber*7)+5,(rowNumber*7)+6];
  return arr;
}

function getDiagonal1(idxNum, columnNumber, rowNumber) { // takes the index number, row number, and column number of a circle and returns an array of the circle index numbers up and to the right and down and to the left
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

function getDiagonal2(idxNum, columnNumber, rowNumber) { // takes the index number, row number, and column number of a circle and returns an array of the circle index numbers up and to the left and down and to the right
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

function winConditions(rowNumber, columnNumber, idxNum) { // called in handleClick function. win conditions return 1, -1, or 0
  let vertWin = didWin(getColumn(columnNumber)); // each of the four possible win conditions are called via didWin that takes an array as a parameter
  let horizontalWin = didWin(getRow(rowNumber));
  let diagWin1 = didWin(getDiagonal1(idxNum, columnNumber, rowNumber)) 
  let diagWin2 = didWin(getDiagonal2(idxNum, columnNumber, rowNumber))
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

function didWin(arr1) { // takes an array as a parameter (of circle indexes) and then converts it to a reduced array of values. then it evaluates those arrays to see if a win condition is met
  let arr2 = lengthArrValues(arr1);
  let arr3 = createConsecutiveArray(arr2)
  if (arr3.includes(4)) {
    return 1;
  } else if (arr3.includes(-4)) {
    return -1;
  } else {
    return 0
  }
}

function lengthArrValues(arr) { // returns the value of the board array values at the index numbers specified in the array taken as a parameter
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(boardArr[arr[i]]); 
  }
  console.log('lengthArrValues')
  console.log(lengthArrValues)
  return newArray;
}

function createConsecutiveArray(arr2) { // sums consecutive numbers that are equal to each other e.g. [0, 0, 1, 1, -1] becomes [0, 2, -1]
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
  console.log('consecArr')
  console.log(consecArr)
  return consecArr;
}

function gameOver() { // called after render. this function stops the game if a win condition is met
  if (winner === 1) {
    topMsg.innerText = `White has won!`;
    startMsg.innerText = '';
  } else if (winner === -1) {
    topMsg.innerText = `Gray has won!`;
    startMsg.innerText = '';
  }
}