const contentBox1 = document.getElementById('content-box-1');
const contentBox2 = document.getElementById('content-box-2');
const contentBox3 = document.getElementById('content-box-3');
const contentBox4 = document.getElementById('content-box-4');

const home = document.getElementById('home');
const tools = document.getElementById('tools');
const locationIcon = document.getElementById('location');
const profile = document.getElementById('profile');

contentBox1.addEventListener('click', () => {
  alert('Clicked');
  window.location.href = '';
})
contentBox2.addEventListener('click', () => {
  alert('Clicked');
  window.location.href = '';
})
contentBox3.addEventListener('click', () => {
  alert('Clicked');
  window.location.href = '';
})
contentBox4.addEventListener('click', () => {
  alert('Clicked');
  window.location.href = '';
})

home.addEventListener('click', () => {window.location.href = '../web_pages/homepage.html'});

tools.addEventListener('click', () => {
  window.location.href = '#';
});

locationIcon.addEventListener('click', () => {window.location.href = '../web_pages/location.html'});

profile.addEventListener('click', () => {window.location.href = '../web_pages/profile.html';});

