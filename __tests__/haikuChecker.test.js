import {
  getNumberOfSyllables,
  storeState,
  changeState,
  lineChecker,
} from "../src/haikuChecker.js";

describe("getNumberOfSyllables()", () => {
  test("returns 1 syllable for 1 vowel", () => {
    expect(getNumberOfSyllables("i")).toEqual(1);
  });

  test("returns 2 syllables for 2 vowels", () => {
    expect(getNumberOfSyllables("BACKPACK")).toEqual(2);
  });

  test("returns 1 syllable for 2 vowels with silent 'e'", () => {
    expect(getNumberOfSyllables("code")).toEqual(1);
  });

  test("returns 1 syllable for 2 vowels with doubled vowels", () => {
    expect(getNumberOfSyllables("greenify")).toEqual(3);
  });
});

describe("lineChecker()", () => {
  test("returns 0 syllables for lines with no words", () => {
    const emptyArray = [];
    expect(lineChecker(emptyArray)).toEqual(0);
  });

  test("returns 1 syllable for lines with 1 1-syllable word", () => {
    const oneWordArray = ["hi"];
    expect(lineChecker(oneWordArray)).toEqual(1);
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
