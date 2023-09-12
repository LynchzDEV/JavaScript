export function score(str) {
  const letterScores = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVMWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  }
  let totalScore = 0;
  for (const letter of str.toUpperCase()) {
    const scoreGroup = Object.keys(letterScores).find(group => group.includes(letter));
    totalScore += letterScores[scoreGroup];
  }
  return totalScore;
}