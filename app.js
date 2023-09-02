const form = document.getElementById("form");
const passwordLength = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = uppercaseLetters.toLocaleLowerCase();
const symbols = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
const numbers = "0123456789";
let password = "";

const handleGeneratePassword = () => {
  let characterList = "";
  if (uppercaseInput.checked) {
    characterList = characterList + uppercaseLetters;
  }
  if (lowercaseInput.checked) {
    characterList = characterList + lowercaseLetters;
  }
  if (symbolsInput.checked) {
    characterList = characterList + symbols;
  }
  if (numbersInput.checked) {
    characterList = characterList + numbers;
  }
  console.log(characterList);
  return characterList;
};

const generatePassword = () => {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleGeneratePassword();
});
