// Setting and empty string and empty array to use for my prompts and confirms later
var passLength ; 
var passChoices = [];
// Setting the possible symbols, letters, and numbers into arrays 
var symbols = ['!','@','#','$','%','^','&','*','(',')','_','+','=',]
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var numbers = ['0','1','2','3','4','5','6','7','8','9',]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Writing the generatePassword function
function generatePassword() {
  // Setting passChoices empty in this function otherwise everytime you click generate password it'll keep adding characters to the array
  // Setting up a prompt to only receive int 
  passLength = parseInt(prompt("How long would you like your password to be? Please choose between 8 - 128 characters."));
  
  // Setting up a while loop to make sure the input from the prompt is a number and falls between the given 8 - 128 characters 
  while (isNaN(passLength) || passLength < 8 || passLength > 128){
    alert ("Please enter a number between 8 - 128!");
    passLength = parseInt(prompt("How long would you like your password to be? Please choose between 8 - 128 characters."));
  }
  // Setting passChoices empty in this function otherwise everytime you click generate password it'll keep adding characters to the array
  passChoices = [];
  
  // Setting up variables to confirm what type of characters the user wants
  // Then setting up if statements and using concat to add the symbol, numbers, and upper and lowercase arrays to my empty array  
  var confirmSymbol = confirm("Would you like symbols in your password?");
  if(confirmSymbol){
    passChoices = passChoices.concat(symbols);
  }
  
  var confirmLowercase = confirm("Would you like lowercase letters in your password?");
  if (confirmLowercase){
    passChoices = passChoices.concat(lowerCase);
  }
  
  var confirmUppercase = confirm("Would you like uppercase letters in your password?");
  if (confirmUppercase) {
    passChoices = passChoices.concat(upperCase);
  }
  
  var confirmNumbers = confirm("Would you like numbers in your password?");
  if (confirmNumbers){
    passChoices = passChoices.concat(numbers);
  }
  
  // Setting up a while statement that will run if the user chooses to cancel all the character confirmations 
  while (confirmSymbol === false && confirmLowercase === false && confirmNumbers === false && confirmUppercase === false) {
    alert("Please choose at least one of the following!")
    var confirmSymbol = confirm("Would you like symbols in your password?");
    if(confirmSymbol){
      passChoices = passChoices.concat(symbols);
    }
    var confirmLowercase = confirm("Would you like lowercase letters in your password?");
    if (confirmLowercase){
      passChoices = passChoices.concat(lowerCase);
    }
    var confirmUppercase = confirm("Would you like uppercase letters in your password?");
    if (confirmUppercase) {
      passChoices = passChoices.concat(upperCase);
    }
    var confirmNumbers = confirm("Would you like numbers in your password?");
    if (confirmNumbers){
      passChoices = passChoices.concat(numbers);
    }

 }

  // Setting randomPassword to an empty string so it can be called in my for loop 
  var randomPassword = '';

  // Setting my for loop to run the lenght given in the userprompt and 
  for (var i = 0; i < passLength; i++){
    var randomPassword = randomPassword + passChoices[Math.floor(Math.random() * passChoices.length)]
  }

  return randomPassword;
}