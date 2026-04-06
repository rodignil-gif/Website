const trackButtons = document.querySelectorAll(".track");
const trackCopy = document.getElementById("track-copy");
const score = document.getElementById("score");
const combo = document.getElementById("combo");

trackButtons.forEach((button) => {
    button.addEventListener("click", () => {
        trackButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        trackCopy.textContent = button.dataset.copy;
    });
});

let scoreValue = 13270;
let comboValue = 18;

setInterval(() => {
    scoreValue += 140;
    comboValue = comboValue >= 32 ? 18 : comboValue + 1;
    score.textContent = scoreValue.toString().padStart(7, "0");
    combo.textContent = `x${comboValue}`;
}, 1200);
