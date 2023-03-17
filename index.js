const element = document.querySelector('.line-toggle-detectionbox');

console.log(element);
    
element.addEventListener('click', ()=>{
    element.classList.toggle('toggle-expanded');
});
