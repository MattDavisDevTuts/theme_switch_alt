const themeSwitch = document.getElementById('switch');
const iconDark = document.getElementById('icon-dark');
const iconLight = document.getElementById('icon-light');

themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    iconDark.classList.toggle('hide');
    iconLight.classList.toggle('hide');
});