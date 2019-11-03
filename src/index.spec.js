import CaramBoard from "./CaramBoard";
import {inputParser} from "./utils/inputParser"

test('sample input', () => {
  let caramBoard = new CaramBoard();
  const player1Turns =  inputParser([1, 1, 2, 1, 5, 1, 1, 1, 1, 1, 6]);
  const player2Turns = inputParser([2, 3, 6, 6, 6, 6, 1, 2, 6, 3, 3]);
  const turns = [player1Turns, player2Turns];
  caramBoard.startCaram(turns);
});