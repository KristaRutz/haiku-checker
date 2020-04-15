import {
  getNumberOfSyllables,
  storeState,
  changeState,
} from "../src/haikuChecker.js";

describe("getNumberOfSyllables()", () => {
  test("returns 1 vowel", () => {
    expect(getNumberOfSyllables("i")).toEqual(1);
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
