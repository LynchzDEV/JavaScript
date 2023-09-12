export const sum = (numbers, limit) => {
  let list = new Set();
  numbers.forEach((element) => {
    for (let i = 0; i < limit; i++) {
      if (i % element === 0) {
        list.add(i);
      }
    }
  });
  if (list.size !== 0 || list.size !== 1) {
    let result = 0;
    list.forEach((element) => {
      result = result + element;
    });
    return result;
  } else {
    return 0;
  }
};
