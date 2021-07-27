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
    if (slidehomeIndex > slideshome.length) { slidehomeIndex = 1 }

    slideshome[slidehomeIndex - 1].style.display = "block";

    setTimeout(showhomeSlides, 4000); // Change image every 3 seconds
}

var slidehomeIndex1 = 0;
showhomeSlides1();

function showhomeSlides1() {
    var i;
    var slideshome1 = document.getElementsByClassName("myhomeslide1");

    for (i = 0; i < slideshome1.length; i++) {
        slideshome1[i].style.display = "none";
    }
    slidehomeIndex1++;
    if (slidehomeIndex1 > slideshome1.length) { slidehomeIndex1 = 1 }

    slideshome1[slidehomeIndex1 - 1].style.display = "block";

    setTimeout(showhomeSlides1, 4000); // Change image every 3 seconds
}


//return to top funtion part

(function () {
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
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

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
            // toggleActions: "restart restart restart restart",
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
            opacity: 0, x: "-22%", duration: 2, stagger: 0.4, ease: "sine.inOut",
        }, 0.4)

        .from('.myhomeslide main', {
            opacity: 0, duration: 1.5, stagger: 0.4, ease: "sine",
        }, 0)
        .from('.myhomeslide img', {
            opacity: 0, x: "+30%", duration: 1.5, ease: "sine",
        }, 0)
        .from('.myhomeslide1', {
            opacity: 0, x: "-30%", duration: 1.5, ease: "sine",
        }, 0)


}
//---------------------/Landing Page ScrollTrigger---------------------

//---------------------Slider ScrollTrigger---------------------
function SliderScrollTrigger() {

    let Slide1 = gsap.timeline({ // Slide1---------------------
        scrollTrigger: {
            trigger: ".service",
            start: "20% 100%",
            end: "100% 0%",


        }
    })
    Slide1
        .from('.service .linespan', {
            opacity: 0, x: "-22%",
        })
        .from('.service div h4', {
            opacity: 0, x: "-22%",
        })
        .from('.service_card', {
            stagger: 0.5,
            opacity: 0, x: "-22%",
        })

    let Slide2 = gsap.timeline({ // Slide2---------------------
        scrollTrigger: {
            trigger: "#technology",
            start: "20% 100%",
            end: "100% 0%",
        }
    })
    Slide2
        .from('#technology .linespan', {
            opacity: 0, x: "-22%",
        })
        .from('#technology h4', {
            opacity: 0, x: "-22%",
        })
        .from('.technology_tools div', {
            stagger: 0.5,
            opacity: 0, x: "122%",
        })

    let Slide3 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: ".tools_candle",
            start: "20% 100%",
            end: "100% 0%",
        }
    })
    Slide3
        .from('.tools_candle div .tool_images .tools_card_image', {
            stagger: 0.5,
            opacity: 0, x: "-22%",
        });

    let Slide4 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: "#development",
            start: "0 100%",
            end: "100% 0%",
        }
    });
    Slide4
        .from('#development_card .linespan', {
            opacity: 0, x: "-22%",
        })
        .from('#development_card h4', {
            opacity: 0, x: "-22%",
        })

    let Slide5 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: "#aboutus",
            start: "20% 100%",
            end: "100% 0%",
        }
    });
    Slide5
        .from('#aboutus .linespan', {
            opacity: 0, x: "-22%",
        })
        .from('.about_img', {
            opacity: 0, x: "122%",
        })
        .from('.para', {
            opacity: 0, x: "122%",
        })


    let Slide6 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: "#contact",
            start: "20% 100%",
            end: "100% 0%",

        }
    });
    Slide6
        .from('.contact-part .linespan', {
            opacity: 0, x: "-22%",
        })
        .from('.contact-part h4', {
            opacity: 0, x: "122%",
        })
        .from('.contact-part main', {
            opacity: 0, x: "122%",
        })
        .from('input', {
            stagger: 0.5,
            opacity: 0, x: "122%",
        })
        .from('textarea', {
            opacity: 0, x: "-22%",
        })

        .from('.btnwrapper', {

            opacity: 0, x: "-22%",
        }, 0.5)




}
//---------------------/Slider ScrollTrigger---------------------

/*-------------Navbar (max-width: 400px)------------- */
function Navbar() {

    console.log("mobile devices");
    // gsap.from('#wrapper #Navbar', {
    //     opacity: 0, x: "40%", duration: 2, ease: "sine.in",
    // })
    // var NavAni = gsap.timeline();
    // NavAni.from('#wrapper nav', {
    //     opacity: 0, y: "13%", duration: 0.5, ease: "sine",
    // })
    //     .reverse();
    // $("#wrapper #Navbar").click(function () {
    //     $("#wrapper nav").toggleClass("DisplayNone");
    //     NavAni.reversed(!NavAni.reversed());
    // });
}
/*-------------/Navbar (max-width: 400px)------------- */

