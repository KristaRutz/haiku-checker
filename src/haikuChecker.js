/* 
OBJECTIVES: 
1. The first line is 5 syllables.
2. The second line is 7 syllables.
3. The third line is 5 syllables like the first.
4. Punctuation and capitalization are up to the poet, and need not follow the rigid rules used in structuring sentences.
5. A haiku does not have to rhyme, in fact usually it does not rhyme at all.
6. It can include the repetition of words or sounds


storeState
stateChanger
getNumberOfSyllables
counterFunction
incrementer
haikuChecker
lineChecker
symbolRejector
*/

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const stateChanger = storeState({});

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

// Function: HaikuChecker()
// input: obj
// output: true/false

const counterFunction = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};
const incrementer = counterFunction();

export const haikuChecker = (poem) => {
  const counter = incrementer();
  // base case
  if (counter == 4) {
    // more than three lines...?
    if (poem[counter]) {
      return false;
    } else {
      return true;
    }
  } else if (counter == 1 || counter == 3) {
    const lineArr = splitLine(poem[counter]);
    if (lineChecker(lineArr) != 5) {
      return false;
    } else {
      return haikuChecker(poem);
    }
  } else if (counter == 2) {
    const lineArr = splitLine(poem[counter]);
    if (lineChecker(lineArr) != 7) {
      return false;
    } else {
      return haikuChecker(poem);
    }
  } else {
    return false;
  }
};

// Function: break line input into words
// > input: stringLine
// > output: wordsArray
export const splitLine = (line) => {
  return line.split(" ");
};

// Function: lineChecker()
// loop through words and count syllables in line (of words)
// [word, word, word].checker()
// sum syllables of words in line
// > input: line as array of words?
// > output: int (syllables)
export const lineChecker = (lineArr) => {
  const countArr = lineArr.map((word) => getNumberOfSyllables(word));
  const sum = countArr.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return sum || 0;
};

// Function: check syllables in a single word
// > this will be the "meat" of our logic?
// > count syllables based on Rules of English
// > input: word string
// > output: int (syllables)
export const getNumberOfSyllables = (word) => {
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

// Edge cases: ----------------------------------------------------
// SYMBOLS: Punctuation checker e.g. "&" or "%" or
//// "The boy & the dog" --> returns 4 but should return 5
//// ke$ha
//// symbols that are vocalized in a sentence: ["$", "%", "&", "=", "@", "#", "-"]
// INTS: Int checker
//// "1" --> returns 0 but should return 1
//// "11" --> returns 0 but should return 3
// DIPTHONGS: "eo", "io", "ia" dipthongs are 2 syllables
// PLURALS & the SILENT E: silent "e" + s for plural, e.g. "lines" --> not sure we can make a rule for this.  Consider "apostrophes" and "classes"
//// "....ses" the e is pronounced.

export const symbolRejector = (word) => {
  const symbols = ["$", "%", "&", "=", "@", "#", "-"];
  const wordArray = word.split("");
  const symbolChecker = symbols.filter((x) => wordArray.includes(x));
  if ((symbolChecker.length = 0)) {
    return true;
  } else {
    return false;
  }
};
