// Rotate Rectangle inside of circle
const rectangle = document.querySelector('.rectangle');
const section = document.querySelector('.section');
const navList = document.querySelector('.nav-list');

const barsButton = document.querySelector('.fa-bars');
// Event: Rotate when click the bars Button
barsButton.addEventListener('click', () => {
  rectangle.classList.add('active');
  section.classList.add('active');
  navList.classList.add('active');
});

// Event: ReRotate when click the times Button
const timesButton = document.querySelector('.fa-times');
timesButton.addEventListener('click', () => {
  rectangle.classList.remove('active');
  section.classList.remove('active');
  navList.classList.remove('active');
});

// Event: Rotate the section when click the bars Button
