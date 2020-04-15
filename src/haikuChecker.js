/* 
OBJECTIVES: 
1. The first line is 5 syllables.
2. The second line is 7 syllables.
3. The third line is 5 syllables like the first.
4. Punctuation and capitalization are up to the poet, and need not follow the rigid rules used in structuring sentences.
5. A haiku does not have to rhyme, in fact usually it does not rhyme at all.
6. It can include the repetition of words or sounds
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

// const haiku = {
//   1: "Bla bla bla bla bla",
//   2: "bla bla bla bla bla bla bla",
//   3: "bla bla bla bla bla",
// };

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
  if (word[word.length - 1].toLowerCase() == "e") {
    return word.match(/[aeiouy]+/gi).length - 1;
  } else {
    return word.match(/[aeiouy]+/gi).length;
  }
};
