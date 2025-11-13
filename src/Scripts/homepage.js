const mainContentContainer = document.querySelector('.container1');
const mainConSearchIcon = document.getElementById('search-icon');
const searchContainer = document.querySelector('.container2');
const searchBar = document.getElementById('search');
const home = document.getElementById('home');
const tools = document.getElementById('tools');
const locationIcon = document.getElementById('location');
const profile = document.getElementById('profile');
const searchExit = document.getElementById('search-cancel-icon');
const profileImg = document.getElementById('profile-img');

profileImg.addEventListener('click', () => {
  window.location.href = '../web_pages/profile.html';
});

searchBar.addEventListener('click', () => {
  if (mainContentContainer) {
    mainContentContainer.classList.remove('active');
    searchContainer.classList.add('active');
  }
});

mainConSearchIcon.addEventListener('click', () => {
  if (mainContentContainer) {
    mainContentContainer.classList.remove('active');
    searchContainer.classList.add('active');
  }
});

home.addEventListener('click', () => {window.location.href = '#'});
tools.addEventListener('click', () => {
  window.location.href = '../web_pages/tools.html';
});
locationIcon.addEventListener('click', () => {window.location.href = '../web_pages/location.html'});
profile.addEventListener('click', () => {window.location.href = '../web_pages/profile.html';});

searchExit.addEventListener('click', () => {
  mainContentContainer.classList.add('active');
  searchContainer.classList.remove('active');
});















// ---------------------------------Recent Searches Functionality ---------------------------------------------------
// DOM ELEMENTS
const searchToggledBar = document.getElementById('searchToggled');
const searchPageIcon = document.getElementById('js-searchIconToggled');
const recentSearches = document.querySelector('.recent-searches');
let recentSearchHtml = ['eat food', 'make dinner', 'wash dishes'];
// DOM ELEMENTS

renderRecentSearches();

searchPageIcon.addEventListener('click', addRecentSearch);

// recentSearchCancelIcon.addEventListener('click', removeRecentSearch)

function addRecentSearch() {
  let search = searchToggledBar.value;
  recentSearchHtml.push(search);
  recentSearches.innerHTML = '';
  renderRecentSearches();
}

function renderRecentSearches() {
  let search = '';
  if (recentSearchHtml) {
    for (let i = 0; i < recentSearchHtml.length; i++) {
      // recentSearchHtml.reverse();
      search = recentSearchHtml[i];

      let html = `
        <div class="recent-searches-text">
          <div class='text'> 
            <img src="../trueAssets/clock-4.png" alt="recent" class='clock'>
            <p class='current-search-word'>${search}</p> 
          </div> 
          <div class="cancel-btn">
            <img src="../trueAssets/x.png" alt="cancel-btn" id="recent-search-cancel-icon" onclick="removeRecentSearch()">
          </div> 
        </div>
      `;
      console.log(document.querySelectorAll('.cancel-btn rese'));
      
      recentSearches.innerHTML += html;

    }
    
    const recentSearchCancelIcon = document.getElementById('recent-search-cancel-icon');

    console.log(recentSearchCancelIcon);
    
    recentSearchCancelIcon.addEventListener('click', () => {
      recentSearchHtml.splice(index, 1)
      alert('Good Game!');
    })
  }

}

// ---------------------------------Recent Searches Functionality --------------------------------------------------- 

