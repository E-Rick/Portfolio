console.log('ready');
var sidebar = document.getElementById('sidebar');
var sidebarToggle = document.getElementsByClassName('sidebar-toggle')[0];
var projects = document.getElementsByClassName('scroll-wrapper-inner')[0];
var isHorizontal = document.body.classList.contains('horizontal');

sidebarToggle.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  sidebarToggle.classList.toggle('crossed');
  document.body.classList.toggle('sidebar-open');
  sidebar.classList.toggle('sidebar-open');
}

// hide intro if scrolling
function fadeIntro() {
  var rect = firstProject.getBoundingClientRect();
  var opacity = 1;

  if (rect.left <= 550) {
    opacity = rect.left / 550 / 2;
    if (opacity < 0) {
      opacity = 0;
    }
  }
  console.log(rect.left);
  intro.style.opacity = opacity;
}

// vertical scroll only ========================================================
function replaceVerticalScrollByHorizontal(event) {
  if (event.deltaY != 0) {
    // manually scrolls horizonally instead
    window.scroll(window.scrollX + event.deltaY * 1, window.scrollY);
    // prevent vertical scroll
    event.preventDefault();
  }
  return;
}

// tilt effect =================================================================
VanillaTilt.init(document.querySelectorAll('.project'), {
  reverse: false, // reverse the tilt direction
  max: 10, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  glare: true, // if it should have a "glare" effect
  'max-glare': 0.8, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  'glare-prerender': false, // false = VanillaTilt creates the glare elements for you, otherwise
  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  'mouse-event-element': null // css-selector or link to HTML-element what will be listen mouse events
});

function horizontalScroll(event) {
  if (isHorizontal && window.innerWidth > 650 && event.deltaY != 0) {
    // manually scrolls horizonally instead
    projects.scrollLeft += event.deltaY;
    // prevent vertical scroll
    event.preventDefault();
  }
}

// start =======================================================================
window.onload = function() {
  //document.addEventListener('wheel', replaceVerticalScrollByHorizontal);
  //document.addEventListener('scroll', fadeIntro);
  //fadeIntro();
  document.addEventListener('wheel', horizontalScroll);
  const gradient = new Gradient('#gradient-canvas')
    // gradient.init('#gradient-canvas')
  gradient.initGradient('#gradient-canvas')
};
