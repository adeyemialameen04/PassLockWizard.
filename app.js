const form = document.getElementById("form");
const passwordLength = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generatedPasswordDisplay = document.getElementById("generatedPassword");

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
  if (characterList === "") {
    alert("Please select at least one field");
    return;
  }
  return characterList;
};

const generatePassword = () => {
  let characterList = handleGeneratePassword();
  const passwordLengthValue = Number(passwordLength.value);
  let password = "";
  if (passwordLengthValue < 1 || isNaN(passwordLengthValue)) {
    alert("Please put a password about one");
    return;
  }
  for (let i = 0; i < passwordLengthValue; i++) {
    const randomIndex = Math.floor(Math.random() * characterList.length);
    password += characterList.charAt(randomIndex);
  }

  const passwordArray = password.split("");

  // Copied Fisher-Yates shuffle algorithm from the web
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  password = passwordArray.join("");
  return password;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterList = handleGeneratePassword();
  if (characterList) {
    const generatedPassword = generatePassword();
    generatedPasswordDisplay.textContent = generatedPassword;
  }
});
