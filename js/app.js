/*-------------------------------- Constants --------------------------------*/
// column 0: board[0, 6, 12, 18, 24]
// column 1: board[1, 7, 13, 19, 25]
// column 2: board[2, 8, 14, 20, 26]
// column 3: board[3, 9, 15, 21, 27]
// column 4: board[4, 10, 16, 22, 28]
// column 5: board[5, 11, 17, 23, 29]

/*---------------------------- Variables (state) ----------------------------*/

let isGameOver, playerTurn, winConditions

/*------------------------ Cached Element References ------------------------*/

let board = document.getElementById('board')
let start = document.getElementById('startBtns')
let startMsg = document.getElementById('startMsg')
let reset = document.getElementById('resetBtn')
let topMsg = document.getElementById('msg')
let circles = document.querySelectorAll('.circle')

/*----------------------------- Event Listeners -----------------------------*/

start.addEventListener('click',handleStartClick)
reset.addEventListener('click', init)
board.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  startMsg.innerText = 'Start the game by picking a color.';
  start.style.display = 'block';
  board = [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
  ];
  isGameOver = false;
  
  // clear pieces from the board
  // reset all values to null
  // make start buttons appear
  render();
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
  console.log(evt.target.id);
  // if (isGameOver === true) {
  //   return
  // }
  // let idx = parseInt(evt.target.id);
  // if (board[idx] === 1 || board[idx] === -1) {
  //   startMsg.innerText = `That circle's already been picked!`
  // } 
  let columnSelected, circleSelected;
  if (evt.target.id === 'board') {
    topMsg.innerText = `Try again, you need to click inside the circle to drop your piece!`;
    return;
  } else {
    circleSelected = parseInt(evt.target.id)
  } if (circleSelected === 0 || circleSelected === 6 || circleSelected === 12 || circleSelected === 18 || circleSelected === 24) {
    columnSelected = 0;
  }
  if (columnSelected === 0 && playerTurn === 1) {
    document.getElementById('24').style.cssText = 'background-color: white; color: white; border-radius: 50%; width: 50px; height: 50px;'
  }
  
  // = playerTurn;
    playerTurn = playerTurn * -1;
  }
  render()
  // }
// }

// function getColumn(idx) {
//   let arr = 
// }

function render() {
  circles.forEach((circle, idx) => {
    if (board[idx] === 1) {
      circle.innerText = 'X';
    } else if (board[idx] === -1) {
      circle.innerText = 'O';
    } else {
      circle.innerText = '';
    }
  }) 
  topMsg.innerText = '';
  // isGameOver()
}

  // needs to put pieces at the bottom of each row --> if 0-5 are picked, then 24-29 are shown

// gameOver(), redBtn(), blackBtn()
