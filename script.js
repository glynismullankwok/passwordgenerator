
//arrays of possible password characters
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var symbols = '!@#$^&%*()+=-[]{}|:<>?,.';

var password = '';

var uppercaseLettersChoice = false;
var lowercaseLettersChoice = false;
var numbersChoice = false;
var symbolsChoice = false;

//function to generate password

function generate() {
  var confirmLength = '';
  //must make sure password character length between 8 and 128
  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
    if (confirmLength === null) {
      break;
    }
  }
  //user choice for character types to use in the password
  if (confirmLength) {
    if (confirm("Would you like to use uppercase characters?") == true) {
      uppercaseLettersChoice = true
    }

    if (confirm("Would you like to use lowercase characters?") == true) {
      lowercaseLettersChoice = true
    }

    if (confirm("Would you like to use numbers") == true) {
      numbersChoice = true
    }

    if (confirm("Would you like to use symbols?") == true) {
      symbolsChoice = true
    }
    //if none of the character types are selected, alerts the user to choose at least one
    if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
      alert("At least one character type must be selected")
    }
  }
  //generate random password
  var characters = '';
  characters += (uppercaseLettersChoice ? uppercaseLetters : '');
  characters += (lowercaseLettersChoice ? lowercaseLetters : '');
  characters += (numbersChoice ? numbers : '');
  characters += (symbolsChoice ? symbols : '');

  pwd = password(confirmLength, characters);

  document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
  var pwd = '';
  for (var i = 0; i < l; ++i) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}
//function to copy password to computer clipboard
function copied() {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert("The password has been copied to your clipboard!");
}







