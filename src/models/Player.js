import { FOULS_COUNT, SUCCESSIVE_TURN } from "../utils/constants";

export default class Player {
  points = 0;
  notPocketedTurns = 0;
  fouls = 0;
  getPoints() {
    return this.points;
  }
  getNotPocketedTurns() {
    return this.notPocketedTurns;
  }

  getFouls() {
    return this.fouls;
  }

  handleFouls() {
    if (this.fouls >= FOULS_COUNT) {
      this.points -= 1;
      this.fouls = 0;
    }
  }
  hasReachedNonPocketTurns() {
    if (this.notPocketedTurns >= SUCCESSIVE_TURN) {
      this.points -= 1;
      this.notPocketedTurns = 0;
    }
  }
  strike() {
    this.points += 1;
  }
  multiStrike() {
    this.points += 2;
  }
  redStrike() {
    this.points += 3;
  }
  strikerStrike() {
    this.fouls += 1;
    if (this.points > 0) {
      this.points -= 1;
      this.handleFouls();
    }
  }
  defunctCoin() {
    this.fouls += 1;
    if (this.points > 0) {
      this.points -= 2;
      this.handleFouls();
    }
  }
  noPocketedAction() {
    this.notPocketedTurns += 1;
    if (this.points > 0) {
      this.hasReachedNonPocketTurns();
    }
  }
}
