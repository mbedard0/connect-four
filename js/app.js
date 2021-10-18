/*------------------------ Cached Element References ------------------------*/

let board = document.getElementById('board')
let start = document.getElementById('startBtns')
let startMsg = document.getElementById('startMsg')
let reset = document.getElementById('resetBtn')
let topMsg = document.getElementById('msg')
let circles = document.querySelectorAll('.circle')

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let isGameOver, playerTurn, winConditions, columnNumber, boardArr

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
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
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
  let arr = [columnNumber, columnNumber+7, columnNumber+14, columnNumber+21, columnNumber+28, columnNumber+35];
  console.log(arr)
  return arr;
}

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
