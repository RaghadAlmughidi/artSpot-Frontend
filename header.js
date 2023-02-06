
let openMenu = document.querySelector('.open');
let closeMenu = document.querySelector('.close');
let ul = document.querySelector('ul');
let backIcon=document.querySelector('.back__icon');
openMenu.addEventListener ('click',()=>{ 

    ul.classList.add('active-nav');
})
closeMenu.addEventListener ('click',()=>{ 

    ul.classList.remove('active-nav');
})