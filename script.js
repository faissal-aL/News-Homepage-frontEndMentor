const menuOpen = document.getElementById('menu-icon');
const menuClose = document.getElementById('menu-icon-close');
const menu = document.getElementById('nav-menu');

menuOpen.addEventListener("click",function(){
  
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    menu.style.display = 'flex';
    
});

menuClose.addEventListener("click",function(){
    menuClose.style.display = 'none';
    menuOpen.style.display ='block';
    menu.style.display = 'none';
})