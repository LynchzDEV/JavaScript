export const countWords = (str) => {
  const words = {};
  const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
  const newStr = str.replace(regex, " ").toLowerCase();
  const arr = newStr.split(" ");
  arr.forEach((word) => {
    if (word !== "") {
      if (words[word]) {
        words[word] += 1;
      } else {
        words[word] = 1;
      }
    }
  });

  const sortedWords = Object.keys(words).sort();

  const resultObject = {};
  sortedWords.forEach((word) => {
    resultObject[word] = words[word];
  });

  return resultObject;
};