window.onload = () => {
    homeScrollTrigger()
    SliderScrollTrigger()
    if (window.matchMedia("(max-width: 700px)").matches) {
        Navbar()
    } else {
    }
}






///type writter part


// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = ["Make Your Ideas Into A Brand.", "Build Mobile Apps Simple & Interactive.", "Make Your Ideas Into A Website"];




// function to generate the backspace effect 
function delWriter(text, i, cb) {
    if (i >= 0) {
        typeWriterElement.innerHTML = text.substring(0, i--);
        // generate a random Number to emulate backspace hitting.
        var rndBack = 10 + Math.random() * 100;
        setTimeout(function () {
            delWriter(text, i, cb);
        }, rndBack);
    } else if (typeof cb == 'function') {
        setTimeout(cb, 1000);
    }
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
    if (i < text.length + 1) {
        typeWriterElement.innerHTML = text.substring(0, i++);
        // generate a random Number to emulate Typing on the Keyboard.
        var rndTyping = 250 - Math.random() * 100;
        setTimeout(function () {
            typeWriter(text, i++, cb)
        }, rndTyping);
    } else if (i === text.length + 1) {
        setTimeout(function () {
            delWriter(text, i, cb)
        }, 1000);
    }
};

// the main writer function
function StartWriter(i) {
    if (typeof textArray[i] == "undefined") {
        setTimeout(function () {
            StartWriter(0)
        }, 1000);
    } else if (i < textArray[i].length + 1) {
        typeWriter(textArray[i], 0, function () {
            StartWriter(i + 1);
        });
    }
};
// wait one second then start the typewriter
setTimeout(function () {
    StartWriter(0);
}, 1000);





// var servicediv=document.querySelector(".service_div");
// var serviceicon=document.querySelector(".service_card_icon_wrapper");

// serviceicon.addEventListener("click",(e)=>{
// e.preventDefault();
// console.log("button working");
// servicediv.style.opacity="1";
// servicediv.style.zIndex="100";
// })





const open = document.querySelector('.container');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.to('nav', { transform:"scale(1)" })
            .to('nav', { height: '100vh' }, '-=.1')
            .to('nav .nav_img', { height: '90vh' }, "-=.1")
            .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
            .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
            .to('nav h2', { opacity: 1 }, '-=1');
    }
});

close.addEventListener('click', () => {
    tl.reverse();
});

var changeposition=[undefined,undefined,undefined,undefined];
var content=["hello mobile","hell lucifer","hello web","hello cloud computing"];
var contentinit=["don mobile","don lucifer","don web","don cloud computing"];
const changeside = (e,i) => {

    console.log(e);
    console.log( e.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.className);

    if(e.target.parentElement.parentElement.previousElementSibling.className=="paragraph_first"){
        changeposition[i]=0;
        document.getElementById(i.toString()).innerHTML=contentinit[i];
        e.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.className="flip_image";
        e.target.parentElement.parentElement.parentElement.previousElementSibling.className="flip_front_part1";
       e.target.parentElement.parentElement.parentElement.className="flip_front_part2";
       e.target.parentElement.parentElement.previousElementSibling.className="paragraph";
       e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className="flip-card";
    }else{
       console.log(changeposition[i]);
       if(changeposition[i]==0){
        console.log(e.target.parentElement.parentElement.previousElementSibling.className);
       
        e.target.offsetParent.offsetParent.style.transform = "rotateX(180deg)";
        console.log(e.target.parentElement.parentElement.previousElementSibling.className);
   
        changeposition[i]=1;
       setTimeout(()=>{
        document.getElementById(i.toString()).innerHTML=content[i];
       },2000);
       }else{
        e.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.className="flip_image_first";
        e.target.parentElement.parentElement.parentElement.previousElementSibling.className="flip_front_part1_first";
       e.target.parentElement.parentElement.parentElement.className="flip_front_part2_first";
       e.target.parentElement.parentElement.previousElementSibling.className="paragraph_first";
       e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className="flip-card_first";  
       changeposition[i]=undefined;
       }
    }
 
}
const changebackside = (e) => {
    console.log(e.target.parentElement.parentElement.previousElementSibling.className);
   
    e.target.offsetParent.offsetParent.style.transform = "rotateX(0deg)";
   
}








