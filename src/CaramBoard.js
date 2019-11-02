import Player from "./Player";
import Coins from "./Coins";
import {WIN_MARGIN,MIN_WIN_POINT} from "./constants"

export default class CaramBoard {
  constructor() {
    this.players = [new Player(), new Player()];
    this.coins = new Coins();
  }
  play(player, option) {
    switch (option) {
      case 1:
        player.strike();
        this.coins.reduceBlackCoin(1);
        break;
      case 2:
        player.multiStrike(this.coin);
        this.coins.reduceBlackCoin(2);
        break;
      case 3:
        if (this.coins.getRedCoin() !== 0) {
          player.redStrike();
          this.coins.reduceRedCoin();
        }
        break;
      case 4:
        player.strikerStrike();
        break;
      case 5:
        player.defunctCoin();
        break;
      default:
        player.noPocketedAction();
        break;
    }
  }
  //playerTurns [[],[]]
  startCaram(playersTurns) {
    
    let playerIndex = 0;
    let commandIndex = 0
     while (this.coins.hasCoinLeft() && playersTurns[0].length > commandIndex && playersTurns[1].length > commandIndex
     ) {
       this.play(this.players[playerIndex % 2], playersTurns[playerIndex % 2][commandIndex]);
       commandIndex = playerIndex % 2 > 0 ? commandIndex + 1 : commandIndex;
       playerIndex +=  1;
     }
     const player1Points = this.players[0].getPoints();
     const player2Points = this.players[1].getPoints();
    return this.gameResult(player1Points,player2Points);
  }

  gameResult(player1Points,player2Points) {
    let result  = "";
    const finalScore = `Final Score: ${player1Points}-${player2Points}`;
    if (this.isWinningCombination(player1Points, player2Points)) {
      result = `Player 1 won the game.`;
    } else if (this.isWinningCombination(player2Points, player1Points)) {
      result = `Player 2 won the game.`;
    } else {
      result = `Match draw.`;
    }
    console.log(result)
    return `${result} ${finalScore}`;
  }

  isWinningCombination(player1Points, player2Points) {
    return (
      player1Points > player2Points &&
      player1Points >= MIN_WIN_POINT &&
      player1Points - player2Points >= WIN_MARGIN
    );
  }
}