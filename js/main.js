const tabs = Array.from(document.querySelectorAll('.tab'));

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