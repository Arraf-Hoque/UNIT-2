function opacityIncreaseHeader(containerName) {
    const elem = document.querySelector(containerName);
    if (!elem) return;
    const duration = 1000;
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
function opacityIncreaseBox(containerName) {
    const elem = document.querySelector(containerName);
    if (!elem) return;
    const duration = 1000;
    const startTime = performance.now();
    elem.style.opacity = "0";
    elem.style.transform = "translateY(22px)";

    function fade(timestamp) {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        elem.style.opacity = progress;
        elem.style.transform = `translateY(${22 * (1 - progress)}px)`;

        if (progress < 1) {
            requestAnimationFrame(fade);
        }
    }

    requestAnimationFrame(fade);
}
var containerName = ".header";
opacityIncreaseHeader(containerName);
containerName = ".box-right";
opacityIncreaseBox(containerName);