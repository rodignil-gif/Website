const actButtons = document.querySelectorAll(".act");
const actCopy = document.getElementById("act-copy");

actButtons.forEach((button) => {
    button.addEventListener("click", () => {
        actButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        actCopy.textContent = button.dataset.copy;
    });
});
