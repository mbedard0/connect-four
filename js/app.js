/*------------------------ Cached Element References ------------------------*/

let board = document.getElementById('board')
let start = document.getElementById('startBtns')
let startMsg = document.getElementById('startMsg')
let reset = document.getElementById('resetBtn')
let topMsg = document.getElementById('msg')
let circles = document.querySelectorAll('.circle')

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let isGameOver, playerTurn, columnNumber, boardArr

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
      console.log(circles[idx])
    } else if (item === -1) {
      circles[idx].classList.add('gray-circle');
    }
  });
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
  columnNumber = parseInt(evt.target.id[2]);
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
  render()
}

function getColumn(columnNumber) {
  let arr = [columnNumber, columnNumber + 7, columnNumber + 14, columnNumber + 21, columnNumber + 28, columnNumber + 35];
  return arr;
}

function winConditions() {
  if () {}
  isGameOver = true
}