class DebugBowling {
  constructor() {
    this.rolls = [];
    this.currentRoll = 0;
  }

  showRolls() {
    for (let i = 0; i < this.rolls.length; i++) {
      console.log(this.rolls[i]);
    }
  }

  roll(pins) {
    if (pins < 0) {
      throw new Error("Negative roll is invalid");
    } else if (pins > 10) {
      throw new Error("Pin count exceeds pins on the lane");
    } else if (this.currentRoll >= 21) {
      throw new Error("Cannot roll after game is over");
    } else if (
      this.currentRoll === 20 &&
      !this.isSpare(18) &&
      !this.isStrike(18)
    ) {
      throw new Error("Cannot roll after game is over");
    }

    if (pins === 10) {
      this.rolls[this.currentRoll++] = 10;
      this.rolls[this.currentRoll++] = 0;
    } else {
      this.rolls[this.currentRoll++] = pins;
    }
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        // Strike
        totalScore += 10 + this.strikeBonus(rollIndex);
        rollIndex++;
      } else if (this.isSpare(rollIndex)) {
        // Spare
        totalScore += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      } else {
        // Regular frame
        totalScore += this.frameScore(rollIndex);
        rollIndex += 2;
      }
    }

    return totalScore;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  strikeBonus(rollIndex) {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  spareBonus(rollIndex) {
    return this.rolls[rollIndex + 2];
  }

  frameScore(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }
}

const bowling = new DebugBowling();
bowling.roll(5);
console.log("roll 1");
console.log(bowling.showRolls());
bowling.roll(10);
console.log("roll 2");
console.log(bowling.showRolls());
bowling.roll(1);
console.log("roll 3");
console.log(bowling.showRolls());
