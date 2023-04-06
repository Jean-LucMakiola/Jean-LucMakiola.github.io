const detectionbox = document.querySelector('.line-toggle-detectionbox');
const navExpand = document.querySelector('.nav-expand-container');
const backgroundblur = document.querySelector('.backgroundblur');



detectionbox.addEventListener('click', ()=>{
    detectionbox.classList.toggle('toggle-expanded');
    navExpand.classList.toggle('nav-expanded');
    backgroundblur.classList.toggle('blur-toggled');

});

var r = document.querySelector(':root');

  
  
  function myFunction_set() {
    r.style.setProperty('--test', '1');
    
  }
    