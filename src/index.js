const CaramBoard = require("./Caram");

function testcode() {
  let caramBoard = new CaramBoard();
  //change input compination here 
  const turns = [
    [1, 1, 2, 1, 5, 1, 1, 1, 1, 1, 6],
    [2, 3, 6, 6, 6, 7, 8, 9, 10, 3, 3]
  ];
  caramBoard.startCaram(turns);
}

testcode();
