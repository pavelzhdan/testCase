let menuButton = document.querySelector(".main-header__menu-button");
let headerNavigation = document.querySelector(".main-header__navigation");
let telNumber = document.querySelector(".main-header__phone");
let headerLinks = headerNavigation.querySelectorAll(".navigation-item__link");

function menuOperation() {
    menuButton.classList.toggle("menu-button--clicked");
    headerNavigation.classList.toggle('main-header__navigation--active');
    telNumber.classList.toggle('main-header__phone--hidden');
}



function initMenu(){
    menuButton.addEventListener("click", menuOperation); 
    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].addEventListener("click", menuOperation)
    };
};


export default initMenu;