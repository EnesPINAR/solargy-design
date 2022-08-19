const products = document.querySelectorAll(".product");
products.forEach((product) => {
    let text = product.children[1];
    let textAnimation = gsap.from(text, {textFillColor: "white", letterSpacing: "4px",  ease: "power1", duration: 0.5});

    product.addEventListener("mouseenter", () => {textAnimation.reverse()});
    product.addEventListener("mouseleave", () => {textAnimation.play()});
})