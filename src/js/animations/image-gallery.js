// gsap.registerPlugin(ScrollTrigger);

// const galleryItems = document.querySelectorAll(".gallery-item");

// for(var i = 0; i < galleryItems.length; i++) {
//     let galleryItem = galleryItems[i];

//     if(galleryItem.getAttribute("direction") == "left-to-right") {
//         gsap.from(galleryItem, {
//             scrollTrigger: {
//                 trigger: galleryItem,
//                 scrub: 1,
//                 start: "bottom 50%",
//                 end: "+=600",
//                 markers: true
//             },
//             x: -(window.innerWidth)
//         })
//     } else if (galleryItem.getAttribute("direction") == "right-to-left") {
//         gsap.from(galleryItem, {
//             scrollTrigger: {
//                 trigger: galleryItem,
//                 scrub: 1,
//                 start: "top 50%",
//                 end: "+=600",

//                 markers: true
//             },
//             x: window.innerWidth 
//         })
//     }
// }

gsap.registerPlugin(ScrollTrigger);

var sliderImages = gsap.utils.toArray('.horizontal-slider img');

var getTotalWidth = () => {
    totalWidth = 0;
    sliderImages.forEach((image) => totalWidth += image.offsetWidth);
};

getTotalWidth();
ScrollTrigger.addEventListener('revert', getTotalWidth);

sliderImages.forEach((img) => {
    if (img.parentElement.getAttribute("direction") == "left-to-right") {
        gsap.to(img, {
            scrollTrigger: {
                trigger: '.horizontal-slider',
                start: 'top 20%',
                end: () => `+=${totalWidth / 3}`,
                pin: true,
                scrub: true,
                invalidateOnRefresh: true,
            },
            x: () => (totalWidth - document.documentElement.clientWidth),
            ease: "none"
        });
    } else if (img.parentElement.getAttribute("direction") == "right-to-left") {
        gsap.to(img, {
            scrollTrigger: {
                trigger: '.horizontal-slider',
                start: 'top 20%',
                end: () => `+=${totalWidth / 3}`,
                pin: true,
                scrub: true,
                invalidateOnRefresh: true,
            },
            x: () => -(totalWidth - document.documentElement.clientWidth),
            ease: "none"
        });
    }
})