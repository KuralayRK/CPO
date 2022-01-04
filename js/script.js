var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
 
function nextSlide() {
    slides[currentSlide].className = 'slidez';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {

    let slides = document.getElementsByClassName("item");
    

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";    
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("offer");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function(){
    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
}}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

let x = document.querySelector(".modal")
setTimeout(function(){
  x.style.animation = "fade 2s";
  x.style.opacity = "4"
  })


