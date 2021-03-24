


function generatePassword() {

  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  
  // Propts user to enter character length.
  charLength = prompt("How many characters would you like to use? You may use anywhere from 8-128 characters.");
  console.log(charLength);

//Tells user to enter proper number for character lenth
  if (charLength < 8 || charLength > 128){
    alert("Please choose a length of at least 8 characters and no more than 128 characters");
    return
  }

//Asks user if they would like to use special characters
  specialChar = window.confirm("Would you like to use special characters in your password?");
    console.log("Specialchars " + specialChar);

//Asks user if they would like to include numbers
  numeric = window.confirm("would you like to add numbers to your password?");
    console.log("Numbers " + numeric);

//Asks user if they would like to use upper case letters
  upperCase = window.confirm("Would you like to include upper case letters in your password?");
    console.log("Uppercase " + upperCase);

//Asks user if they would like to user lower case letters
  lowerCase = window.confirm("Would you like to include lower case letters in your password?");
    console.log("Lowercase " + lowerCase);

// if (specialChar + numeric + upperCase + lowerCase === true){
//   console.log("Wants upper, lower, number, and special characters");
// }


}

















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
