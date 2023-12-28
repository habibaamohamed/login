



function validateEmail() {
    var emailInput = document.getElementById('Email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput)) {
        console.log("Valid email and password. ");
      return false;
    } else {
        console.log("unValid email ");
    }
    
    return true;
  }

  function validatePassword() {
    var passwordInput = document.getElementById('Password').value;
    var passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;
    
    if (!passwordRegex.test(passwordInput)) {
        console.log("Valid  password");
      return false;
    } else {
        console.log("unValid  password");
    }
    
    return true;
  }
  function validation(){
    if (validateEmail(emailInput) && validatePassword(passwordInput)) {
        console.log("Valid email and password. Proceed with login.");
      } else {
        console.log("Invalid email or password. Please try again.");
      }
    
  }