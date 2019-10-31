export default class Strike {
  strike(player, coin) {
    player.setPoint(player.getPoint() + 1);
    coin.reduceBlackCoin(1);
  }
  multiStrike(player, coin) {
    player.setPoint(player.getPoint() + 2);
    coin.reduceBlackCoin(2);
  }
  redStrike(player, coin) {
    player.setPoint(player.getPoint() + 2);
    coin.reduceRedCoin();
  }
  strikerStrike(player) {
    player.setPoint(player.getPoint() - 1);
    player.setFouls(player.getFouls()+1);
  }
  defunctCoin(player){
    player.setPoint(player.getPoint() - 2);
    player.setFouls(player.getFouls() + 1);
  }
  none(player){
    player.setnotPucketedTurns(player.getnotPucketedTurns() + 1);
  }
}
