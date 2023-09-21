let firstMenu = document.querySelector('.first-menu');
let menu = document.querySelector('.menu')

firstMenu.onclick = function(){
    menu.classList.toggle('active')
}

let content = document.getElementsByTagName('body')[0];
let darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle('active')
    document.body.classList.toggle('night')
})