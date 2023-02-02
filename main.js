let openMenu = document.querySelector('.open');
let closeMenu = document.querySelector('.close');
let ul = document.querySelector('ul');
let backIcon=document.querySelector('.back__icon')

openMenu.onclick = () => {
    ul.classList.add('active-nav');


}
closeMenu.onclick = () => {
    ul.classList.remove('active-nav');
}

