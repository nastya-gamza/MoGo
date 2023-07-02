const headerBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const scrollUpBtn = document.querySelector(".scroll-up");
const about = document.querySelector("#about");
const tabs = Array.from(document.querySelectorAll('.tab'));


// BURGER

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("header__burger--active");
  nav.classList.toggle("nav--active");
  document.body.classList.toggle("lock");
});

nav.addEventListener("click", (e) => {
  if (e.target.matches("a") || e.target.matches("li")) {
    headerBurger.classList.remove("header__burger-active");
    nav.classList.remove("nav--active");
    document.body.classList.remove("lock");
  }
});

// ACCORDION

tabs.forEach(tab => {
    tab.addEventListener('click', tabToggle);
})

function tabToggle(e) {
    let currentTab = e.target.closest('.tab');
    let currentContent = e.target.nextElementSibling;
    currentTab.classList.toggle('tab--active');

    if(currentTab.classList.contains('tab--active')) {
        currentContent.style.maxHeight = "158px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}

//INTRO

const introBg = document.querySelector('.intro');
const introSlide = document.querySelectorAll('.intro__slide');
let counter = 1;

setInterval(() => {
    if(counter === introSlide.length) {
        counter = 1;
        switchSlide();
    } else {
        counter++;
        switchSlide();
    }
}, 3000)

function switchSlide() {
    introBg.style.backgroundImage = `url(../img/main/bg-intro-${counter}.jpg)`;
    introBg.classList.add('intro--active');

    introSlide.forEach((slide, index) => {
        if((index + 1) === counter) {
            slide.classList.add('intro__slide--active');
        } else {
            slide.classList.remove('intro__slide--active');
        }
    })
}

//SCROLL UP

window.addEventListener("scroll", () => {
    btnVisibility();
});

const btnVisibility = () => {
    if (about.getBoundingClientRect().top <= 0) {
        scrollUpBtn.style.visibility = "visible";
    } else {
        scrollUpBtn.style.visibility = "hidden";
    }
};

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo(scrollX, 0);
})