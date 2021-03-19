// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = [".","\\", ":", ";","!","@","#","$","%","^","&","*",];


console.log(upperCase);
console.log(lowerCase);
console.log(numbers);
console.log(special);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var pwdLength = prompt("Select Password Length (Must be at least 8 characters and max of 128 characters");
  if (pwdLength < 8) {
    alert("Password must be longer than 8 character... sorry!");
    var password = "Please try again!";
    passwordText.value = password;
  return
  }
  if (pwdLength > 128) {
    alert("Password must be fewer than 128 character... sorry!")
    var password = "Please try again!";
    passwordText.value = password;
  return
  };
  var useLower = confirm("Do you want to include lowercase letters in your password?");
  var useUpper = confirm("How about UPPERCASE letters?");
  var useNumbers = confirm("Would you like to include Numbers?");
  var useSpecial = confirm("Special Characters?");

  
  
  
  console.log(pwdLength);
  console.log(typeof useLower, useLower);
  console.log(typeof useUpper, useUpper);
  console.log(typeof useNumbers, useNumbers);
  console.log(typeof useSpecial, useSpecial);

  if (!useLower && !useUpper && !useSpecial && !useNumbers) {
    alert("You must select at least one character type to include, please try again!");
    var password = "Please try again!"
    passwordText.value = password;
    return
  }

  function generatePassword() {
    var password = "";   
    var passChars = [];
    
    if (useLower){
      var passChars = passChars.concat(lowerCase);
      var random = Math.floor(Math.random() * lowerCase.length);
      password += lowerCase[random]; 
      console.log("useLower "+password);
    }
    if (useUpper){
      var passChars = passChars.concat(upperCase);
      var random = Math.floor(Math.random() * upperCase.length);
      password += upperCase[random]; 
      console.log("useUpper "+password);
    }
    if (useSpecial){
      var passChars = passChars.concat(special);
      var random = Math.floor(Math.random() * special.length);
      password += special[random]; 
      console.log("useSpecial "+password);
    }
    if (useNumbers){
      var passChars = passChars.concat(numbers);
      var random = Math.floor(Math.random() * numbers.length);
      password += numbers[random]; 
      console.log("useNumbers "+password);
    }
    console.log(passChars);

   
    

    // console.log(random, passChars[random]);
    
    // var password = passChars.from({ length: pwdLength }, pickRandom).join('');

    for (var i = 0; i < (pwdLength)-4; i++) {
      var random = Math.floor(Math.random() * passChars.length);
      password += passChars[random]; 
  }
  console.log(typeof(password));
  console.log(password);
  passwordText.value = password;
    return password;
    
  }
  

  generatePassword();


console.log(pwdLength);
console.log(generatePassword());

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



























