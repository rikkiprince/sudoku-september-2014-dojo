var fs = require('fs');

var origBoard = [[7, 0, 9, 5, 0, 0, 6, 0, 4]
                ,[0, 8, 0, 7, 1, 0, 9, 0, 0]
                ,[0, 5, 0, 0, 2, 6, 0, 8, 0]
                ,[3, 0, 2, 0, 0, 0, 0, 0, 0]
                ,[1, 0, 0, 0, 0, 0, 0, 0, 8]
                ,[0, 0, 0, 0, 0, 0, 2, 0, 9]
                ,[0, 3, 0, 4, 5, 0, 0, 6, 0]
                ,[0, 0, 5, 0, 6, 2, 0, 9, 0]
                ,[6, 0, 7, 0, 0, 8, 1, 0, 5]
                ];
var inputBoard = [[7, 0, 9, 5, 0, 0, 6, 0, 4]
                ,[0, 8, 0, 7, 1, 0, 9, 0, 0]
                ,[0, 5, 0, 0, 2, 6, 0, 8, 0]
                ,[3, 0, 2, 0, 0, 0, 0, 0, 0]
                ,[1, 0, 0, 0, 0, 0, 0, 0, 8]
                ,[0, 0, 0, 0, 0, 0, 2, 0, 9]
                ,[0, 3, 0, 4, 5, 0, 0, 6, 0]
                ,[0, 0, 5, 0, 6, 2, 0, 9, 0]
                ,[6, 0, 7, 0, 0, 8, 1, 0, 5]
                ];
/*/
var origBoard = [[0, 0, 9, 0, 1, 6, 0, 0, 0]
                ,[0, 0, 7, 0, 0, 0, 0, 0, 0]
                ,[2, 0, 0, 9, 0, 8, 0, 0, 3]
                ,[3, 7, 5, 0, 0, 1, 0, 0, 4]
                ,[9, 0, 6, 8, 0, 4, 5, 0, 1]
                ,[1, 0, 0, 2, 0, 0, 9, 3, 6]
                ,[8, 0, 0, 5, 0, 9, 0, 0, 7]
                ,[0, 0, 0, 0, 0, 0, 3, 0, 0]
                ,[0, 0, 0, 3, 8, 0, 1, 0, 0]
                ];
var inputBoard = [[0, 0, 9, 0, 1, 6, 0, 0, 0]
                ,[0, 0, 7, 0, 0, 0, 0, 0, 0]
                ,[2, 0, 0, 9, 0, 8, 0, 0, 3]
                ,[3, 7, 5, 0, 0, 1, 0, 0, 4]
                ,[9, 0, 6, 8, 0, 4, 5, 0, 1]
                ,[1, 0, 0, 2, 0, 0, 9, 3, 6]
                ,[8, 0, 0, 5, 0, 9, 0, 0, 7]
                ,[0, 0, 0, 0, 0, 0, 3, 0, 0]
                ,[0, 0, 0, 3, 8, 0, 1, 0, 0]
                ];
//*/
function print(board) {
  var out = "";
  var change = false;
  for(var i=0; i<board.length; i++) {
    for(var j=0; j<board[i].length; j++) {
      if(typeof(board[i][j]) !== "object" && board[i][j] !== 0) {
      
      // board[i][j] != origBoard[i][j]) {
        change = true;
        out += " " + board[i][j];
      } else {
        out += "  ";
      }
    }
    out += "\n";
  }
  if(change) console.log(out + "\n----");
  return true;
}

function solve(board, cb) {
  console.log("Starting board");
  print(board);
  //arrayifyBoard(board);
  for(var i=0; i<board.length; i++) {
    for(var j=0; j<board[i].length; j++) {
      if(board[i][j] === 0) {
        board[i][j] = [1,2,3,4,5,6,7,8,9];
      }
    }
  }

  var changed = true;
  var count = 0;

  while(changed) {
    changed = false;
    //console.log(board[0]);
    /*if(count > 50) break;
    count++;
    print(board);*/
    //console.log(board);
    for(var row=0; row<board.length; row++) {
      for(var col=0; col<board[row].length; col++) { 
        if(typeof(board[row][col]) === "object") {
          // Anything in row
          for(var i=0; i<9; i++) {
            if(i !== row && typeof(board[i][col]) === "number") {
              board[row][col][board[i][col]-1] = false;
              changed = true;
            }
          }

          // Anything in column
          for(var i=0; i<9; i++) {
            if(i !== col && typeof(board[row][i]) === "number") {
              board[row][col][board[row][i]-1] = false;
              changed = true;
            }
          }

          // Anything in square
          var sqRow = Math.floor(row / 3) * 3
            , sqCol = Math.floor(col / 3) * 3
            ;
          
          for(var i=sqRow; i<3+sqRow; i++) {
            for(var j=sqCol; j<3+sqCol; j++) {
              if(i !== row && j !== col && typeof(board[i][j]) === "number") {
                board[row][col][board[i][j]-1] = false;
                changed = true;
              }
            }
          }

          // Can we remove the object
          var numCount = 0;
          var num = 0;
          for(var i=0; i<9; i++) {
            if(board[row][col][i] !== false) {
              num = board[row][col][i];
              numCount++;
            }
          }
          if(numCount == 1) {
            //console.log("We found something");
            board[row][col] = num;
            changed = true;
          }
        } else {

        }
      }
    }
  }
  
  //if(!boardIsSolved(board)) {
  //
  //}
  cb(board);
}

solve(inputBoard, function(a) {console.log("Final board:");print(a)});
