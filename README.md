# HAIKU CHECKER

#### An application to check haikus, hosted on [GitHub Pages](https://github.com/KristaRutz/haiku-checker-creator).

### _By \*\* \*\*. Last updated April 15, 2020_

## Description

## Installation / Set-up

This app is ready to run at this url:
https://github.com/KristaRutz/haiku-checker-creator

You can also download the repository to run this program locally.

**Download ZIP:**

- Select "Download" on the [GitHub Repository](https://github.com/KristaRutz/haiku-checker-creator) site
- Download ZIP: Open the ZIP download and extract files. The new folder will be created as "Solar-Systemwide-Calendar"
- In this folder, select the index.html document.
- Choose "Open With" > Google Chrome or another browser of your choice.
- The website is now ready to use!

**Clone:**

- Clone from command line: `git clone https://github.com/KristaRutz/haiku-checker-creator`
- Install packages from command line:
  - `npm install`
  - `npm run build`
  - `npm run start`
- Upon success, this will create a local server for the site which will reflect the current state of the program and accept user modifications.

## Technologies Used

- **JavaScript** and **jQuery**
- **Node.js** Package Manager
  - **webpack** bundler
  - **Jest** testing
  - **ESLint**
- Custom **CSS** and responsive design using Bootstrap framework
- **HTML**

## Specifications

A haiku is a poem that consists of three lines. The first has five syllables, the second has seven, and the third has five. Start by creating an application that checks whether a poem is in fact a haiku. If you have time, build out your application so that it can randomly generate haikus.

Your logic should verify that the poem has three lines.
Your logic should verify English syllable rules (and exceptions) one at a time. A quick Google search will provide information on English syllable rules.
If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.

The structure of a traditional haiku is always the same, including the following features:
Haiku:

1. The first line is 5 syllables.
2. The second line is 7 syllables.
3. The third line is 5 syllables like the first.
4. Punctuation and capitalization are up to the poet, and need not follow the rigid rules used in structuring sentences.
5. A haiku does not have to rhyme, in fact usually it does not rhyme at all.
6. It can include the repetition of words or sounds

[Syllables](http://english.glendale.cc.ca.us/phonics.rules.html):

Basic Syllable Rules

1. To find the number of syllables:
   ---count the vowels in the word,
   ---subtract any silent vowels, (like the silent "e" at the end of a word or the second vowel when two vowels a together in a syllable)
   ---subtract one vowel from every diphthong, (diphthongs only count as one vowel sound.)
   ---the number of vowels sounds left is the same as the number of syllables.
   The number of syllables that you hear when you pronounce a word is the same as the number of vowels sounds heard. For example:
   The word "came" has 2 vowels, but the "e" is silent, leaving one vowel sound andone syllable.
   The word "outside" has 4 vowels, but the "e" is silent and the "ou" is a diphthong which counts as only one sound, so this word has only two vowels sounds and therefore, two syllables.

2. Divide between two middle consonants.
   Split up words that have two middle consonants. For example:
   hap/pen, bas/ket, let/ter, sup/per, din/ner, and Den/nis. The only exceptions are the consonant digraphs. Never split up consonant digraphs as they really represent only one sound. The exceptions are "th", "sh", "ph", "th", "ch", and "wh".

3. Usually divide before a single middle consonant.
   When there is only one syllable, you usually divide in front of it, as in:
   "o/pen", "i/tem", "e/vil", and "re/port". The only exceptions are those times when the first syllable has an obvious short sound, as in "cab/in".

4. Divide before the consonant before an "-le" syllable.
   When you have a word that has the old-style spelling in which the "-le" sounds like "-el", divide before the consonant before the "-le". For example: "a/ble", "fum/ble", "rub/ble" "mum/ble" and "this/tle". The only exception to this are "ckle" words like "tick/le".

5. Divide off any compound words, prefixes, suffixes and roots which have vowel sounds.
   Split off the parts of compound words like "sports/car" and "house/boat". Divide off prefixes such at "un/happy", "pre/paid", or "re/write". Also divide off suffixes as in the words "farm/er", "teach/er", "hope/less" and "care/ful". In the word "stop/ping", the suffix is actually "-ping" because this word follows the rule that when you add "-ing" to a word with one syllable, you double the last consonant and add the "-ing".

<details>
  <summary>Expand specs for this project</summary>

| Spec                                                | Example Input         | Expected Output |
| :-------------------------------------------------- | :-------------------- | :-------------- |
| Haiku input must be an object                       | {}                    | True            |
| Haiku object contains 3 key-pair values             | {1: "", 2: "", 3: ""} | True            |
| Haiku[1], [2], and [3] are 'lines' that are strings | {1: "", 2: "", 3: ""} | True            |
| :-------------------------------------------------- | :-------------------- | :-------------- |
| Input line must be a string                         | 2                     | False           |
| Input line must be a non-null string                | " "                   | False           |
| :-------------------------------------------------- | :-------------------- | :-------------- |
| Identify a single V - vowel                         | "I"                   | 1 syllable      |
| Identify a single CV regular syllable               | "ha"                  | 1 syllable      |
| Identify a CVC syllable                             | "cat"                 | 1 syllable      |
| Identify a VC syllable                              | "if"                  | 1 syllable      |
| Identify a CVCV pattern                             | "haha"                | 2 syllables     |
| Identify as many syllables for vowels               | "banana"              | 3 syllables     |
| Identify as many syllables for vowels               | "backpack"            | 2 syllables     |

</details>

## Known Bugs

No known bugs.

## Support and contact details

Please contact me if you run into any issues or have questions, ideas or concerns. I can be contacted at <krista.rutz@pomona.edu>. Feel free to create a pull request for updates - _contributions to the code are encouraged!_

## Usage and Licensing

_This software is licensed under the MIT license_

Copyright (c) 2020 **_names_**

<details>
  <summary>View license details</summary>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details>

</details>
