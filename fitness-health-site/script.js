const morphButtons = document.querySelectorAll(".morph");
const morphNote = document.getElementById("morph-note");

morphButtons.forEach((button) => {
    button.addEventListener("click", () => {
        morphButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        morphNote.textContent = button.dataset.note;
        document.documentElement.style.setProperty("--mut-shift", `${button.offsetLeft / 10}px`);
    });
});

window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 24;
    const y = (event.clientY / window.innerHeight - 0.5) * 24;
    document.documentElement.style.setProperty("--bio-x", `${x}px`);
    document.documentElement.style.setProperty("--bio-y", `${y}px`);
});
