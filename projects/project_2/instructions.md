# How awesome is John Conway's Game of Life?

- **Distributed:** *November 5rd*
- **Due:** *November 17th*

### Description

Implement [Conway's Game of Life][life]. For those of you who are unwilling to follow the link, the Game of Life is 'played' on a board where spaces can be either alive or dead. The rules to determine life status are as follows:

- Any live cell with fewer than two live neighbours dies, as if caused by under-population.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by over-population.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

### Spec

- Your web application must consist of one html page displaying your version of Conway's Game of Life
- The display for it can be done with html5 Canvas or colored divs or cells in a table
- you should have at least two scripts
  - one (possibly called game-of-life.js) will contain all of the logic for running the game
  - the other (possibly called view.js) will contain all of the logic for displaying the game
  - there should be no code used for displaying in the game logic script(s)
- You should have a function responsible for generating cells (using either the factory model or constructor function)
- the user should have a few options of interaction
  - increase/decrease the speed of generations
  - pause/continue the game
  - restart the board with a random assortment of cells alive
  - change the color of alive cells
  - clicking on a cell to swap it's alive status
- needs at least 20 x 20 board

## Expectations

- NO external libraries for this one (the assignment is much easier when you can use everybody's fancy libraries)
- Work in, at most, pairs
- source code will be readable with consistent/proper/nice formatting, nice use of whitespace, and proper variable naming conventions
- website will be hosted on people.emich

## Deliverables

- All source code shall be printed out and due by 2pm on November 17th.
- Demo/walkthrough in class

## Path to success

- get the game of life code/logic complete before starting with attempting to display, use console.log() to print out the current state of the board in testing
- if you're working with a partner, have one person be responsible for displaying and the other for game of life logic, assume that the only thing display() will take is a two dimensional array of boolean values

[life]: https://en.wikipedia.org/wiki/Conway's_Game_of_Life
