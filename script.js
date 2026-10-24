var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  function toggleMenu(open){
    burger.classList.toggle('open',open);
    menu.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open);
  }
  burger.addEventListener('click',function(){toggleMenu(!menu.classList.contains('open'))});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){toggleMenu(false)})});
