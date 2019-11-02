import Caram from "../src/Caram";

describe('Caram test', () => {
    describe("checkWinningCombination", () => {
      const caram = new Caram();
      test("should return false when both players below five points", () => {
        expect(caram.checkWinningCombination(4, 1)).toBe(false);
      });
      test("should return false when point diff below three", () => {
        expect(caram.checkWinningCombination(8, 6)).toBe(false);
      });
      test("should return false when point diff higher then equals three", () => {
        expect(caram.checkWinningCombination(8, 3)).toBe(true);
        expect(caram.checkWinningCombination(8, 5)).toBe(true);
      });
    });
    describe("gameresult", () => {
      const caram = new Caram();
      test("Match draw", () => {
        const p1 = 4,
          p2 = 1;
        expect(caram.gameResult(p1, p2)).toBe("Match draw");
      });
      test("Match draw", () => {
        const p1 = 8,
          p2 = 6;
        expect(caram.gameResult(p1, p2)).toBe("Match draw");
      });
      test("Win Player1", () => {
        const p1 = 8,
          p2 = 3;
        expect(caram.gameResult(p1,p2)).toBe(`Player 1 won the game. Final Score: ${p1}-${p2}`);
      });
      test("Win Player2", () => {
        const p1 = 5,
          p2 = 8;
        expect(caram.gameResult(p1, p2)).toBe(
          `Player 2 won the game. Final Score: ${p1}-${p2}`
        );
      });
    });
    describe('play', () => {
      test("Match draw", () => {
        const comments = [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]];
        expect(new Caram().startCaram(comments)).toBe("Match draw");
      });
      test("Win Player1", () => {
        const comments = [[1, 3, 2, 1, 6, 6, 6], [2, 5, 1, 2, 2, 1, 1]];
        expect(new Caram().startCaram(comments)).toBe(
          "Player 1 won the game. Final Score: 7-3"
        );
      });
      test("Win Player2", () => {
        const comments = [[1, 1, 5, 1, 6, 6, 6], [2, 3, 1, 2, 2, 1, 1]];
        expect(new Caram().startCaram(comments)).toBe(
          "Player 2 won the game. Final Score: 1-10"
        );
      });
    });
})
