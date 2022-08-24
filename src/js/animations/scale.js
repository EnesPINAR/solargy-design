gsap.registerPlugin(ScrollTrigger);

let x = document.querySelectorAll(".product");

for (var i = 0; i < x.length; i++) {
    gsap.from(x[i], {
        scrollTrigger: x[i],
        scale: 0.75,
        duration: 0.5
    });
}