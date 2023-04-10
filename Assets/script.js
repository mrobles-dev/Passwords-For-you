
//need the following vars:
// array of lower case letters
// array of upper case letters
// array of numbers
//array of special characters
// to hold password were building
// poss var for mega array
//selected length of the passsword


// use .split(" ") to create arrays
//prompt for password length --> stored in var
//validate the user input --> if user choose <8 or >128 alert that they need to choose a valid password length then theyll have to restart function OR call the function that prompts for length 
// prompt --> do they want upper case letter
// prompt --> do they want lower case letter
// prompt -->  do they want numbers
// prompt --> do they want special characters
//with each prompts, you need an array of the character types
//either have separate arrays or have ONE mega array
// there needs to be at least one of each charatcer type included in password
// validate that the user has chosen at least one character set --> if not either have them start over OR recursively call the function that prompts for the char sets
//raondomly generate a cahracter from each char set as its chosen and add it to the end of the password that you're building

//EITHER keep the char sets separate OR combine to MEGA array
//if you wanna do first, randomly generate a number to tell which array you're pulling frm, then randomly gnerate a number to pull the char from the array (character willbe array [number])

// IF pushing from MEGA generate one number to pull a character from the array 

//IF pushing to mega remember to set the array BACK to empty array at the start
// .push() for an array or .concat() for a string


// for loop: 
// for (var i = password.length -1 ;, i <passwordLength; i++) IMPORTANT!!


//return the generated password


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//edit below
function generatePassword (){ 
  // var "length" looks duller but goes live after putting it in the console. check back to this if persist 
  // changed order of special characters so ";" and quotation marks didn't mess with line
  var length  = prompt ("How many characters would you like your password to contain between 8-128?");
  var passwordChars = " ";

//define these after test
if(length >= 8 && length <=128) {
  var lowerCase =confirm("Would you like to include lowercase letters?");
  var upperCase =confirm(" Would you like to include uppercase letters?");
  var numbers =confirm("Would you like to include numbers?");
  var specialCharacters =confirm("Would you like to include special characters?");

//according to comments DONT forget to make sure these are selected

if (lowerCase || upperCase || numbers || specialCharacters)

{
//ran test: prompts appear. lets generate the password
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "~`!@#$%^&*()_+={[]}|/,\";?':>.< ";


//user's answers
if (lowerCase){
  passwordChars += lowerCaseChars; }
if (upperCase){
    passwordChars += upperCaseChars;}
if (numbers) {
  passwordChars += numericChars;}
if (specialCharacters){
  passwordChars += specialChars;}


  // randomly selects for the user. Great to let com randomly select items especially using the charAt() method. See acknowledgements for reference tool
  var password ="";
  for (var i=0; i < length; i++){
    password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
    
  }
  return password;
}
  // [object HTMLTextAreaElement] appeared again refer stackoverflow doc
  //REMINDER: CHECK SPELLING. ONE MISTYPE THROWS OFF WHOLE SCRIPT
else{
  alert ("You must select at least ONE character type!");
}
}
else
{
  alert ("Please choose a valid password length!");
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
