# Connect Four

<h2>Objective</h2>
- Create a two player browser-based version of the board game Connect Four.

---
<h2>Introduction</h2>

Connect Four is traditionally played on a vertical board with 7 columns and 6 rows. Players can choose the color pieces they want to start with and then drop the chips down the columns. The chips fall at the bottom of the columns they are placed in or on top of the last chip that was dropped in that column.

A player wins by "connecting" four of their pieces in a consecutive sequence -- this sequence can run horizontally, vertically, or diagonally.

A tie occurs when all open circles on the board are filled.

<h3>Background</h3>

Initially I drew from creating a tic-tac-toe game, which uses similar grid layout, but has a number of differences to start this project. The biggest differences and challenges were:

- In Connect Four, when a player chooses a circle to put their piece down, that piece should automatically go to the bottom open circle of the column that was selected.
- The board size of Connect Four is much larger than tic-tac-toe, so win conditions must be scaled up.

My first major challenge was to make it so when players clicked on the column they wanted their chip to be in, the game would automatically assign the bottom circle in the column the value of the player turn.

Once I solved this, I began working on developing functions to evaluate when a winner should be declared. To do this, each time a piece is dropped, the game evaluates whether any of the four win conditions (vertical, horizontal, and two diagonals) or the tie conditions are met. It does this by getting the board array values (which are defaulted at 0, but change to 1 or -1 if they hold a piece) surrounding the piece dropped, and then adding consecutive values that are the same (e.g. an array of [0, 0, 1, 1, -1] becomes [0, 2, -1]). If any of the resulting arrays contain 4 or -4, a winner is declared.

I first thought to create a smaller board size (5x6), which I thought would be easier to create win conditions for. However, once I developed functions for win conditions, I realized that the board size was fairly easier to scale up and decided to change to a 7x6 board size.


My initial wireframe looked like the below. It has some differences from the final product.

**Wireframe**
![Wireframe](https://i.imgur.com/Pj0zgd2.png)

![Wireframe](https://i.imgur.com/enA1zhe.png)

**Final Design**

![Start Page](https://i.imgur.com/MARWVn9.png)

![Playing Page](https://i.imgur.com/rw9htdz.png)

![Win Page](https://i.imgur.com/Q2oWXqF.png)

---
<h2>Getting Started</h2>

<h3>How to play</h3>

1. Start by loading the game in your browser. Click <a href="https://mbedard0.github.io/connect-four/">here</a> to play the game.
2. The first player can select their piece color and then make the first move. Their piece will drop to the bottom of the column they select. Players can choose any circle to click in and their piece will automatically appear at the bottom of that column.
3. Players will alternate turns dropping their pieces.
4. When a win condition is met, the game will stop and a player will be declared the winner. If all the circles in the board are filled, a tie is declared.
5. At any point in the game, or after the game has finished, the players may click the reset button to clear the board and restart at Step 2.

---
<h2>Technologies Implemented</h2>

- JavaScript
- HTML
- CSS
- Git
- Bootstrap

---

<h2>Next Steps</h2>

- Drag and drop with pieces
- Count of wins/ties/losses
- Dynamic board size options
- Sound effects when “dropping” the pieces into the board
- Add cascading of pieces when they drop into lowest possible position