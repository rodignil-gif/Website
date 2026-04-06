const maskButtons = document.querySelectorAll(".mask");
const maskCopy = document.getElementById("mask-copy");

maskButtons.forEach((button) => {
    button.addEventListener("click", () => {
        maskButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        maskCopy.textContent = button.dataset.copy;
        document.documentElement.style.setProperty("--mask-shift", `${button.offsetLeft / 10}px`);
    });
});
