export const score = (array, category) => {
  if (category === "yacht") {
    return array.every((d) => d === array[0]) ? 50 : 0;
  } else if (category === "ones") {
    return count(array, 1);
  } else if (category === "twos") {
    return count(array, 2) * 2;
  } else if (category === "threes") {
    return count(array, 3) * 3;
  } else if (category === "fours") {
    return count(array, 4) * 4;
  } else if (category === "fives") {
    return count(array, 5) * 5;
  } else if (category === "sixes") {
    return count(array, 6) * 6;
  } else if (category === "full house") {
    return multiple(array, 3) && multiple(array, 2) ? sum(array) : 0;
  } else if (category === "four of a kind") {
    const sumOfAllDice = sum(array);
    return sumOfAllDice >= 4 * 4 ? sumOfAllDice : 0;
  } else if (category === "little straight") {
    return isStraight(array, 1) ? 30 : 0;
  } else if (category === "big straight") {
    return isStraight(array, 2) ? 30 : 0;
  } else if (category === "choice") {
    return sum(array);
  }
};

const count = (dice, n) => dice.filter((d) => d === n).length;
const multiple = (dice, n) =>
  dice.find((d) => dice.filter((f) => f === d).length === n);
const isStraight = (dice, n) =>
  dice
    .slice()
    .sort((a, b) => a - b)
    .every((d, i) => d === i + n);
const sum = (dice) => dice.reduce((acc, cur) => acc + cur, 0);
