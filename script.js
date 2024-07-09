const menuButton = document.querySelector('.menu');
const menuSandwich = document.querySelector('.menu-sandwich');

menuButton.addEventListener('click', () => {
    menuSandwich.classList.toggle('show');
});