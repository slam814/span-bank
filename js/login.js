// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
// step 2:  get the email address  insider email input field
// alaw remember  to use .value to get text form an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;

// step 3: get password
// 3.a: set id on the html element
// 3.b: set the element 
// 3.c: get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

// DANGER: DO NOTE VERIFY email password on the client side
// step 4: verify email and password check whether valid user or not
if(email === 'abdussalam6111997@gmail.com' && password === 'password'){
   window.location.href = 'bank.html';
}
else{
    alert('! WORNING...   Incorrect your password or email, Please enter correct password or email.')
}

})