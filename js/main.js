const headerBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
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
