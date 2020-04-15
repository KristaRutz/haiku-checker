const fs = require("fs");

// const oneSyllableWord = "sea";
// const twoSyllableWord = "sleeping";
// const twoSyllableAdverb = "deeply";

// const haiku1 = {
//   title: "Sample Haiku",
//   1: `I look at the ${oneSyllableWord}`,
//   2: `The ${oneSyllableWord} is ${twoSyllableWord} ${twoSyllableAdverb}`,
//   3: `Then I turn around`,
// };

// console.log(haiku1);

// export const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = { ...newState };
//     return newState;
//   };
// };
// export const stateChanger = storeState();
// export const line1 = storeState();
// export const line2 = storeState();
// export const line3 = storeState();

// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop]: (state[prop] || 0) + value,
//     });
//   };
// };

const dictionaryArr = fs.readFileSync("./Dictionary.txt", "utf8").split("\n");

const numberOfWords = 235887;
const randNum = () => Math.floor(Math.random() * numberOfWords);
// console.log("Random word", dictionaryArr[randNum()]);
// console.log("Random word 2", dictionaryArr[randNum()]);
// console.log("Random word 3", dictionaryArr[randNum()]);

const getNumberOfSyllables = (word) => {
  // const specials = ["eo", "io", "ia"];
  const edgeCaseNum =
    word.match(/(eo|io|ia)/gi) != null ? word.match(/(eo|io|ia)/gi).length : 0;

  if (
    word[word.length - 1].toLowerCase() == "e" &&
    word[word.length - 2].toLowerCase() != "l"
  ) {
    return edgeCaseNum + word.match(/[aeiouy]+/gi).length - 1;
  } else {
    return edgeCaseNum + word.match(/[aeiouy]+/gi).length;
  }
};

// haiku = {
//   1: generateRandomLine(5) = storeState();
//   2: generateRandomLine(7) = storeState();
// }

const generateRandomLine = (syllables) => {
  const firstWord = dictionaryArr[randNum()];
  const thisWordCount = getNumberOfSyllables(firstWord);

  if (thisWordCount > syllables) {
    // console.log(firstWord, " was too long, try again");
    return generateRandomLine(syllables);
  } else if (thisWordCount < syllables) {
    const syllablesRemaining = syllables - thisWordCount;
    return generateRandomLine(syllablesRemaining) + " " + firstWord;
  } else {
    console.log("returning ", firstWord);
    return "1." + firstWord;
  }
};

const result = generateRandomLine(13);

// console.log("----Our haiku----");
console.log("------------Final OutPut----------");
console.log(result);

// console.log("Line 2");
// console.log(generateRandomLine(7));
// console.log("Line 3");
// console.log(generateRandomLine(5));

// const recurseReverse = (string) => {
//   if (string === "") {
//     return
//   } else {
//     return recurseReverse(string.substring(1)) + string[0];
//   }
// }
