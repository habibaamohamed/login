
// Select the elements
var emailInput = document.getElementById('Email');
var passwordInput = document.getElementById('Password');
var loginButton = document.getElementById('loginButton');

function isValidEmail(emailInput) {
  // Email validation logic
  // Example: You can use a regular expression or any other validation method
  // Here's a simple email format check using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailInput);
}


  
  function isvalidPassword(passwordInput) {
    // Regular expression for password validation
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;
    return passwordRegex.test(passwordInput);
  }

// Add event listener to the login button
loginButton.addEventListener('click', function() {
  // Get the values from the input fields
  var email = emailInput.value;
  var password = passwordInput.value;
  if (email !== null && password !== null) {
    if (isValidEmail(emailInput) && isvalidPassword(passwordInput)) {
      // Perform login operation
      // Example: Send login request to server, set session, redirect user, etc.
      console.log('Login successful!');
    } else {
      console.log('Invalid email or password. Please try again.');
    } 
  }else {
    console.log('must not be null')
  }
});
