sudoku-september-2014-dojo
==========================

Sudoku Solver created in 100 minutes at the Southampton Code Dojo.

JavaScript, runs in node.js.

11th September 2014

http://southamptoncodedojo.com/

Approach
--------
Rather brute force approach, which seems to work with simple sudoku puzzles. Will not work with puzzles that require look-ahead. Plan was to reduce possibilities as much as possible, then start trying each possibility until a solution is found.

2D array stores the game board, and iterates over each empty square and determines which numbers could possibly go here (checking horizontally, vertically and the local 9-square). The possible numbers are stored in an array at that space in the 2D array.

This process is repeated until no changes are observed. This either results in a solved puzzle, or one which requires extra logic to solve :-)
