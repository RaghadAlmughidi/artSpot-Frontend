
let openMenu = document.querySelector('.open');
let closeMenu = document.querySelector('.close');
let ul = document.querySelector('ul');
let itemLink = document.querySelector('.item-link');
let backIcon=document.querySelector('.back__icon');
openMenu.addEventListener ('click',()=>{ 

    ul.classList.add('active');
})
closeMenu.addEventListener ('click',()=>{ 

    ul.classList.remove('active');
    

})