const form = document.getElementById('form');
const fullname = document.getElementById('fullnames');
const emailAddress = document.getElementById('email-address');
const password = document.getElementById('password');
const checkBox = document.getElementById('checkbox');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const checkBoxError = document.getElementById('check-error');

const modal = document.querySelector('.modal-container');
const showPasswordIcon = document.getElementById('show-password-icon');
let show_password;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Run validation
  if (authenticateForm()) {
    // ✅ Redirect after successful validation
    modal.style.display = 'flex';
    setTimeout(() => {
      window.location.href = "/signin.html";
    }, 3000);
  }
});

function authenticateForm() {
  let formIsValid = true; // reset on every call

  const fullnameValue = fullname.value.trim();
  const emailAddressValue = emailAddress.value.trim();
  const passwordValue = password.value.trim();


  // Name validation
  if (fullnameValue === '') {
    nameError.textContent = 'Please enter your full name';
    setTimeout(() => (nameError.textContent = ''), 2000);
    formIsValid = false;
  }

  // Email validation
  if (emailAddressValue === '') {
    emailError.textContent = 'Please enter your email';
    setTimeout(() => (emailError.textContent = ''), 2000);
    formIsValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddressValue)) {
    emailError.textContent = 'Please enter a valid email address';
    setTimeout(() => (emailError.textContent = ''), 2000);
    formIsValid = false;
  }

  // Password validation
  if (passwordValue === '') {
    passwordError.textContent = 'Please enter your Password';
    setTimeout(() => (passwordError.textContent = ''), 2000);
    formIsValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = 'Password cannot be less than 6 characters';
    setTimeout(() => (passwordError.textContent = ''), 2000);
    formIsValid = false;
  }

  // Checkbox validation ✅ FIXED
  if (!checkBox.checked) {
    checkBoxError.textContent = 'Please agree to the terms and conditions';
    setTimeout(() => (checkBoxError.textContent = ''), 2000);
    formIsValid = false;
  }

  if (formIsValid) {
    // ✅ Save user data only if everything is valid
    const userData = {
      username: fullnameValue,
      userEmail: emailAddressValue,
      password: passwordValue
    };
    localStorage.setItem('userBioData', JSON.stringify(userData));
  }

  return formIsValid;
}

showPasswordIcon.addEventListener('click', () => {
  let show_password = password.value.trim();
  console.log(show_password);
})