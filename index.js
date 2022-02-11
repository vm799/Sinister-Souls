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

const images = document.getElementsByClassName("image-slider__item")
let imagePosition = 0
const totalImages = images.length

document.getElementById("image-slider__prev").addEventListener("click", moveToPrevImage )
document.getElementById("image-slider__next").addEventListener("click", moveToNextImage )

function moveToNextImage(){
  hideAllImages()  
if (imagePosition === totalImages -1){
imagePosition = 0}
else {imagePosition ++}
images[imagePosition].classList.add("image-slider__item-visible")
}

function hideAllImages(){
 for(let image of images){
   image.classList.remove("image-slider__item-visible")
  image.classList.add("image-slider__item-hidden")
 }
}

function moveToPrevImage(){
  hideAllImages()
  if (imagePosition === 0){
    imagePosition = totalImages - 1}
    else{
      imagePosition--
    }
    
    images[imagePosition].classList.add("image-slider__item-visible") 
}