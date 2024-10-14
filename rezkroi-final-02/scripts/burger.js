const burgerTrigger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.mobile-menu')

const onTriggerClickHandler = (e) => {
  document.documentElement.classList.toggle('lock')
  burgerMenu.classList.toggle('menu-active')
}


burgerTrigger.addEventListener('click', onTriggerClickHandler)
