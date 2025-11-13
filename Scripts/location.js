const home = document.getElementById('home');
const tools = document.getElementById('tools');
const locationIcon = document.getElementById('location');
const profile = document.getElementById('profile');
const searchExit = document.getElementById('search-cancel-icon');
const searchBar = document.getElementById('searchToggled');

home.addEventListener('click', () => {window.location.href = '../web_pages/homepage.html'});

tools.addEventListener('click', () => {
  window.location.href = '../web_pages/tools.html';
});

locationIcon.addEventListener('click', () => {window.location.href = '../web_pages/location.html'});

profile.addEventListener('click', () => {window.location.href = '../web_pages/profile.html';});

searchExit.addEventListener('click', () => {
  let searchContent = searchBar.value.trim();

  if (searchContent !== '' || searchContent !== null) {
    searchContent = '';
  } else {
    alert('Nothing\'s in the search bar');
  }
  
})
