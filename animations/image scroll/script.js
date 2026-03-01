const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videocontanime(){
    var videocont = document.querySelector("#video-cont")
    var play = document.querySelector("#play")

videocont.addEventListener("mouseenter", function(){
    gsap.to(play,{
        scale: 1,
        opacity: 1
    })
})

videocont.addEventListener("mouseleave", function(){
    gsap.to(play,{
        scale: 0,
        opacity: 0
    })
})

videocont.addEventListener("mousemove", function(dets){
    gsap.to(play,{
        left: dets.x-70,
        top: dets.y-80
    })
})

}
videocontanime()

function loadp1h(){
    gsap.from("#p1 h1",{
        y: 80,
        opacity: 0,
        delay: 1,
        duration: 1,
        stagger: 0.2
    })

    gsap.from("#p1 #video-cont",{
        scale: 0.9,
        opacity: 0,
        delay: 1.5,
        duration: 1,
    })
}
loadp1h()
