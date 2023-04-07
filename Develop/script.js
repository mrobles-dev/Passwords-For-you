// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

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



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//edit below
function generatePassword (){


  return Userpassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
