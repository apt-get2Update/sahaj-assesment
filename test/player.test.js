import Player from "../src/Player";
import Coin from "../src/Coin";

describe("Testing Player", () => {
  describe("single strike", () => {
    const player = new Player();
    const coin = Coin.getInstance();
    player.strike(coin);
    test("wins one point", () => {
      expect(player.getPoint()).toBe(1);
    });
    test("decrease one coin", () => {
      expect(coin.getBlackCoin()).toBe(8);
    });
  });
  describe("muilti strike", () => {
    const player = new Player();
    const coin = Coin.getInstance();
    player.multiStrike(coin);

    test("wins two point", () => {
      expect(player.getPoint()).toBe(2);
    });

    test("decrease two coin", () => {
      expect(coin.getBlackCoin()).toBe(7);
    });
  });

  describe("red strike", () => {
    const player = new Player();
    const coin = Coin.getInstance();
    player.redStrike(coin);

    test("wins there point", () => {
      expect(player.getPoint()).toBe(3);
    });
    test("decrease red coin", () => {
      expect(coin.getRedCoin()).toBe(0);
    });
  });

  describe("Striker strike", () => {
    const player = new Player();
    const coin = Coin.getInstance();
    player.strikerStrike();
    // when the player not get pont
    test("if pont zero no pont loses", () => {
      expect(player.getPoint()).toBe(0);
    });
    test("should increased fouls count", () => {
      expect(player.getFouls()).toBe(1);
    });

    test("if pont not zero  pont loses", () => {
        player.redStrike(coin); //got three points
        player.strikerStrike();
        expect(player.getPoint()).toBe(2);
    });

    test("should increased fouls count", () => {
      expect(player.getFouls()).toBe(2);
    });

    test("three fouls reached reduce two points", () => {
      player.strikerStrike();
      expect(player.getPoint()).toBe(0);
    });

    test("after three fouls count will reset to zero", () => {
      expect(player.getFouls()).toBe(0);
    });
  });

  describe("Defunct Coin", () => {
    const player = new Player();
    const coin = Coin.getInstance();
    player.redStrike(coin);
    player.defunctCoin();

    test("loses two ponits", () => {
      expect(player.getPoint()).toBe(1);
    });

    test("should increased fouls count", () => {
      expect(player.getFouls()).toBe(1);
    }); 
  });

  describe("No pocket", () => {
    const player = new Player();
    const coin = Coin.getInstance();
    player.redStrike(coin);
    

    test("fist successive turn no point lose", () => {
        player.none();
        expect(player.getPoint()).toBe(3);
    });
    test("second successive turn no point lose", () => {
      player.none();
      expect(player.getPoint()).toBe(3);
    });
    test("turn count shoul be two ", () => {
      expect(player.getnotPucketedTurns()).toBe(2);
    });
    test("third successive turn should lose one point", () => {
      player.none();
      expect(player.getPoint()).toBe(2);
    });
    test("turn count shoul be zero", () => {
      expect(player.getnotPucketedTurns()).toBe(0);
    });
  });

});
