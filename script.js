function pageOneAnimation(){
     var tl = gsap.timeline({
    scrollTrigger :{
        trigger: "#home",
        start:"top top",
        scrub:1,
        pin: true,
        // markers: true,
    }
})
tl
.to("#centerimg",{
    right: "23%",
    duration: 2,
    ease: Power1
},"same")

.to("#cricle #btm img", {
    rotate: "-180deg",
    scale: .4,
    duration:2,
    stagger: .1,
    ease: Power1
}, "same2")
tl
.to("#cricle #top img", {
    scale: .6,
    stagger: .1,
    duration:2,
    ease: Power1
}, "same2")
.to("#home #gallery", {
    bottom: "-100%",
    duration:2,
    ease: Power1
}, "same2")
.to("#cimg img", {
    scale: 0,
    duration:2,
    ease: Power1
}, "same2")
.to("#centerimg h5", {
    opacity:0,
    duration:2,
    stagger: .1,
    ease: Power1
}, "same2")
.to("#ccircle", {
    top: "50%",
    duration:2,
    ease: Power1
}, "same2")
.to("#cricle", {
    scale: 0,
    opacity:0,
    duration:2,
    ease: Power1
}, "same3")

.to("#smcircle", {
    scale: 0,
    opacity:0,
    duration:2,
    ease: Power1
}, "same3")

.to("#main #ccircle", {
    scale: 0,
    opacity:0,
    duration:2,
    ease: Power1
}, "same3")

.to("#overlay>h2", {
    top: "70%",
    ease: Power1
}, "same3")
.to("#stext", {
    top: "-70%",
    delay:2,
    duration:5,
    ease: Power1
}, "same3")
}
function pageTwoAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: "#second",
            pin: true,
            // markers: true,
            scrub: 1,
            start: "top top"
        }
    })
    tl2
    
    .from(".pu", {
        top:"150%",
        duration: 5,
        ease: Power1
    })
    .from(".pi", {
        top:"160%",
        duration: 6,
        ease: Power1
    })
    .to(".circle", {
        top: "50%",
        stagger: .5,
        duration: 5,
        ease: Power1
    })
    .to(".circle", {
        left: "50%",
        duration: 5,
        ease: Power1
    })
    .to(".circle", {
        scale: 10,
        duration: 5,
        ease: Power1
    })
    .to("#buttom h1", {
       opacity:0,
       delay:1,
       duration: 20,
        ease: Power1
    },"a")
    .to("#buttom h3", {
        opacity:0,
        delay:1,
        duration: 20,
         ease: Power1
     },"a")
    .to("#stop h1", {
        left:"-180%",
        delay:5,
        duration: 30,
        ease: Power1
    },"a")
    .to(".pu", {
        background: `linear-gradient(to right, #65818b, #ddf7cd, #ddecd4)`,
        delay:5,
        duration: 5,
        ease: Power1
    }, "a")
     .to(".fi",{
         top: "0",
         duration:20,
         delay:1,
        ease : Power1
     }, "a3")
     .to(".se",{
        top: "0",
        duration:21,
        delay:2,
       ease : Power1
    }, "a3")
    .to(".th",{
        top: "0",
        duration:22,
        delay:3,
       ease : Power1
    }, "a3")
    .to(".fo",{
        top: "0",
        duration:23,
        delay:4,
       ease : Power1
    }, "a3")
    .to(".fv",{
        top: "0",
        duration:24,
        delay:5,
       ease : Power1
    }, "a3")
    .to("#buttom h2", {
        opacity:1,
        delay:5,
        duration: 20,
         ease: Power1
     },"a3")
     .to("#buttom h4", {
        opacity:1,
        delay:5,
        duration: 20,
         ease: Power1
     },"a3")

    .to("#smblock",{
       opacity:1,
        duration:0.5,
        ease: Power1

    },"a4")

   .to(".fi1",{
      left: "-10%",
      duration:10,
      ease: Power1
   }, "a4")
   .to(".se1",{
    left: "10%",
    duration:10,
    ease: Power1
 }, "a4")
 .to(".th1",{
    left: "30%",
    duration:10,
    ease: Power1
 }, "a4")
 .to(".fo1",{
    left: "50%",
    duration:10,
    ease: Power1
 }, "a4")
     .to(".fv1",{
        left:"70%",
        duration:10,
        ease : Power1
     }, "a4")

     .to("#smblock2",{
        opacity:1,
         duration:0.5,
         ease: Power1
 
     },"a5")

 .to(".se2",{
  left: "5%",
  duration:10,
  ease: Power1
}, "a5")
.to(".th2",{
  left: "25%",
  duration:10,
  ease: Power1
}, "a5")
.to(".fo2",{
  left: "45%",
  duration:10,
  ease: Power1
}, "a5")
   .to(".fv2",{
      left:"65%",
      duration:10,
      ease : Power1
   }, "a5")
}
function pageThreeAnimation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: "#forth",
            pin: true,
            // markers: true,
            scrub: 1,
            start: "top top"
        }
    })
tl3
.to("#forth", {
    background: `linear-gradient(to right,#a0f58f,#d0f0a8,#eef99c, #d7f1b6,#eef99c, #d1f6a2,#a0f58f)`,
    delay:5,
    duration: 5,
    ease: Power1
}, "b")
.to("#forth img",{
    rotate:"100 deg",
    delay: 5,
    duration:10,
      ease : Power1
}, "b")
.to("#righthept",{
    background:"#105099",
    ease : Power1
}, "b")
.to("#lefthept",{
    background:"#105099",
    ease : Power1
}, "b")
}

function pageForthAnimation(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: "#fivth",
            pin: true,
            // markers: true,
            scrub: 1,
            start: "top top"
        }
    })
 tl4
 .to("#fivth>h1",{
    left:"-30%",
    delay:5,
    duration:20,
    ease: Power1
 }, "c")
 .to("#mid",{
    right:"-150%",
    delay:5,
    duration:25,
    ease : Power1
 }, "c")
.to("#sixth>h1",{
    left:"10%",
    delay:5,
    duration:25,
    ease : Power1
}, "c1")
.to("#sixth>h2",{
    left:"30%",
    delay:5,
    duration:25,
    ease : Power1
}, "c1")
.to("#sixth h3",{
    left:"10%",
    delay:5,
    duration:25,
    ease : Power1
}, "c1")
.to("#sixth #midhept",{
    background:"#105099",
    delay:10,
    ease : Power1
}, "c2")
}
function pageFivthAnimation(){
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger: "#seven",
            pin: true,
            // markers: true,
            scrub: 1,
            start: "top top"
        }
    })
tl5
.to(".lside",{
     top:"-2%", 
     delay:2,
     duration:20,
     ease : Power1
},"d")
.to("#seven>h1",{
    right:"15%",
    delay:5,
    duration:25,
    ease : Power1
}, "d")
.to(".mside",{
    top:"16%",
    delay:2, 
    duration:20,
    ease : Power1
},"d")
.to(".rside",{
    top:"55%",
    delay:2, 
    duration:20,
    ease : Power1
},"d")
.to("#seven",{
    background:"#105099",
    delay:5,
    duration:20,
    ease : Power1
}, "d1")
}
pageOneAnimation();
pageTwoAnimation();
pageThreeAnimation();
pageForthAnimation();
pageFivthAnimation();
