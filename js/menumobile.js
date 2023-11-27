let btnMenu = document.getElementById('abrir')
let menu = document.getElementById('navmobile')
let overlay = document.getElementById('overlay-mobile')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})