// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  //Prompt user to choose password lentght & characters type
  /* Here is a Do While loop. "Do" will prompt you to enter a number between 8 and 128. If the user cancel or don't
  enter an number will show the arlert "Enter a number between 8 and 128". And prompt to the user againg. 
  The loop will not end until the user enter a number betwen 8 and 129.
  */

do {

  var passLenght = prompt("Please choose the lenghts of your password. Enter a number between 8 and 128.")
  if (passLenght >= 8 && passLenght <= 128){
      break;
  } else 
  {
    alert("Enter a number between 8 and 128.");
  }
} while(true);


  //var upperLetters = confirm("Would you like to include upperLetters in your password? (Example: A,B,C)");
  //console.log(upperLetters);

  //var lowerLetter = confirm("Would you like to include lowerLetters in your password? (Example: a,b,c)");
  //console.log(lowerLetter);

  //var numbers = confirm("Would you like include numbers in your password?(Example: 1,2,3)");
  //console.log(numbers);

  //var specialChar = confirm("Would you like to include special characters in your password?(Example: @,#,$)");
  //console.log(specialChar);


  do {
    var upperLetters = confirm("Would you like to include upperLetters in your password? (Example: A,B,C)");
    var lowerLetter = confirm("Would you like to include lowerLetters in your password? (Example: a,b,c)");

    if (upperLetters=== false && lowerLetter=== false){
      alert( "Need to choose a character type");
    } 
  } while(upperLetters== true || lowerLetter ===true);
  

alert("continue");

  // variables for character type

  var upCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var symbols = ["#", "@", "&", "^", "~"];
  var numForPass = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //Generate Password

  function generatePassword() {
    var newPassword = "";
    var multipleChar = upCaseLetters.concat(lowCaseLetters, symbols, numForPass);

    for (var i = 0; i < passLenght; i++) {

      newPassword += getRandom(multipleChar);
      console.log('RANDOM NUMBER ----> ', newPassword);

    }

    return newPassword;

  }

  // Funtion to generate random charaters
  function getRandom(charArray) {

    var calc = Math.floor(Math.random() * charArray.length);
    var returnChar = charArray[calc]


    return returnChar;
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword); 