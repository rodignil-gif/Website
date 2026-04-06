const moonButtons = document.querySelectorAll(".moon");
const moonCopy = document.getElementById("moon-copy");

moonButtons.forEach((button) => {
    button.addEventListener("click", () => {
        moonButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        moonCopy.textContent = button.dataset.copy;
    });
});
