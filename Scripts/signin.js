const form = document.getElementById('form');
const emailAddress = document.getElementById('email-address');
const password = document.getElementById('password');
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')
const modal = document.querySelector('.modal-container');

const userData = localStorage.getItem('userBioData');
const userJsonData = JSON.parse(userData);
console.log(userJsonData);


form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (authenticateForm()) {
    modal.style.display = 'flex';
    setTimeout(() => {
      window.location.href = '/homepage.html'}, 3000);
      emailAddress.value = '';
      password.value = '';
  }
})


function authenticateForm() {
  const emailAddressValue = emailAddress.value.trim();
  const passwordValue = password.value.trim();
  let formValid = true
  
  if (userJsonData) {
    if (!Object.values(userJsonData).includes(emailAddressValue)) {
      emailError.textContent = 'Email not found!';
      setTimeout(() => emailError.textContent = '', 2000);
      formValid = false;
    }
    if (!Object.values(userJsonData).includes(passwordValue)) {
      passwordError.textContent = 'Incorrect password!';
      setTimeout(() => passwordError.textContent = '', 2000);
      formValid = false;
    }
  }

  return formValid;
  

}