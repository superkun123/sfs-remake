let burgerBtn = document.querySelector('.hamburger')
let asideMenu = document.querySelector(`.aside-nav__container`)

burgerBtn.addEventListener(`click`, () => {
    asideMenu.classList.toggle(`show`)
})
