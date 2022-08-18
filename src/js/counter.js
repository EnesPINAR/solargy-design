const counts = document.querySelectorAll(".count");
const interval = 2500;

counts.forEach((count) => {
    let startVal = 0;
    let endVal = parseInt(count.getAttribute("count"));
    let duration = Math.floor(interval / endVal);

    let counter = setInterval(
        () => {
            startVal += 1;
            count.textContent = startVal;
            if (startVal == endVal) {
                clearInterval(counter);
            }
        }, duration
    )

});