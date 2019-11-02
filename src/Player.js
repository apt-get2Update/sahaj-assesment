const FOULS_COUNT = 3; //
const SUCCESSIVE_TURN = 3;
export default class Player {
  point = 0;
  notPucketedTurns = 0;
  fouls = 0;
  getPoint() {
    return this.point;
  }
  getnotPucketedTurns() {
    return this.notPucketedTurns;
  }

  getFouls() {
    return this.fouls;
  }

  hasReachedFouls() {
    if (this.fouls >= FOULS_COUNT) {
      this.point -= 1;
      this.fouls = 0;
    }
  }
  hasReachedNonPocketTurns() {
    if (this.notPucketedTurns >= SUCCESSIVE_TURN) {
      this.point -= 1;
      this.notPucketedTurns = 0;
    }
  }
  strike(coin) {
    this.point += 1;
    coin.reduceBlackCoin(1);
  }
  multiStrike(coin) {
    this.point += 2;
    coin.reduceBlackCoin(2);
  }
  redStrike(coin) {
    if (coin.getRedCoin() !== 0) {
      this.point += 3;
      coin.reduceRedCoin();
    }
  }
  strikerStrike() {
    this.fouls += 1;
    if (this.point > 0) {
      this.point -= 1;
      this.hasReachedFouls();
    }
  }
  defunctCoin() {
    this.fouls += 1;
    if (this.point > 0) {
      this.point -= 2;
      this.hasReachedFouls();
    }
  }
  none() {
    this.notPucketedTurns += 1;
    if (this.point > 0) {
      this.hasReachedNonPocketTurns();
    }
  }
}
