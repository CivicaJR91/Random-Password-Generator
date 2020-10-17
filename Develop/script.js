// Assignment Code
var generateBtn = document.querySelector("#generate"); // referencing to the button

// Write password to the #password input
function writePassword() {


  //Prompt user to choose password lentght

  var passLenght = prompt("Choose the lenght of your password. Enter a number between 8 and 128.");

  if (passLenght >= 8 && passLenght <= 128) {

  }

  else {

    alert("Enter a number between 8 and 128.")

  }


  console.log(passLenght);


  //Confirm is user wants to include upperletters
  var upperLetters = confirm("Do you want upperLetters in your password?");
  upperLetters;
  console.log(upperLetters);

  //Confirm is user wants to include lowecaseletters
  var lowerLetter = confirm("Do you want lowerLetters in your password");
  lowerLetter;
  console.log(lowerLetter);

  //Confirm is user wants to include numbers
  //var numbers = confirm("Would you like to have numbers in your password");
  //console.log(numbers);

  //Confirm is user wants to include special characters
  //var specialChar = confirm("Would you like to have special characters in your password");
  //console.log(specialChar);




  //Arrays of letters & special characters

  var upCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //var symbols = ["#", "@", "&", "^", "~"];
  //var numForPass = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //chekc to see if the user has at least input one option






  //check x y and z against each other 
  //if it passes, continue
  //iff it doesn't pass, call the funciton again

  //if(!upCaseLetters && !lowCaseLetters && !symbols && !numForPass) {
  //alert("You most choose character type")
  //}



  // pass contains the lenghth generate with letter numbers spec chact.

  function generatePassword() {
    var newPassword = "";
    var multipleChar = upCaseLetters.concat(lowCaseLetters);
   

      for (var i = 0; i < passLenght; i++) {

      newPassword += getRandom(multipleChar);
      console.log('RANDOM NUMBER ----> ', newPassword);

    }

    return newPassword;

  }

  function getRandom(charArray) { //will accept the aurgument. create a function to call the arrays

    var calc = Math.floor(Math.random() * charArray.length); // give a random between 0 and the lenght 
    var returnChar = charArray[calc]  //calc becomes the index passing uppercaseletters


    return returnChar;
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");// reference text box

  passwordText.value = password;

}



// Add event listener to generate button  - DONT TOUCH
generateBtn.addEventListener("click", writePassword); 