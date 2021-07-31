function LottieScrollTrigger(vars) {
  let playhead = {frame: 0},
    target = gsap.utils.toArray(vars.target)[0],
    speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
    st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
    animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || "svg",
      loop: false,
      autoplay: false,
      path: vars.path
    });
  for (let p in vars) { // let users override the ScrollTrigger defaults
    st[p] = vars[p];
  }
  animation.addEventListener("DOMLoaded", function() {
    gsap.to(playhead, {
      frame: animation.totalFrames - 1,
      ease: "none",
      onUpdate: () => animation.goToAndStop(playhead.frame, true),
      scrollTrigger: st
    });
  });
}

function animation() {
  
  const animationContainer = document.querySelector('#threecontainer')

  LottieScrollTrigger({
    target: animationContainer,
    path: 'data.json',
    speed: 'medium',
    scrub: 1,
    onUpdate: (self) => {
     
    }
  })
  
}



// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {
  // make sure window is always at top on reload
  animation();
})