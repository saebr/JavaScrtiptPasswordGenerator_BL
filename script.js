// Assignment Code
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()_+={[}]';:?><";
var generateBtn = document.querySelector("#generate");
var charSum = "";
var finalPass = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//var charLength = undefined
function generatePassword(charLength) {
  // Propts user to enter character length.
  if (charLength === undefined) {
    charLength = parseInt(prompt("How many characters would you like to use? You may use anywhere from 8-128 characters.", "8"));
    //Tells user to enter proper number for character lenth
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Please choose a length of at least 8 characters and no more than 128 characters");
      return
    }
  }  
  //Asks user if they would like to use special characters
  specialChar = confirm("Would you like to use special characters in your password?");
  if(specialChar){
    charSum = charSum.concat(special);
  }
  

  //Asks user if they would like to include numbers
  var hasNumbers = confirm("would you like to add numbers to your password?");
  if(hasNumbers){
  charSum = charSum.concat(numbers);
  }


  //Asks user if they would like to use upper case letters
  var hasUppers = confirm("Would you like to include upper case letters in your password?");
  if(hasUppers){
    charSum = charSum.concat(uppers);
    }
  

  //Asks user if they would like to user lower case letters
  var hasLowers = confirm("Would you like to include lower case letters in your password?");
  if(hasLowers){
    charSum = charSum.concat(lowers);
    }

  // DeMorgan's Law
  if (!(hasNumbers || hasUppers || hasLowers)) {
    // if (!hasNumbers && !hasUppers && !hasLowers) {
    alert("Must select atleast one type of character");

    // var charLength = charLength
    return generatePassword(charLength);
  }
// Math to randomize the the password
  for(i=0; i<charLength; i++){
    finalPass = finalPass + charSum[Math.floor(Math.random()*charSum.length)];
  }




  return finalPass;
}



