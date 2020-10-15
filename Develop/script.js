// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var upper_Case = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","K","R","S","T","U","V","W","Y","Z"];
  var lower_Case = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","w","y","z,"];





  passwordText.value = password;

}

prompt ("Welcome To Password Generator. Please Select an Upper Case Letter From A to Z");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//var upper_Case = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","K","R","S","T","U","V","W","Y","Z"];

//function upperLetter (){
  //var regex = /^(?=.A-Z]).+$/;
  //if (regex.test(password.value)) {
    //return true
  //}
//}

//console.log(upperLetter)

  
