/*------------------------ Cached Element References ------------------------*/

let board = document.getElementById('board')
let start = document.getElementById('startBtns')
let startMsg = document.getElementById('startMsg')
let reset = document.getElementById('resetBtn')
let topMsg = document.getElementById('msg')
let circles = document.querySelectorAll('.circle')

/*-------------------------------- Constants --------------------------------*/

const column0 = [board[0], board[6], board[12], board[18], board[24]]
const column1 = [board[1], board[7], board[13], board[19], board[25]]
const column2 = [board[2], board[8], board[14], board[20], board[26]]
const column3 = [board[3], board[9], board[15], board[21], board[27]]
const column4 = [board[4], board[10], board[16], board[22], board[28]]
const column5 = [board[5], board[11], board[17], board[23], board[29]]

const columnsAll = [column0, column1, column2, column3, column4, column5]

/*---------------------------- Variables (state) ----------------------------*/

let isGameOver, playerTurn, winConditions, columnNumber, circleId, boardArr

/*----------------------------- Event Listeners -----------------------------*/

start.addEventListener('click',handleStartClick)
reset.addEventListener('click', init)
board.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  startMsg.innerText = 'Start the game by picking a color.';
  start.style.display = 'block';
  boardArr = [
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ];
  isGameOver = false;
  // clear pieces from the board
  // reset all values to null
  // make start buttons appear
  // render();
}

function render() {
  if (boardArr === 0) {
  } else if (boardArr === 1) {
  }
  else if (boardArr === -1) {
  }
}



function handleStartClick(evt) {
  startMsg.innerHTML = `<h3>Choose the column you'd like to drop your piece down</h3>`;
  start.style.display = 'none';
  if (evt.target.id === 'whiteStartBtn') {
    playerTurn = 1;
  } else if (evt.target.id === 'blackStartBtn') {
    playerTurn = -1;
  }
}

function handleClick(evt) {
  columnNumber = parseInt(evt.target.id[2]);
  let clNumArr = getColumn(columnNumber);
  // circleId = evt.target.id.slice(4,6)
  if (evt.target.id === 'board') {
    return;
  } else {
    for (let i = clNumArr.length - 1; i >= 0; i--) {
      if (boardArr[clNumArr[i]] === 0) {
        boardArr[clNumArr[i]] = playerTurn;
        playerTurn = playerTurn*-1
        console.log(boardArr)
        break;
      }
    }
  }
  render()
}

function getColumn(columnNumber) {
  let arr = [columnNumber, columnNumber+6, columnNumber+12, columnNumber+18, columnNumber+24];
  return arr;
}
// column 0: board[0, 6, 12, 18, 24]
// column 1: board[1, 7, 13, 19, 25]
// column 2: board[2, 8, 14, 20, 26]
// column 3: board[3, 9, 15, 21, 27]
// column 4: board[4, 10, 16, 22, 28]
// column 5: board[5, 11, 17, 23, 29]

    // if (boardArr[clNumArr[4]] === 0) {
      //   boardArr[clNumArr[4]] = playerTurn;
      // }


// function render() {
//   columnNumber
// }

// function handleClick(evt) {
//   let idx = parseInt(evt.target.id);
//   console.log(idx)
//   if (isGameOver === true) {
//     return;
//   } else {
//     let colArr = board[idx];
//     console.log(colArr, board[idx])
    // let rowIdx = colArr.indexOf(0);
    // }
    // if target id === 
  // } 
  // take the id of the circle +
  // convert it to the column -> take id and then match it the column in the board array (?)
  // find the lowest null circle in that column
  // assign playerTurn value to that circle


  // let idx = parseInt(evt.target.id);
  // if (board[idx] === 1 || board[idx] === -1) {
  //   startMsg.innerText = `That circle's already been picked!`
  // } 
//   render();


// function render() {
//   let columnSelected, circleSelected;
//   if (evt.target.id === 'board') {
//     topMsg.innerText = `Try again, you need to click inside the circle to drop your piece!`;
//     return;
//   } else {
//     circleSelected = parseInt(evt.target.id)
//   } if (circleSelected === 0 || circleSelected === 6 || circleSelected === 12 || circleSelected === 18 || circleSelected === 24) {
//     columnSelected = 0;
//   }
//   if (columnSelected === 0 && playerTurn === 1) {
//     document.getElementById('24').style.cssText = 'background-color: white; color: white; border-radius: 50%; width: 50px; height: 50px;'
//   } else if (columnSelected === 0 && playerTurn === -1) {
//     document.getElementById('24').classList.add('gray-circle')
//     console.log(board)
//   }
  // = playerTurn;
//     playerTurn = playerTurn * -1;
// }

// function getColumn(idx) {
//   let arr = 
// }

// function render() {
//   circles.forEach((circle, idx) => {
//     if (board[idx] === 1) {
//       circle.innerText = 'X';
//     } else if (board[idx] === -1) {
//       circle.innerText = 'O';
//     } else {
//       circle.innerText = '';
//     }
//   }) 
//   topMsg.innerText = '';
  // isGameOver()
// }

  // needs to put pieces at the bottom of each row --> if 0-5 are picked, then 24-29 are shown

// gameOver(), redBtn(), blackBtn()
