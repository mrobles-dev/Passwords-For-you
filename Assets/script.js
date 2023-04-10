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
      
      
      //see references that helped me figure this out