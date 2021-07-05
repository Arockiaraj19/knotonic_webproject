// window.addEventListener("scroll",()=>{
//   console.log("scroll aakum pothu trigger aakuthaa");
// var header=document.querySelector(".header_part");
// console.log(header.classList);
// header.classList.toggle("sticky",window.screenY > 0);
// });





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
  
  setTimeout(showhomeSlides, 4000); // Change image every 3 seconds
}



//return to top funtion part

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('return_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('return_to_top-show');
    }
  }

  function backToTop() {

    if (window.pageYOffset > 0) {
      console.log("scroll called");
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
     
    }
  }

  var goTopBtn = document.querySelector('.return-to-top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();











//gsap animation area

gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function homeScrollTrigger() {

    // gsap.from('body', { // LoadingAnimation---------------------
    //     opacity: 0, duration: 1,
    // }) // /LoadingAnimation---------------------

    let homeScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            toggleActions: "restart restart restart restart",
            start: "0% 100%",
            end: "50% 0%",
            // markers: "true",
        }
    })
    homeScrollTrigger
        .from('.logo', {
            opacity: 0, x: "-31%", duration: 2, ease: "sine.in",
        }, 0)
        .from('.header', {
            opacity: 0, x: "40%", duration: 2, ease: "sine.in",
        }, 0)
        .from('.header ul', {
            opacity: 0, x: "70%", duration: 2, ease: "sine.inOut",
        }, 0.2)
        .from('.header ul li', {
            opacity: 0, x: "-22%", duration: 2, stagger:0.4, ease: "sine.inOut",
        }, 0.4)
      
        .from('.myhomeslide main', {
            opacity: 0, duration: 1.5, stagger: 0.4, ease: "sine",
        }, 0.8)
        .from('.myhomeslide img', {
            opacity: 0, x: "+30%", duration: 2.2, ease: "sine",
        }, 1.6)


}
//---------------------/Landing Page ScrollTrigger---------------------

//---------------------Slider ScrollTrigger---------------------
function SliderScrollTrigger() {

    let Slide1 = gsap.timeline({ // Slide1---------------------
        scrollTrigger: {
            trigger: ".slide1",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2,
            pin: ".slide1",
        }
    })
    Slide1
        .from('.slide1 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide1 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide1 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide1---------------------

    let Slide2 = gsap.timeline({ // Slide2---------------------
        scrollTrigger: {
            trigger: ".slide2",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2,
            pin: ".slide2",
        }
    })
    Slide2
        .from('.slide2 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide2 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide2 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide2---------------------

    let Slide3 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: ".slide3",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2,
            pin: ".slide3",
        }
    })
    Slide3
        .from('.slide3 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide3 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide3 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide3---------------------

    let iCodeAyush = gsap.timeline({
        scrollTrigger: {
            trigger: "#codeby",
            toggleActions: "restart restart restart restart",
            start: "48.618% 100%",
            end: "100% 0%",
            // markers: "true",
        }
    })
    iCodeAyush
        .from('#codeby a', {
            opacity: 0, y: "130%", duration: 2, ease: "sine",
        }) // iCodeAyush---------------------
}
//---------------------/Slider ScrollTrigger---------------------

/*-------------Navbar (max-width: 400px)------------- */
function Navbar() {
    gsap.from('#wrapper #Navbar', {
        opacity: 0, x: "40%", duration: 2, ease: "sine.in",
    })
    var NavAni = gsap.timeline();
    NavAni.from('#wrapper nav', {
        opacity: 0, y: "13%", duration: 0.5, ease: "sine",
    })
        .reverse();
    $("#wrapper #Navbar").click(function () {
        $("#wrapper nav").toggleClass("DisplayNone");
        NavAni.reversed(!NavAni.reversed());
    });
}
/*-------------/Navbar (max-width: 400px)------------- */

window.onload = () => {
    homeScrollTrigger()
    SliderScrollTrigger()
    if (window.matchMedia("(max-width: 400px)").matches) {
        Navbar()
    } else {
    }
}






///type writter part


// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = ["Make Your Ideas Into A Brand.","Build Mobile Apps Simple & Interactive.","Make Your Ideas Into A Website"];




// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);
	









