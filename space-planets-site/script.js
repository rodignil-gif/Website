const modeButtons = document.querySelectorAll(".mode");
const modeCopy = document.getElementById("mode-copy");

modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modeButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        modeCopy.textContent = button.dataset.copy;
        document.documentElement.style.setProperty("--mode-glow", `${button.offsetLeft / 8}px`);
    });
});

window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 16;
    const y = (event.clientY / window.innerHeight - 0.5) * 16;
    document.documentElement.style.setProperty("--hud-x", `${x}px`);
    document.documentElement.style.setProperty("--hud-y", `${y}px`);
});
