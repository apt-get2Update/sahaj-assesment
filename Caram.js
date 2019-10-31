import Player from "./Player";
import Coin from "./Coin";
import Strike from "./Strike";

export default class Caram {
  constructor() {
    this.players = [new Player(), new Player()];
    this.coin = new Coin();
    this.strike = new Strike();
  }
  play(player, option) {
    switch (option) {
      case 1:
        this.strike.strike(player, this.coin);
        break;
      case 2:
        this.strike.multiStrike(player, this.coin);
        break;
      case 3:
        this.strike.redStrike(player, this.coin);
        break;
      case 4:
        this.strike.strikerStrike(player, this.coin);
        break;
      case 5:
        this.strike.defunctCoin(player, this.coin);
        break;
      default:
        this.strike.none(player);
        break;
    }
    //Edge condition on foul -> 3 non pocket turn -> 3
    player.hasReachedFouls();
    player.hasReachedNonPocketTurns();
  }
  //playerCommeds [[],[]]
  startCaram(playersCommends) {
      console.log(playersCommends, "playersCommends");
    let i = 0;
    let ci = 0
    while (this.coin.black > 0 || this.coin.red > 0) {
    console.log(this.coin.black, this.coin.red );
      this.play(this.players[i % 2], playersCommends[i % 2][ci]);
      ci = i % 2  > 0 ? ci + 1 : ci;
      i = i + 1;
    }
    this.gameResult();
  }

  gameResult() {
    const p1 = this.players[0];
    const p2 = this.players[1];

    if (this.checkWinningCompination(p1.point, p2.point)) {
      console.log(
        `Player 1 won the game. Final Score: ${p1.point}-${p2.point}`
      );
    } else if (this.checkWinningCompination(p2.point, p1.point)) {
      console.log(
        `Player 2 won the game. Final Score: ${p2.point}-${p1.point}`
      );
    } else {
      console.log(`Match draw`);
    }
  }
  checkWinningCompination(p1, p2) {
    return p1 > p2 && p1 >= 5 && p1 - p2 >= 3;
  }
}
