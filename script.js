

// Assignment Code
var generateBtn = document.querySelector("#generate");


var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@.#$%&*/+=_";
var userChoices = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword(){

  var result = "";

  var length = prompt("How many characters? Choose a number between 8 and 128.");
  if(isNaN(length)){
    alert("You must enter a number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose a number between 8 - 128!");
    return generatePassword()
  }
  // user criteria prompt
  var hasUpper = confirm("Include upper case letters?");
  var hasLower = confirm("Include lower case letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  if(!hasUpper && !hasLower && !hasNumbers && !hasSpecial){
    alert("You must choose a character type!");
    return generatePassword()
  }
  // 4 true options
  else if(hasUpper && hasLower && hasNumbers & hasSpecial){
    userChoices = upper.concat(lower, numbers, special);
  }

  // 3 true options
  else if(hasUpper && hasLower && hasNumbers){
    userChoices = upper.concat(lower, numbers);
  }
  else if(hasUpper && hasLower && hasSpecial){
    userChoices = upper.concat(lower, special);
  }
  else if (hasUpper && hasNumbers && hasSpecial){
    userChoices = upper.concat(numbers, special);
  }
  else if(hasLower && hasNumbers && hasSpecial){
    userChoices = lower.concat(numbers, special);
  }

  // 2 true options
  else if(hasUpper && hasLower){
    userChoices = upper.concat(lower);
  }
  else if(hasUpper && hasNumbers){
    userChoices = upper.concat(numbers);
  }
  else if(hasUpper && hasSpecial){
    userChoices = upper.concat(special);
  }
  else if(hasLower && hasNumbers){
    userChoices = lower.concat(numbers);
  }
  else if(hasLower && hasSpecial){
    userChoices = lower.concat(special);
  }
  else if(hasNumbers && hasSpecial){
    userChoices = numbers.concat(special);
  }
  
  // 1 true option
  else if(hasUpper){
    userChoices = upper;
  }
  else if(hasLower){
    userChoices = lower;
  }
  else if(hasNumbers){
    userChoices = numbers;
  }
  else if(hasSpecial){
    userChoices = special;
  }

for (var i = 0; i < length; i++) {
  result += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
}
return result;
}