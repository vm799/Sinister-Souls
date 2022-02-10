const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    })
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    })

  }  
})

function reveal(){
     const reveals = document.querySelectorAll(".reveal")

     for(let i=0; i < reveals.length; i++){
          let windowHeight = window.innerHeight
          let elementTop = reveals[i].getBoundingClientRect().top
          // console.log(elementTop)
          let elementVisible = 150

          if(elementTop < windowHeight - elementVisible){
               reveals[i].classList.add("active")
          } else {
               reveals[i].classList.remove("active")
          }
     }
}

window.addEventListener("scroll", reveal)


