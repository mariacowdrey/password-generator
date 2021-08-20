

// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "=","@", "_", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// convert to Uppercase
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  passwordLength = prompt("How many characters? Choose a number between 8 and 128.");
  
  if(!passwordLength) {
    alert("Please choose a number betweeb 8 and 128.");

  // validate user input
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose a numner between 8 and 128");
  
  } else { 
    confirmLower = confirm("Include lower case letters?");
    confirmUpper = confirm("Include upper case letters?");
    confirmNumber = confirm("Include numbers?");
    confirmSpecial = confirm("Include special characters?");
  };

  // If no answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("Please choose criteria.");
  // 4 true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special); 
  }
  // 3 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
  }
  // 2 true options
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
  }
  // 1 true option
  else if (confirmLower) {
    userChoices = lowerCase;
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
  }
  else if (confirmNumber) {
    userChoices = numbers;
  }
  else if (confirmSpecial) {
    userChoices = special;
  };

  // Empty variable for the password length
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  return password; 
}


