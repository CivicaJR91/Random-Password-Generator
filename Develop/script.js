// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  //Prompt user to choose password lentght & characters type
  /* Here is a Do-While loop. "Do will prompt you to enter a number between 8 and 128. If the user cancel or don't
  enter an number will show the arlert "Enter a number between 8 and 128". And prompt to the user againg. 
  The loop will not end until the user enter a number betwen 8 and 129.
  */

  do {

    var passLenght = prompt("Please choose the lenghts of your password. Enter a number between 8 and 128.")
    if (passLenght >= 8 && passLenght <= 128) {
      break;
    } else {
      alert("Enter a number between 8 and 128.");
    }
  } while (true);



  // use Do-While to validate user select at least one character type if not prompt it to select one
  do {
    var upperLetters = confirm("Would you like to include upperLetters in your password? (Example: A,B,C)");
    console.log(upperLetters);

    var lowerLetter = confirm("Would you like to include lowerLetters in your password? (Example: a,b,c)");
    console.log(lowerLetter);

    numbers = confirm("Would you like include numbers in your password?(Example: 1,2,3)");
    console.log(numbers);

    specialChar = confirm("Would you like to include special characters in your password?(Example: @,#,$)");
    console.log(specialChar);

    // if all character types are false tell user "Need to choos a character type"

    if (upperLetters === false && lowerLetter === false && numbers === false && specialChar === false) {
      alert("To be able to generate a password, select a character type such as: Upper or Lower Case Letter, Numbers or Special Character.");
    }
    // if user select at least one character type, proceed to generate password.
    else if (upperLetters === true || lowerLetter === true || numbers === false || specialChar === false) {
      break;
    }

  } while (true);

  // using "if" to see if the condotions above are true. If they are, the application will add the character type 

  if (upperLetters) {

    var upCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }

  if (lowerLetter) {

    var lowCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }

  if (numbers) {


    var numForPass = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  }

  if (specialChar) {
    var symbols = ["#", "@", "&", "^", "~"];

  }

  //Generate Password

  function generatePassword() {

    var newPassword = "";
    var multipleChar = (upCaseLetters + lowCaseLetters + numForPass + symbols);

    // Will tell the the statement how many rounds depending on the passlenght 
    for (var i = 0; i < passLenght; i++) {

      newPassword += getRandom(multipleChar);
      console.log('RANDOM NUMBER ----> ', newPassword);

    }

    return newPassword;

  }

  // Funtion to generate random charaters. Assigned argument charArray to the function
  function getRandom(charArray) {

    var calc = Math.floor(Math.random() * charArray.length);
    var returnChar = charArray[calc] //calc became the index for the arrays

    return returnChar;
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword); 