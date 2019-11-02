export default class Coin {
  black = 9;
  red = 1;
  addBlackCoin(num) {
    this.black += num;
  }
  reduceBlackCoin(num) {
    this.black -= num;
  }
  getBlackCoin() {
    return this.black;
  }
  addRedCoin() {
    this.red = 1;
  }
  reduceRedCoin() {
    this.red = 0;
  }
  getRedCoin() {
    return this.red;
  }
  static getInstance(){
      return new Coin();
  }
}
