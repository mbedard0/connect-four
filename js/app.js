/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

let isGameOver, playerTurn, winConditions

/*------------------------ Cached Element References ------------------------*/

let board = document.querySelector('#board')
let start = document.getElementById('startBtns')
let startMsg = document.getElementById('startMsg')
let reset = document.getElementById('resetBtn')
// let rows = …
// let msg1 = …
// let resetBtn = …
// let redBtn = …
// let blackBtn = …

/*----------------------------- Event Listeners -----------------------------*/

start.addEventListener('click',handleStartClick)
reset.addEventListener('click',init)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  startMsg.innerText = 'Start the game by picking a color.';
  start.style.display = 'block';
  // clear pieces from the board
  // reset all values to null
  // make start buttons appear
  }

function handleStartClick(evt) {
  startMsg.innerHTML = `<h3>Choose the row you'd like to drop your piece down</h3>`;
  start.style.display = 'none';
  if (evt.target.id === 'whiteStartBtn') {
    let playerTurn = 1;
    return playerTurn;
  } else if (evt.target.id === 'blackStartBtn') {
    let playerTurn = -1;
    return playerTurn;
  }
}

function handleChoiceClick(){
// take in
}

function render(){} 

// gameOver(), redBtn(), blackBtn()
