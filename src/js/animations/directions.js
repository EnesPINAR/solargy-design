gsap.registerPlugin(ScrollTrigger);
const directionItems = document.querySelectorAll(".direction");
directionItems.forEach((el) => {
    if(el.getAttribute("direction") == "left-to-right") {
        gsap.from(el, {
            scrollTrigger: el,
            opacity: 0.5,
            x: -100,
            duration: 0.5
        })
    } else if (el.getAttribute("direction") == "right-to-left") {
        gsap.from(el, {
            scrollTrigger: el,
            opacity: 0.5,
            x: 100,
            duration: 0.5
        })
    }
});