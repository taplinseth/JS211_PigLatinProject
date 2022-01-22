let vowels = ["a", "e", "i", "o", "u"];
let newString = "";
let input = "";

const saveInput = (userInput) => {
  input = userInput;
  console.log(input);
}

const translation = (pigLatinWord) => {
  let element = document.createElement('div');
  element.innerText = pigLatinWord;
  document.body.appendChild(element);
}

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

const pigLatin = () => {
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
  let translation = inputArray.join(" ");
  console.log(translation);

  const para = document.createElement("p");
  para.innerHTML = translation;
  document.getElementById("myDIV").appendChild(para);



}