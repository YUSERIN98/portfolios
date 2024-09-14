// intro
const introMove = document.querySelector('.intro');
const introTitle = document.querySelector('.intro .intro__title');
const introkvisualTit = document.querySelector('.kvisual .kivisual-textWrap .title');

introTitle.addEventListener('animationend', () => {
    introMove.style.animation = 'introMove 0.4s ease-in-out forwards'; // Start the second animation
});

introMove.addEventListener('animationend', () => {
  introkvisualTit.style.animation = 'kvisualTextMove 4s ease-in-out 1s forwards'; // Start the second animation
});





// header scroll effect
let lastScrollTop = 0;
const menu = document.querySelector('.header');

window.onscroll = function() {
    handleScroll();
};

function handleScroll() {
    const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        menu.classList.add('hidden');
    } else {
        // Scrolling up
        menu.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
}

// nav bar
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}



//about scroll background effect
const sections = document.querySelectorAll('.bg-section');

let config = {
  rootMargin: '0px',
  threshold: 0
};

let observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    } 

  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const current = document.querySelector('.bg-section.active');
  const next = entry.target;

  if (current) {
    current.classList.remove('active');
  }
  if (next) {
    next.classList.add('active');
    document.body.style.setProperty("--color-bg", next.dataset.bgcolor);
  }
}

// scrolling nav
document.addEventListener('scroll', function () {
  var stickyCon = document.querySelector('.nav-wrap');
  var stickyConPos = stickyCon.getBoundingClientRect().bottom;

  var anchor01 = document.getElementById('anchor01');
  var anchor02 = document.getElementById('anchor02');
  var anchor03 = document.getElementById('anchor03');
  var anchor04 = document.getElementById('anchor04');
  var anchor05 = document.getElementById('anchor05');

  var anchor01El = document.getElementById('cont01');
  var anchor02El = document.getElementById('cont02');
  var anchor03El = document.getElementById('cont03');
  var anchor04El = document.getElementById('cont04');
  var anchor05El = document.getElementById('cont05');
  
  var anchor01Pos = anchor01El.getBoundingClientRect().top;
  var anchor02Pos = anchor02El.getBoundingClientRect().top;
  var anchor03Pos = anchor03El.getBoundingClientRect().top;
  var anchor04Pos = anchor04El.getBoundingClientRect().top;
  var anchor05Pos = anchor05El.getBoundingClientRect().top;

  if(stickyConPos > anchor01Pos && stickyConPos < anchor02Pos){
    anchor01.classList.add('on');
  }else{
    anchor01.classList.remove('on');
  }

  if(stickyConPos > anchor02Pos && stickyConPos < anchor03Pos){
    anchor02.classList.add('on');
  }else{
    anchor02.classList.remove('on');
  }

  if(stickyConPos > anchor03Pos && stickyConPos < anchor04Pos){
    anchor03.classList.add('on');
  }else{
    anchor03.classList.remove('on');
  }

  if(stickyConPos > anchor04Pos && stickyConPos < anchor05Pos){
    anchor04.classList.add('on');
  }else{
    anchor04.classList.remove('on');
  }

  if(stickyConPos > anchor05Pos && stickyConPos < anchor05El.getBoundingClientRect().bottom){
    anchor05.classList.add('on');
  }else{
    anchor05.classList.remove('on');
  }

});






