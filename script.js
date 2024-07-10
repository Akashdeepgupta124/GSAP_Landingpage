page1animation();

function page1animation(){
    var tl = gsap.timeline()

tl.from(".section h1, .nav h4, .nav button",{
    y:-30,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.12
})

tl.from(".textarea h1",{
    x:-300,
    opacity:0,
    duration:0.3,
    
})

tl.from(".textarea p",{
    x:-200,
    opacity:0,
    duration:0.3,
    delay:0.2
})

tl.from(".textarea button",{
    opacity:0
})
tl.from(".imagearea img",{
    opacity:0,
    duration:0.5
},"-=1")



}



var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 0%",
        // scrub:2
    }
})

tl2.from(".partners img",{
    opacity:0,
    x:-30,
    duration:0.5,
    stagger:0.12,
    
})

tl2.from(".services",{
    x:-300,
    opacity:0
})

