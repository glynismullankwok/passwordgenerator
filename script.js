// generate random password
///first question on length of password
var passwordLength = prompt('choose length of password from 8 to 128')
   console.log (passwordLength)
   //conditions that password length is between 8 and 128
   if (passwordLength < 8) {
     alert("Password must be at least 8 characters, try again")
   }
   else if (passwordLength > 128) {
     alert("Password must be less than 128 characters, try again")
   }
   let passwordLength = ''

  //arrays of possible password characters
  var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var symbols = ['@','#','$','*'];
  
  //mark box prompts to confirm whether or not 
  var uppercaseLetters = confirm("Do you want upper case letters?")
  var lowercaseLetters = confirm("Do you want lower case letters?")
  var numbers = confirm("Do you want numbers?")
  var symbols = confirm("Do you want symbols?")
  
  //Password choosen characters
   var password = generatePassword(uppercaseLetters, lowercaseLetters, numbers, symbols) {
     let generatePassword = ''
   }

  //loop to choose password characters
    for (var i = 0; i <=length; i++) {
      var randomPassword = generatePassword (Math.floor(Math.random() * passwordLength));
      password += chars.substring(randomPassword,randomPassword+1);
    }

    //plan to have the password characters randomly choosen, however unsure how to
    //


//document.getElementById("password").value = password
  // Add event listener to generate button
  //document.getElementById.addEventListener 
 
    
    



