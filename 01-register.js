
function validatePassword(submit) {
  const password = document.getElementById('password').value;
  

  if (password.length < 8 || password.trim() === '') {
      alert('Password must be at least 8 characters long and cannot be empty.');
      submit.preventDefault(); 
  }

  
}


const form = document.getElementById('registrationForm');
const successPopup = document.getElementById('successPopup'); 

let formSubmitted = false;

form.addEventListener('submit', function(event) {
  event.preventDefault() 
  successPopup.style.display = 'block';
  formSubmitted = true;
});

function closePopup() {
  successPopup.style.display = 'none';
}

form.addEventListener('reset', function() {
  if (formSubmitted) {
    setTimeout(() => { formSubmitted = false; }, 0);
  }
});