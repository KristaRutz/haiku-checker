import {
  getNumberOfSyllables,
  storeState,
  changeState,
  lineChecker,
  haikuChecker,
} from "../src/haikuChecker.js";

describe("getNumberOfSyllables()", () => {
  test("should return 1 syllable for 1 vowel", () => {
    expect(getNumberOfSyllables("i")).toEqual(1);
  });

  test("should return 2 syllables for 2 vowels", () => {
    expect(getNumberOfSyllables("BACKPACK")).toEqual(2);
  });

  test("should return 1 syllable for 2 vowels with silent 'e'", () => {
    expect(getNumberOfSyllables("code")).toEqual(1);
  });

  test("should return 1 syllable for 2 vowels with doubled vowels", () => {
    expect(getNumberOfSyllables("greenify")).toEqual(3);
  });
});

describe("lineChecker()", () => {
  test("should return 0 syllables for lines with no words", () => {
    const emptyArray = [];
    expect(lineChecker(emptyArray)).toEqual(0);
  });

  test("should return 1 syllable for lines with 1 1-syllable word", () => {
    const oneWordArray = ["hi"];
    expect(lineChecker(oneWordArray)).toEqual(1);
  });

  test("should return correct syllables for lines with multiple words", () => {
    const manyWordArray = ["line", "with", "many", "words"];
    expect(lineChecker(manyWordArray)).toEqual(5);
  });
});

describe("haikuChecker()", () => {
  test("should return true if a poem is a haiku", () => {
    const haiku1 = {
      title: "Sample Haiku",
      1: "Bla bla bla bla bla",
      2: "bla bla bla bla bla bla bla",
      3: "bla bla bla bla bla",
    };
    expect(haikuChecker(haiku1)).toEqual(true);
  });
  test("should return false if a poem has excess lines", () => {
    const badHaiku = {
      1: "Bla bla bla bla bla",
      2: "bla bla bla bla bla bla bla",
      3: "bla bla bla bla bla",
      4: "bla bla bla bla bla",
    };
    expect(haikuChecker(badHaiku)).toEqual(false);
  });
  test("should return false if a poem has wrong number of syllables", () => {
    const badHaiku2 = {
      1: "Bla bla bla",
      2: "bla bla bla bla bla bla bla",
      3: "bla bla bla bla bla",
    };
    expect(haikuChecker(badHaiku2)).toEqual(false);
  });
});

// describe("Haiku", () => {
//   // test('should have a value in each line', () => {
//   //  let haikuLines = new HaikuLines(1, 2, 3);
//   //   expect(haikuLines.line1).toEqual(1);
//   //   expect(haikuLines.line2).toEqual(2);
//   //   expect(haikuLines.line3).toEqual(3);
//   // });
//   test("should output number of syllables", () => {
//     // Arrange
//     const wordValue = "Epicodus";
//     const word = storeState(wordValue);

//     // Act
//     const number = getNumberOfSyllables(word);

//     // Assert
//     expect(number).toEqual(4);
//   });
// });
// // Assert
// //     expect(haikuLines.line1).toEqual(1);
// //   });
// // });

// describe("getNumberOfSyllables()", () => {
//   test("returns 1 vowel", () => {
//     expect(getNumberOfSyllables("i")).toEqual(1);
//   });
// });

// describe("getNumberOfSyllables()", () => {
//   test("returns 1 vowel", () => {
//     expect(getNumberOfSyllables("i")).toEqual(1);
//   });
// });

// describe("getNumberOfSyllables()", () => {
//   test("returns 1 vowel", () => {
//     expect(getNumberOfSyllables("i")).toEqual(1);
//   });
// });
