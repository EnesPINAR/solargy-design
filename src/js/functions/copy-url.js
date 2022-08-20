const copyButtons = document.querySelectorAll(".copyUrl");

copyButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", (e) =>{
        navigator.clipboard.writeText(window.location.href);
        const icon = e.target.children[0];
        gsap.to(icon, {opacity: 0, duration: 0.5, onComplete: () => {
            icon.innerHTML = "done";
            gsap.to(icon, {opacity: 1, duration: 0.5, onComplete: () => {
                gsap.to(icon, {opacity: 0, duration: 1, onComplete: () => {
                    icon.innerHTML = "content_copy"
                    gsap.to(icon, {opacity: 1, duration: 0.5})
                }});
            }});
        }});
    })
})