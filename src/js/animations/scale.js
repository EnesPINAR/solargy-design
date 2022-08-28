gsap.registerPlugin(ScrollTrigger);

let x = document.querySelectorAll(".product");

for (var i = 0; i < x.length; i++) {
    gsap.from(x[i], {
        scrollTrigger: x[i],
        scale: 0.75,
        duration: 0.5
    });
}

let y = document.querySelectorAll(".blog");

for (var i = 0; i < y.length; i++) {
    gsap.from(y[i], {
        scrollTrigger: y[i],
        scale: 0.75,
        duration: 0.5
    });
}