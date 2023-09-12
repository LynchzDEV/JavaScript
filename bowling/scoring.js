const Bowling = (scoreTable) => {
  let actualTable = [];

  for (let i = 0; i < scoreTable.length; i++) {
    if (scoreTable[i] === 10) {
      actualTable.push(10, 0);
    } else {
      actualTable.push(scoreTable[i]);
    }
  }

  const staticPairs = [];
  for (let i = 0; i < actualTable.length; i += 2) {
    staticPairs.push([actualTable[i], actualTable[i + 1]]);
  }

  const pairs = staticPairs.map((pair) => {
    if (pair[0] === 10) {
      return [pair[0], pair[1], 0];
    } else {
      return pair;
    }
  });

  return pairs.reduce((acc, pair, index) => {
    if (pair[0] === 10) {
      if (pairs[index + 1]) {
        if (pairs[index + 1][0] === 10) {
          if (pairs[index + 2]) {
            return acc + 10 + 10 + pairs[index + 2][0];
          } else {
            return acc + 10 + 10;
          }
        } else {
          return acc + 10 + pairs[index + 1][0] + pairs[index + 1][1];
        }
      } else {
        return acc + 10;
      }
    } else if (pair[0] + pair[1] === 10) {
      if (pairs[index + 1]) {
        return acc + 10 + pairs[index + 1][0];
      } else {
        return acc + 10;
      }
    } else {
      return acc + pair[0] + pair[1];
    }
  }, 0);
};

console.log(
  Bowling([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])
);
