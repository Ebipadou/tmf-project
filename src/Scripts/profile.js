const backArrow = document.getElementById('back-arrow');
const logOut = document.getElementById('logout');
const editIcon = document.getElementById('edit-user-info');

const home = document.getElementById('home');
const tools = document.getElementById('tools');
const locationIcon = document.getElementById('location');
const profile = document.getElementById('profile');

backArrow.addEventListener('click', () => {
  window.location.href = '../web_pages/homepage.html';
});

editIcon.addEventListener('click', () => {
  alert('Feature Coming Soon');
})

logOut.addEventListener('click', () => {
  alert('Log Out Successfull!');
  window.location.href = '../web_pages/signin.html';
});

home.addEventListener('click', () => {window.location.href = '../web_pages/homepage.html'});

tools.addEventListener('click', () => {
  window.location.href = '../web_pages/tools.html';
});

locationIcon.addEventListener('click', () => {window.location.href = '../web_pages/location.html'});

profile.addEventListener('click', () => {window.location.href = '#';});