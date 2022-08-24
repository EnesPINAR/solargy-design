const openSort = document.querySelector(".openSort");
const closeSort = document.querySelector(".closeSort");
const sort = document.querySelector(".sort");

openSort.addEventListener("click", () => {
    sort.style.opacity = "1";
    sort.style.pointerEvents = "auto";
    sort.style.zIndex = "10";
});

closeSort.addEventListener("click", () => {
    let opened = closeSort.parentElement.parentElement.parentElement
    opened.style.opacity = "0";
    opened.style.pointerEvents = "none";
})