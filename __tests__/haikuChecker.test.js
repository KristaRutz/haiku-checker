import {
  getNumberOfSyllables,
  storeState,
  changeState,
  lineChecker,
  haikuChecker,
  symbolRejector,
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
    expect(getNumberOfSyllables("coddle")).toEqual(2);
  });

  test("should return 1 syllable for 2 vowels with doubled vowels", () => {
    expect(getNumberOfSyllables("greenify")).toEqual(3);
  });

  test("should return 2 syllable for special dipthongs like ia", () => {
    expect(getNumberOfSyllables("indiana")).toEqual(4);
    expect(getNumberOfSyllables("leo")).toEqual(2);
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

describe("symbolRejector()", () => {
  test("should return false if word has specified symbols", () => {
    // Arrange
    const word = "$money";

    // Act
    const wordResult = symbolRejector(word);

    // Assert
    expect(wordResult).toEqual(false);
  });
});

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
