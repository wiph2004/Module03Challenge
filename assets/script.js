// Assignment code here
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Nums = ["1","2","3","4","5","6","7","8","9","0"];
var Specials = ["!","@","#","$","%","|","*","*","(",")"];

function generatePassword(){

  var userChoiceLength = prompt("How long is your passowrd? (Choose between 8 and 128)");

  if(!userChoiceLength || userChoiceLength < 8 || userChoiceLength > 128){
    alert("Please choose within bounds.");
    return;
  }
  var userChoicelower = confirm("Would you like lower case letters?");
  var userChoiceUpper = confirm("Would you like upper case letters?");
  var userChoiceNum = confirm("Would you like numbers?");
  var userChoiceSpecial = confirm("would you like special characters?");

  var passwordInitial = [];
  var mainPasswordList = [];

    var numbers = false;
    var lower = false;
    var upper = false;
    var special = false;

  if (userChoicelower) {
    mainPasswordList = mainPasswordList.concat(lowercase);
    lower = true;
  }

  if (userChoiceUpper) {
    mainPasswordList = mainPasswordList.concat(upperCase);
    upper = true;
  }

  if (userChoiceNum) {
    mainPasswordList = mainPasswordList.concat(Nums);
    numbers = true;
  }

  if (userChoiceSpecial) {
    mainPasswordList = mainPasswordList.concat(Specials);
    special = true;
  }

  if (mainPasswordList.length === 0) {
    alert("Please choose at least one.");
    return;
  } 

  console.log("MAIN PASSWORD LIST", mainPasswordList);
  function getPassword() {
    var password = [];
    for(x = 0; x < userChoiceLength; x++) {
      var computerRandomIndex = Math.floor(Math.random() * (mainPasswordList.length - 1));
      console.log(computerRandomIndex);
      password.push(mainPasswordList[computerRandomIndex]);
      console.log(password);
    }

    return password;
  }

  var isAccurate = false;
  while(!isAccurate) {
    passwordInitial = getPassword();
    if (lower){
    if (userChoicelower && includesLower(passwordInitial)) {
      isAccurate = true;
    } else {
      isAccurate = false;
      continue;
    }
  }
  if (upper){
    if (userChoiceUpper && includesUpper(passwordInitial)) {
      isAccurate = true;
    } else {
      isAccurate = false;
      continue;
    }
  }
  if(numbers){
    if (userChoiceNum && includesNumbers(passwordInitial)) {
      isAccurate = true;
    } else {
      isAccurate = false;
      continue;
    }
  }
  if(special){
    if (userChoiceSpecial && includesSpecials(passwordInitial)) {
      isAccurate = true;
    } else {
      isAccurate = false;
      continue;
    }
  }
  }
  return passwordInitial.join('');
}

function includesLower(password) {
  for(var y=0; y < lowercase.length; y++){
    if (password.includes(lowercase[y])) {
      return true;
    }
  }
  return false;
}

function includesUpper(password) {
  for(var y=0; y < upperCase.length; y++){
    password.includes(upperCase[y])
    return true;
  }
  return false;
}

function includesNumbers(password) {
  for(var y=0; y < Nums.length; y++){
    password.includes(Nums[y])
    return true;
  }
  return false;
}

function includesSpecials(password) {
  for(var y=0; y < Specials.length; y++){
    password.includes(Specials[y])
    return true;
  }
  return false;
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
