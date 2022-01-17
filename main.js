'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vowels = ["a", "e", "i", "o", "u"];
let newWord = "";
let newString = "";


const getPigLatinConsonant = (newWord) => {
  let myArr = [];
  for (let i = 0; i < newWord.length; i++) {
    if(vowels.indexOf(newWord[i]) >= 0) {
      return newString + myArr.join("") + "ay";
    } else {
      myArr.push(newWord[i]);
      newString = newWord.slice(i+1);
    }
  }
}

const pigLatin = (input) => {
  let inputLowercase = input.toLowerCase().trim();
  let inputArray = inputLowercase.split(" ");
  
  for (let i = 0; i < inputArray.length; i++) {
    let word = inputArray[i];
    if (vowels.includes(word.charAt(0))) {
      inputArray[i] =  word + "yay";
    } else {
      inputArray[i] =  getPigLatinConsonant(word);
    }
  }
  return inputArray.join(" ");
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('checks for multiple words', () => {
      assert.equal(pigLatin('HeLlO RoCkEt'), 'ellohay ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
