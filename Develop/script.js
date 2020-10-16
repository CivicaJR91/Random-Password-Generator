// Assignment Code
var generateBtn = document.querySelector("#generate"); // referencing to the button

// Write password to the #password input
function writePassword() {



  var passLenght= prompt("Choose the lenght of your password. Enter a number between 8 and 128."); {

    if ( passLenght >=8 && passLenght <= 128);
    
    else { 
      alert("Enter a number between 8 and 128.")
    }
    console.log(passLenght);
  }  
  
  var upperLetters = confirm("Do you want upperLatters in your password?");

  console.log(upperLetters);
 
  var lowerLetter = confirm ("Do you want lowerLetters in your password");
  console.log (lowerLetter);

  var numbers = confirm ("Would you like to have numbers in your password");
  console.log (numbers);

  var specialChar = confirm ("Would you like to have special characters in your password");
  console.log (specialChar);
  





  





  var password = generatePassword();
  var passwordText = document.querySelector("#password");// reference text box

   passwordText.value = password;

}



// Add event listener to generate button  - DONT TOUCH
generateBtn.addEventListener("click", writePassword); 