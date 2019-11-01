import Player from "./Player";
import Coin from "./Coin";

export default class Caram {
  constructor() {
    this.players = [new Player(), new Player()];
    this.coin = new Coin();
  }
  play(player, option) {
    switch (option) {
      case 1:
        player.strike(this.coin);
        break;
      case 2:
        player.multiStrike(this.coin);
        break;
      case 3:
        player.redStrike(this.coin);
        break;
      case 4:
        player.strikerStrike(this.coin);
        break;
      case 5:
        player.defunctCoin(this.coin);
        break;
      default:
        player.none();
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
     while (
       (this.coin.black > 0 || this.coin.red > 0) &&
       playersCommends[0].length > ci
     ) {
       console.log(this.coin.black, this.coin.red);
       this.play(this.players[i % 2], playersCommends[i % 2][ci]);
       ci = i % 2 > 0 ? ci + 1 : ci;
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
