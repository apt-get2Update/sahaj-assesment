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
  hasReachedFouls(){
      if(this.fouls === 3){
          this.point -=1;
          this.fouls = 0;
      }
  }
  hasReachedNonPocketTurns(){
      if (this.notPucketedTurns === 3) {
        this.point -= 1;
        this.notPucketedTurns = 0;
      }
  }
}