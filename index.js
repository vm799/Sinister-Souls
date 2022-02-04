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