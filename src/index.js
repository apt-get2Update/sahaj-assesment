const Caram = require("./Caram");

function testcode() {
  let caram = new Caram();
  //change input compination here 
  const comments = [
    [1, 1, 2, 1, 5, 1, 1, 1, 1, 1, 6],
    [2, 3, 6, 6, 6, 7, 8, 9, 10, 3, 3]
  ];
  caram.startCaram(comments);
}

testcode();
