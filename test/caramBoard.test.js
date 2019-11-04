import CaramBoard from "../src/models/CaramBoard";
import { inputParser } from "../src/utils/inputParser";

describe('Caram test', () => {
    describe("isWinningCombination", () => {
      const caramBoard = new CaramBoard();
      test("should return false when both players below five points", () => {
        expect(caramBoard.isWinningCombination(4, 1)).toBe(false);
      });
      test("should return false when point diff below three", () => {
        expect(caramBoard.isWinningCombination(8, 6)).toBe(false);
      });
      test("should return false when point diff higher then equals three", () => {
        expect(caramBoard.isWinningCombination(8, 3)).toBe(true);
        expect(caramBoard.isWinningCombination(8, 5)).toBe(true);
      });
    });
    describe("gameresult", () => {
      const caramBoard = new CaramBoard();
      test("Match draw", () => {
        const player1Points = 4,
          player2Points = 1;
        expect(caramBoard.gameResult(player1Points, player2Points)).toBe(
          "Match draw. Final Score: 4-1"
        );
      });
      test("Match draw", () => {
        const player1Points = 8,
          player2Points = 6;
        expect(caramBoard.gameResult(player1Points, player2Points)).toBe(
          "Match draw. Final Score: 8-6"
        );
      });
      test("Win Player1", () => {
        const player1Points = 8,
          player2Points = 3;
        expect(caramBoard.gameResult(player1Points,player2Points)).toBe(`Player 1 won the game. Final Score: ${player1Points}-${player2Points}`);
      });
      test("Win Player2", () => {
        const player1Points = 5,
          player2Points = 8;
        expect(caramBoard.gameResult(player1Points, player2Points)).toBe(
          `Player 2 won the game. Final Score: ${player1Points}-${player2Points}`
        );
      });
    });
    describe('play', () => {
      test("Match draw", () => {

        const player1Turns = inputParser([1, 1, 1, 1, 1, 1, 1]);
        const player2Turns = inputParser( [1, 1, 1, 1, 1, 1, 1]);
        expect(new CaramBoard().startCaram([player1Turns,player2Turns])).toBe(
          "Match draw. Final Score: 7-7"
        );
      });
      test("Win Player1", () => {
        const player1Turns = inputParser([1, 3, 2, 1, 6, 6, 6]);
        const player2Turns = inputParser([2, 5, 1, 2, 2, 1, 1]);
        expect(new CaramBoard().startCaram([player1Turns, player2Turns])).toBe(
          "Player 1 won the game. Final Score: 7-3"
        );
      });
      test("Win Player2", () => {
        const player1Turns = inputParser([1, 1, 5, 1, 6, 6, 6]);
        const player2Turns = inputParser([2, 3, 1, 2, 2, 1, 1]);
        expect(new CaramBoard().startCaram([player1Turns, player2Turns])).toBe(
          "Player 2 won the game. Final Score: 1-10"
        );
      });
    });
})
