export default class Player {
  point = 0;
  notPucketedTurns = 0;
  fouls = 0;
  setPoint(point) {
    this.point = point;
  }
  getPoint() {
    return this.point;
  }
  setnotPucketedTurns(turn) {
    this.notPucketedTurns = turn;
  }
  getnotPucketedTurns() {
    return this.notPucketedTurns;
  }
  setFouls(num) {
    this.fouls = num;
  }
  getFouls() {
    return this.fouls;
  }
  hasReachedFouls() {
    if (this.fouls === 3) {
      this.point -= 1;
      this.fouls = 0;
    }
  }
  hasReachedNonPocketTurns() {
    if (this.notPucketedTurns === 3) {
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
    this.point += 2;
    coin.reduceRedCoin();
  }
  strikerStrike() {
    this.point -= 1;
    this.fouls += 1;
  }
  defunctCoin() {
    this.point -= 2;
    this.fouls += 1;
  }
  none(player) {
    this.notPucketedTurns += 1;
  }
}
