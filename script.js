window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-Z9EVMKSGF1');

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
            trigger: "#service",
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



    let Slide10 = gsap.timeline({ // Slide1---------------------
        scrollTrigger: {
            trigger: "#service_container",
            start: "20% 100%",
            end: "100% 0%",
        }
    })
    Slide10
        .from('.flip-card_first', {
            stagger: 1,
            opacity: 0, x: "-32%",
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
            stagger: 0,
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
            stagger: 0,
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

    console.log("mobile devices check anthoer");
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
var textArray = ["Make Your Ideas  Into A Brand", "Build Mobile Apps Simple & Interactive", "Make Your Ideas Into A Website"];




// function to generate the backspace effect 
function delWriter(text, i, cb) {
    if (i >= 0) {
        typeWriterElement.innerHTML = text.substring(0, i--);
        // generate a random Number to emulate backspace hitting.
        var rndBack = 30;
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
        var rndTyping = 50;
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
var tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.to('nav', { transform: "scale(1)" })
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
// scroll funtion part

const scrolltocontainer = (data) => {
    const element = document.getElementById(data);
    console.log(element);
    console.log(element.offsetTop);

    if (element) {
        window.scroll({
            top: element.offsetTop,
            behavior: 'smooth',
        })
    }
    tl.reverse();
}

var changeposition = [undefined, undefined, undefined, undefined];
var content = [
    "<div id='stagefour0' class='stagefour' style='display: flex;justify-content: flex-start;width: 100%;flex-direction:column'>  <div class='mainwrapper'><div class='firstpart'>Design</div><div class='secondpart'>-</div><div class='thirdpart'>Adobe Ps,Ai,Xd,Ae,Dn</div></div>   <div class='mainwrapper'><div class='firstpart'>Frontend</div><div class='secondpart'>-</div><div class='thirdpart'>Flutter, React Native</div></div>   <div class='mainwrapper'><div class='firstpart'>Backend</div><div class='secondpart'>-</div><div class='thirdpart'>Node js,Firebase</div></div>   <div class='mainwrapper'><div class='firstpart'>Database</div><div class='secondpart'>-</div><div class='thirdpart'>Firebase,MongoDB,PostgreSQL,MySQL,Redis.</div></div></div>",
    "<div id='stagefour1' class='stagefour' style='display: flex;justify-content: flex-start;width: 100%;flex-direction:column'>  <div class='mainwrapper'><div class='firstpart'>Design</div><div class='secondpart'>-</div><div class='thirdpart'>Adobe Ps,Ai,Xd,Ae,Dn</div></div>   <div class='mainwrapper'><div class='firstpart'>Frontend</div><div class='secondpart'>-</div><div class='thirdpart'>HTML,CSS,JS,Bootstrap,React JS,Electron JS</div></div>   <div class='mainwrapper'><div class='firstpart'>Backend</div><div class='secondpart'>-</div><div class='thirdpart'>Node js,Firebase</div></div>   <div class='mainwrapper'><div class='firstpart'>Database</div><div class='secondpart'>-</div><div class='thirdpart'>Firebase,MongoDB,PostgreSQL,MySQL,Redis.</div></div></div>",
    "<div id='stagefour2' class='stagefour' style='display: flex;justify-content: flex-start;width: 100%;flex-direction:column'>  <div class='mainwrapper'><div class='firstpart'>Design</div><div class='secondpart'>-</div><div class='thirdpart'>Adobe Ps,Ai,Xd,Ae,Dn</div></div>   <div class='mainwrapper'><div class='firstpart'>Frontend</div><div class='secondpart'>-</div><div class='thirdpart'>HTML,CSS,JS,Bootstrap,React Js,</div></div>   <div class='mainwrapper'><div class='firstpart'>Backend</div><div class='secondpart'>-</div><div class='thirdpart'>Node js,Firebase</div></div>   <div class='mainwrapper'><div class='firstpart'>Database</div><div class='secondpart'>-</div><div class='thirdpart'>Firebase,MongoDB,PostgreSQL,MySQL,Redis.</div></div></div>",
    "<div id='stagefour3' class='backlist' style='display: flex;justify-content: flex-start;width: 90%;'><ul><li>Search Engine Optimization (SEO)</li>  <li>Social Media Marketing</li> <li>Content Marketing</li>  <li>Email Marketing</li>  </ul>     </div>",
];
var contentinit = ["don mobile", "don lucifer", "don web", "don cloud computing"];
var images = ["url(./assets/sliderp1.png)", "url(./assets/desktopslider.png)", "url(./assets/webappslider.png)", "url(./assets/digitalcard.png)"];
var contentinit = ["don mobile", "A Web Application Is A Client-Server Program. It Means That It Has A Client-Side And A Server-Side. It Is Part Of The Client-Server Environment, Where Many Computers Share Information. ", "don web", "don cloud computing"];
var contentinit = ["Mobile Has Already Become Prevalent Over The Desktop. In Current Market`S Conditions, A Mobile Application Is A Must For Businesses And Startups.",
    "Desktop Application’s Are What Make A Computer So Useful, They’re The Things You Use Everyday.  ",
    "Web Applications Can Be Designed For A Wide Variety Of Uses And Can Be Used By Anyone; From An Organization To An Individual For Numerous Reasons. ", "Marketing Has Always Been About How To Reach An Audience. What’s Changed, As Technology Changes, Is Where You Find That Audience."];

var bgcolors = ["#3caea3", "#F6D55C", "F56E67", "#F56E67"];
var backcolors = ["#F56E67", "#3caea3", "#20639B", "#99BF72"];
var headingcontent = [["Mobile App  Design & Development", "Mobile App  Design & Development", "three0", "four0"], ["Desktop Application", "Desktop Application", "three1", "four1"],
["Web Apps Design & Development", "Web Apps Design & Development", "three2", "four2"], ["Digital Marketing", "Digital Marketing", "three3", "four3"],]
var bgcolors = ["#3caea3", "#F6D55C", "F56E67", "#F56E67"];
var backcolors = ["#F56E67", "#3caea3", "#20639B", "#99BF72"];
var headingcontent = [["Mobile App  Design & Development", "Mobile App  Design & Development", "Advantage", "Technology Used"], ["Desktop Application", "Desktop Application", "Advantage", "Technology Used"],
["Web Apps Design & Development", "Web Apps Design & Development", "Advantage", "Technology Used"], ["Digital Marketing", "Digital Marketing", "Advantage", "Technology Used"],]
const changeside = (e, i) => {

    console.log(e);

    if (e.target.parentElement.parentElement.previousElementSibling.className == "paragraph_first") {
        changeposition[i] = 0;
        document.getElementById(i.toString()).style.display = "block";
        document.getElementById(i.toString()).innerHTML = contentinit[i];
        e.target.parentElement.parentElement.parentElement.previousElementSibling.className = "flip_front_part1";

        e.target.parentElement.parentElement.parentElement.className = "flip_front_part2";
        e.target.parentElement.parentElement.previousElementSibling.className = "paragraph";
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className = "flip-card";
        document.getElementById("bg_color" + i.toString()).style.backgroundColor = bgcolors[1];
        document.getElementById("back_color" + i.toString()).style.backgroundColor = backcolors[1];
        document.getElementById("back_color" + i.toString()).style.justifyContent = "space-around";
        document.getElementById("heading" + i.toString()).innerText = headingcontent[i][1];
        document.getElementById("btn" + i.toString()).style.backgroundColor = backcolors[1];


    } else {
        console.log(changeposition[i]);
        if (changeposition[i] == 0) {

            console.log(e.target.parentElement.parentElement.previousElementSibling.className);

            e.target.offsetParent.offsetParent.style.transform = "rotateX(180deg)";
            console.log(e.target.parentElement.parentElement.previousElementSibling.className);

            changeposition[i] = 1;

            document.getElementById("image" + i.toString()).style.backgroundImage = images[i];

            document.getElementById("image" + i.toString()).style.backgroundColor = bgcolors[2];
            document.getElementById("backback_color" + i.toString()).style.backgroundColor = backcolors[2];
            document.getElementById("backback_color" + i.toString()).style.justifyContent = "space-around";
            document.getElementById("backheading" + i.toString()).innerText = headingcontent[i][2];
            document.getElementById("btnbtn" + i.toString()).style.backgroundColor = backcolors[2];
        } else {

            e.target.parentElement.parentElement.parentElement.previousElementSibling.className = "flip_front_part1_first";
            e.target.parentElement.parentElement.parentElement.className = "flip_front_part2_first";
            document.getElementById(i.toString()).className = "paragraph_first";

            document.getElementById("stagefour" + i.toString()).remove();
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className = "flip-card_first";
            changeposition[i] = undefined;
            document.getElementById("bg_color" + i.toString()).style.backgroundColor = bgcolors[0];
            document.getElementById("back_color" + i.toString()).style.backgroundColor = backcolors[0];
            document.getElementById("back_color" + i.toString()).style.justifyContent = "center";
            document.getElementById("heading" + i.toString()).innerText = headingcontent[i][0];
            document.getElementById("btn" + i.toString()).style.backgroundColor = backcolors[0];
        }
    }

}
const changebackside = (e, i) => {
    var myimg = document.getElementById(i.toString());
    myimg.insertAdjacentHTML("afterend", content[i]);
    myimg.style.display = "none";
    document.getElementById("bg_color" + i.toString()).style.backgroundColor = bgcolors[3];
    document.getElementById("back_color" + i.toString()).style.backgroundColor = backcolors[3];
    document.getElementById("heading" + i.toString()).innerText = headingcontent[i][3];
    document.getElementById("btn" + i.toString()).style.backgroundColor = backcolors[3];
    document.getElementById("back_color" + i.toString()).style.justifyContent = "space-around";
    e.target.offsetParent.offsetParent.style.transform = "rotateX(0deg)";

}

const wait = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));



const setVisible = (elementOrSelector, visible) =>
    (typeof elementOrSelector === 'string'
        ? document.querySelector(elementOrSelector)
        : elementOrSelector
    ).style.display = visible ? 'block' : 'none';

setVisible('.mainwrapper', false);
setVisible('.wrapper', true);

document.addEventListener('DOMContentLoaded', () => {

    wait(1000).then(() => {
        setVisible('.mainwrapper', true);
        setVisible('.wrapper', false);
        animation();
    }


    )
});






function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
        target = gsap.utils.toArray(vars.target)[0],
        // speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
        // st = { trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1 },
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: true,
            autoplay: true,
            path: vars.path
        });
    // for (let p in vars) { // let users override the ScrollTrigger defaults
    //     st[p] = vars[p];
    // }
    // animation.addEventListener("DOMLoaded", function () {
    //     gsap.to(playhead, {
    //         frame: animation.totalFrames - 1,
    //         ease: "none",
    //         onUpdate: () => animation.goToAndStop(playhead.frame, true),
    //         scrollTrigger: st
    //     });
    // });
}
let istrue = false;
function animation() {

    const animationContainer = document.querySelector('#threecontainer')

    LottieScrollTrigger({
        target: animationContainer,
        path: 'data.json',
        speed: 'medium',
        scrub: 1,
        onUpdate: (self) => {
            //       istrue=!istrue;
            //       console.log("enna self ithu");
            //    console.log(self);
        }
    })

}







