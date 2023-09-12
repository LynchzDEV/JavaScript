function countWords(str) {
    const words = {};
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]+/g; 
    const newStr = str.replace(regex, " ").toLowerCase();
    const arr = newStr.split(" ");
    arr.forEach((word) => {
        if (word !== "") {
            const cleanWord = word.replace(/'/g, '');

            if (words[cleanWord]) {
                words[cleanWord] += 1;
            } else {
                words[cleanWord] = 1;
            }
        }
    });

    const sortedWords = Object.keys(words).sort(); 
    const resultObject = {}; 
    sortedWords.forEach((word) => {
        resultObject[word] = words[word]; 
    });

    console.log(resultObject);
}
countWords("That's the password: 'PASSWORD 123'!, cried the Special Agent.\nSo I fled.");
