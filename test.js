

  var animData = {
  container: document.getElementById('threecontainer'),
  path: 'data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "animScroll",
}, animScroll, tl;


var animScroll = bodymovin.loadAnimation(animData)


animScroll.addEventListener('DOMLoaded', function () {
  console.log("function loaded");
  tl = new TimelineMax({repeat: 0})
  tl.to({frame: 0}, 1, {
    frame: animScroll.totalFrames-1,
    onUpdate: function() {
      animScroll.goToAndStop(Math.round(this.target.frame), true)
    },
    Ease:Linear.easeNone
  })
  
  var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#home",
 
  duration: 1000 }).setTween(tl).addTo(controller);

})


