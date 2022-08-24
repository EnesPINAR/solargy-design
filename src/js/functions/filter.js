const openFilter = document.querySelector(".openFilter");
const closeFilter = document.querySelector(".closeFilter");
const filter = document.querySelector(".filter");

openFilter.addEventListener("click", () => {
    filter.style.opacity = "1";
    filter.style.pointerEvents = "auto";
    filter.style.zIndex = "10";
});

closeFilter.addEventListener("click", () => {
    let opened = closeFilter.parentElement.parentElement.parentElement
    opened.style.opacity = "0";
    opened.style.pointerEvents = "none";
})

// if(sort.style.opacity == "1") {
//     document.addEventListener("click", (event) => {
//         console.log("dışına");
//         if (event.target != sort && event.target.parentNode != sort) {
//             console.log("dışına");
//         } else {
//             console.log("sa")
//         }
//     })
// }

