# _Text Analyzer_

#### By _**Cameron Abel**_

#### _Example Project Demonstrating TDD_

## Technologies Used

- JavaScript

## Description

This project serves to practice and demonstrate TDD concepts.

## Setup

- Clone this repository to your local machine
- Navigate to the top level of the directory
- Execute `node js/scripts.js`

## Known Bugs

No known bugs at this time. Report bugs [here](mailto:cameronabel@gmail.com)

## Tests

# Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter(" ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

# Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) _2022_ _Cameron Abel_
