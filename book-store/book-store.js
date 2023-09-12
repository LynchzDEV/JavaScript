export const cost = (books) => {
  const discount = [1, 0.95, 0.9, 0.8, 0.75];
  const bookSet = [];
  while (books.length > 0) {
    const set = new Set(books);
    bookSet.push(set.size);
    for (let e of set) {
      books.splice(books.indexOf(e), 1);
    }
  }
  while (bookSet.includes(3) && bookSet.includes(5)) {
    bookSet.splice(bookSet.indexOf(3), 1);
    bookSet.splice(bookSet.indexOf(5), 1);
    bookSet.push(4, 4);
  }
  return bookSet.reduce((acc, cur) => acc + (cur * 800 * discount[cur - 1]), 0);
};