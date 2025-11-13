const fullScreenImage = document.querySelector('.full-screen-image-con');
const mainContentContainer = document.querySelector('.main-content-container');
let containersList = [fullScreenImage, mainContentContainer];

const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const nextBtn = document.querySelector('.next-btn');

const circles = [circle1, circle2, circle3];

// Main content text
const mainHeader = document.querySelector('.header');
const mainText = document.querySelector('.th-text');
// Main content text

setTimeout(() => {
  fullScreenImage.classList.remove('active');

  mainContentFunction();
}, 3000)

function mainContentFunction() {
  mainContentContainer.classList.add('active');

  if (circle1.classList.contains('enabled')) {
    mainHeader.textContent = 'Book A Gym';
    mainText.textContent = 'Book a nearby gym, choose the best that fits your routine';
  }

  nextBtn.addEventListener('click', () => {
  if (circle1.classList.contains('enabled')) {
    circle1.classList.remove('enabled');
    circle2.classList.add('enabled');
    mainHeader.textContent = 'Find Your Trainer';
    mainText.textContent = 'Get hands-on training from the best trainer in your city';
    mainContentContainer.style.backgroundImage = "url('../trueAssets/find-your-trainer.jpg')";
    mainContentContainer.style.backgroundSize = '290px 500px';
  } 
  else if (circle2.classList.contains('enabled')) {
    circle2.classList.remove('enabled');
    circle3.classList.add('enabled');
    mainHeader.textContent = 'Track Your Activity';
    mainText.textContent = 'Keep your heart rate up, burn the calories, feel the energy';
    mainContentContainer.style.backgroundImage = "url('../trueAssets/track-your-activity.jpg')";
    mainContentContainer.style.backgroundSize = '290px 500px';
  }
  else if (circle3.classList.contains('enabled')) {
    window.location.href = '../web_pages/get-started.html'
  }
});

}