document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const index = 0;
    let oForm = document.forms[index];
    if (!oForm.checkValidity()) {
        oForm.reportValidity();
        console.log("not validate");
        return false;
    }


    document.getElementById("submit").style.display = "none";
    const formData = new FormData();
    formData.append(
        'name',
        oForm.elements[1].value
    )
    formData.append(
        'email',
        oForm.elements[0].value
    )
    formData.append(
        'Mobile Number',
        oForm.elements[2].value
    )
    formData.append(
        'description',
        oForm.elements[3].value
    )

    fetch("https://getform.io/f/7460dac3-4afa-4179-be32-782f22d8c8e1", {
        method: "POST",
        body: formData,
    })
        .then(response => {
            if (response.status == 200) {
                oForm.elements[0].value = "";
                oForm.elements[1].value = "";
                oForm.elements[2].value = "";
                oForm.elements[3].value = "";
                document.getElementById("submit").style.display = "block";
                swal({
                    title: "Thanks for be with us",
                    text: "we will reach out to you shortly",
                    icon: "success",
                    button: "Ok",
                });
            }
        })
        .catch(error => console.log(error))
    return true;
})


// window.onload = () => {
//     'use strict';

//     navigator.serviceWorker.register("sw.js").then(() => {
//         console.log("change manifest file");
//         console.log("service worker Install succeeded ");
//     });
//   }



