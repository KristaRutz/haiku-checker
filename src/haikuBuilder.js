// import { fs } from "fs";
var fs = require("fs");

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

var dictionaryArr = fs.readFileSync("./Dictionary.txt", "utf8").split("\n");
console.log(dictionaryArr[73921]);
console.log(dictionaryArr.length);

const numberOfWords = 235887;
const randNum = () => Math.floor(Math.random() * numberOfWords);
console.log("Random word", dictionaryArr[randNum()]);
console.log("Random word 2", dictionaryArr[randNum()]);
console.log("Random word 3", dictionaryArr[randNum()]);
