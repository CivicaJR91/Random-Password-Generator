// Assignment Code
var generateBtn = document.querySelector("#generate"); // referencing to the button

// Write password to the #password input
function writePassword() {


  //Prompt user to choose password lentght

  var passLenght = prompt("Choose the lenght of your password. Enter a number between 8 and 128."); 

    do {
      if (passLenght >= 8 && passLenght <= 128) {

        break

      } else { 

        alert("Enter a number between 8 and 128.")

      }
    }

    while (false) 

    console.log(passLenght);


  // need to finish loop to prompt




  //Confirm is user wants to include upperletters
  var upperLetters = confirm("Do you want upperLetters in your password?");
  console.log(upperLetters);

  //Confirm is user wants to include lowecaseletters
  var lowerLetter = confirm("Do you want lowerLetters in your password");
  console.log(lowerLetter);

  //Confirm is user wants to include numbers
  var numbers = confirm("Would you like to have numbers in your password");
  console.log(numbers);

  //Confirm is user wants to include special characters
  var specialChar = confirm("Would you like to have special characters in your password");
  console.log(specialChar);




  //Arrays of letters & special characters

  var upCaseLetters = ["A","B","C","D"];
  var lowCaseLetters = ["a","b","c"];
  var symbols = "#@&";
  var numForPass = "12345678";
  var randomPass = "";


  //chekc to see if the user has at least input one option

  
  }



  //check x y and z against each other 
  //if it passes, continue
  //iff it doesn't pass, call the funciton again

  if(!upCaseLetters && !lowCaseLetters && !symbols && !numForPass) {
    alert("You most choose character type")
  }



// pass contains the lenghth generate with letter numbers spec chact.
 

function generatePassword() {

   for (i = 0; i <= passLenght; i++){
   

   var calc = Math.floor(Math.random() * upCaseLetters.length);
    
   }
   console.log('RANDOM NUMBER ----> ', calc);



  







  var password = generatePassword();
  var passwordText = document.querySelector("#password");// reference text box

  passwordText.value = password;

}



// Add event listener to generate button  - DONT TOUCH
generateBtn.addEventListener("click", writePassword); 