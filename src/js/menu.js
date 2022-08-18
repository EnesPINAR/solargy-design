document.querySelector(".openMenu").addEventListener("click",()=>{
    document.querySelector("menu").classList.add("opacity-100", "z-10", "pointer-events-auto");
    document.querySelector("header").classList.add("opacity-0", "z-[-1]", "pointer-events-none");
})

document.querySelector(".closeMenu").addEventListener("click",()=>{
    document.querySelector("menu").classList.remove("opacity-100", "z-10", "pointer-events-auto");
    document.querySelector("header").classList.remove("opacity-0", "z-[-1]", "pointer-events-none")

    document.querySelector("menu").classList.add("opacity-0", "z-[-1]", "pointer-events-none");
    document.querySelector("header").classList.add("opacity-100", "z-10", "pointer-events-auto")
})