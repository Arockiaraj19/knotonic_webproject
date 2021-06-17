var header=document.getElementsByClassName("header");
var yellowround=document.getElementsByClassName("yellow_round");
var darkblueround=document.getElementsByClassName("darkblue_round");
var logo=document.getElementsByClassName("logoafter");
var arrow=document.getElementsByClassName("arrowafter");
document.getElementById("arrow").addEventListener("click",(e)=>{

e.preventDefault();
console.log("ithu varuthaa");
header[0].classList.toggle("headervisible");
yellowround[0].classList.toggle("yellow_roundactive");
darkblueround[0].classList.toggle("darkblue_roundactive");
logo[0].classList.toggle("logo");
arrow[0].classList.toggle("arrow");
});

//our process slide area
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



//home page slide part area



var slidehomeIndex = 0;
showhomeSlides();

function showhomeSlides() {
  var i;
  var slideshome = document.getElementsByClassName("myhomeslide");
 
  for (i = 0; i < slideshome.length; i++) {
    slideshome[i].style.display = "none";  
  }
  slidehomeIndex++;
  if (slidehomeIndex > slideshome.length) {slidehomeIndex = 1}    
 
  slideshome[slidehomeIndex-1].style.display = "block";  
  
  setTimeout(showhomeSlides, 3000); // Change image every 3 seconds
}
