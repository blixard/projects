// gsap.to(".box", {x: 100, duration: 1});

window.addEventListener("DOMContentLoaded", (e)=>{
    animate()
})

animate = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:".box",
            markers:true,
            start:"top 70%",
            end:"top 0%",
            scrub:1,
        },
    })
    tl.to(".box",{
        x:500,
        rotation:360,
        duration:3
    })
    tl.to(".box",{
        duration:5,
        y:500
    })
}