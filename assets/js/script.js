const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('menu__a');


toggleMenuElement.addEventListener('click' ,() =>{
    mainMenuElement.classList.toggle('menu__ab--show')
});
