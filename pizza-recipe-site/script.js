const pins = document.querySelectorAll(".pin");
const routeCopy = document.getElementById("route-copy");

pins.forEach((button) => {
    button.addEventListener("click", () => {
        pins.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        routeCopy.textContent = button.dataset.copy;
    });
});
