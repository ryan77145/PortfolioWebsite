//Hamburger Menu JS
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navlinks')[0]
const title = document.getElementsByClassName('title')[0]


toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
    title.classList.toggle('active')
})