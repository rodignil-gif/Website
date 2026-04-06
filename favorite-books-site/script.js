const board = document.querySelector("[data-board]");
const inkButtons = document.querySelectorAll(".ink");
const inkNote = document.getElementById("ink-note");
const postcards = document.querySelectorAll(".postcard");

inkButtons.forEach((button) => {
    button.addEventListener("click", () => {
        inkButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        inkNote.textContent = button.dataset.note;
        document.documentElement.style.setProperty("--accent-shift", `${button.offsetLeft / 12}deg`);
    });
});

window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 18;
    if (board) {
        board.style.transform = `rotate(${x * 0.05}deg) translate(${x * 0.2}px, ${y * 0.2}px)`;
    }
});

postcards.forEach((card) => {
    card.addEventListener("mouseenter", () => card.classList.add("lift"));
    card.addEventListener("mouseleave", () => card.classList.remove("lift"));
});
