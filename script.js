

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

  if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("You must choose a character type!");
    return generatePassword()
  }

  if(hasUpper){
    userChoices += upper
  }
  if(hasLower){
    userChoices += lower
  }

  if(hasNumbers) {
    userChoices += numbers
  }

  if(hasSpecial) {
    userChoices += special
  }

for (var i = 0; i < length; i++) {
  result += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
}
return result;

}