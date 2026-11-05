function opacityIncrease() {
    const elem = document.querySelector(".box-right");
    if (!elem) return;

    const duration = 1500;
    const startTime = performance.now();
    elem.style.opacity = "0";

    function fade(timestamp) {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        elem.style.opacity = progress;

        if (progress < 1) {
            requestAnimationFrame(fade);
        }
    }

    requestAnimationFrame(fade);
}

opacityIncrease();