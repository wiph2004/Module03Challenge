// Assignment code here
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Nums = ["1","2","3","4","5","6","7","8","9","0"];
var Specials = ["!","@","#","$","%","|","*","*","(",")"];

function generatePassword(){

  var userChoiceLength = prompt("How long is your passowrd? (Choose between 8 and 128)");
  var userChoicelower = confirm("Would you like lower case letters?");
  var userChoiceUpper = confirm("Would you like upper case letters?");
  var userChoiceNum = confirm("Would you like numbers?");
  var userChoiceSpecial = confirm("would you like special characters?");

  console.log(userChoicelower);
  console.log(userChoiceUpper);
  console.log(userChoiceNum);
  console.log(userChoiceSpecial);
  var passwordInitial = [];

if (userChoicelower && userChoiceUpper && userChoiceNum && userChoiceSpecial){
  for(x = 0; x < userChoiceLength; x++){
    var MainPasswordList = lowercase.concat(upperCase, Nums, Specials);
    var computerRandomIndex = Math.floor(Math.random() * (MainPasswordList.length - 1));
    console.log(computerRandomIndex)
    passwordInitial.push(MainPasswordList[computerRandomIndex]);
      console.log(passwordInitial);
    
  }

}

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
