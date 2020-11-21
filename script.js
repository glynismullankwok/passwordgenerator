// generate random password
function generate() {
  
  //possible password characters
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$*";
  
  //password length set to 16
  var passwordLength = 16
  var password = ""

  //loop to choose password characters
    for (i = 0; i <=length; i++) {
      var randomPassword = (Math.floor(Math.random() * chars.length));
      password += chars.substring(randomPassword,randomPassword+1);
}
}
document.getElementById("password").value = password
 

  // Add event listener to generate button
  generate.getElementById.addEventListener("click", GeneratePassword) 
    



