gsap.registerPlugin(ScrollTrigger);

gsap.to(".pin", {
    scrollTrigger: {
      trigger: ".pin",
      scrub: true,
      pin: true,
      start: "center center",
      end: "bottom -50%",
      ease: "power2"
    }
  });

const elements = document.querySelectorAll(".scrubDirection");

for(var i = 0; i < elements.length; i++) {

    let element = elements[i];

    let d = element.getAttribute("direction");

    let viewportWidth = window.innerWidth;

    console.log(viewportWidth)

    if(d == "right-to-left") {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                scrub: 1,
                start: "top 40%",
                end: "+=600",
            },
            x: (viewportWidth / 2) - 10
        })
    } else if(d == "left-to-right") {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                scrub: 1,
                start: "top 40%",
                end: "+=600",
            },
            x: -(viewportWidth / 2 + 10)
        })
    }

}