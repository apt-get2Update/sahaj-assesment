import Player from "../src/Player";

describe("Testing Player", () => {
  describe("single strike", () => {
    const player = new Player();
    player.strike();
    test("wins one point", () => {
      expect(player.getPoints()).toBe(1);
    });
  });
  describe("muilti strike", () => {
    const player = new Player();
    player.multiStrike();
    test("wins two point", () => {
      expect(player.getPoints()).toBe(2);
    });
  });

  describe("red strike", () => {
    const player = new Player();
    player.redStrike();
    test("wins there point", () => {
      expect(player.getPoints()).toBe(3);
    });
  });

  describe("Striker strike", () => {
    const player = new Player();
    player.strikerStrike();
    // when the player not get pont
    test("if pont zero no pont loses", () => {
      expect(player.getPoints()).toBe(0);
    });
    test("should increased fouls count", () => {
      expect(player.getFouls()).toBe(1);
    });

    test("if pont not zero  pont loses", () => {
        player.redStrike(); //got three points
        player.strikerStrike();
        expect(player.getPoints()).toBe(2);
    });

    test("should increased fouls count", () => {
      expect(player.getFouls()).toBe(2);
    });

    test("three fouls reached reduce two points", () => {
      player.strikerStrike();
      expect(player.getPoints()).toBe(0);
    });

    test("after three fouls count will reset to zero", () => {
      expect(player.getFouls()).toBe(0);
    });
  });

  describe("Defunct Coin", () => {
    const player = new Player();
    player.redStrike();
    player.defunctCoin();

    test("loses two ponits", () => {
      expect(player.getPoints()).toBe(1);
    });

    test("should increased fouls count", () => {
      expect(player.getFouls()).toBe(1);
    }); 
  });

  describe("No pocket", () => {
    const player = new Player();
    player.redStrike();
    

    test("fist successive turn no point lose", () => {
        player.noPocketedAction();
        expect(player.getPoints()).toBe(3);
    });
    test("second successive turn no point lose", () => {
      player.noPocketedAction();
      expect(player.getPoints()).toBe(3);
    });
    test("turn count shoul be two ", () => {
      expect(player.getNotPocketedTurns()).toBe(2);
    });
    test("third successive turn should lose one point", () => {
      player.noPocketedAction();
      expect(player.getPoints()).toBe(2);
    });
    test("turn count shoul be zero", () => {
      expect(player.getNotPocketedTurns()).toBe(0);
    });
  });

});
