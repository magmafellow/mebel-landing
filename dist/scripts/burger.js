console.log('hello there! from js file')

const header = document.querySelector('.header')
const burgerTrigger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.header__menu')

const onTriggerClickHandler = (e) => {
  document.documentElement.classList.toggle('lock')
  header.classList.toggle('menu-active')
}


burgerTrigger.addEventListener('click', onTriggerClickHandler)
