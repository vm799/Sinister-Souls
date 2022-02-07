const btnHamburger = document.getElementById("btnHamburger")
const headerMenu= document.querySelector(".header")
const overlay=document.querySelector(".overlay")
const fadeEls= document.querySelectorAll(".has-fade")
const body=document.querySelector("body")

btnHamburger.addEventListener("click", function(){
   if(headerMenu.classList.contains("open")){
   headerMenu.classList.remove("open")
   body.classList.remove("noScroll")
   fadeEls.forEach(function(e){
        e.classList.add("fade-out")
        e.classList.remove("fade-in")
   })
   
   } else {
       headerMenu.classList.add("open")
       body.classList.add("noScroll")
   fadeEls.forEach(function(e){
        e.classList.add("fade-in")
        e.classList.remove("fade-out")
   })

}
})

function reveal(){
     const reveals = document.querySelectorAll(".reveal")

     for(let i=0; i < reveals.length; i++){
          let windowHeight = window.innerHeight
          let elementTop = reveals[i].getBoundingClientRect().top
          console.log(elementTop)
          let elementVisible = 150

          if(elementTop < windowHeight - elementVisible){
               reveals[i].classList.add("active")
          } else {
               reveals[i].classList.remove("active")
          }
     }
}

window.addEventListener("scroll", reveal)