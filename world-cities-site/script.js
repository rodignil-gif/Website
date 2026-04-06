const caseButtons = document.querySelectorAll(".case");
const caseCopy = document.getElementById("case-copy");

caseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        caseButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        caseCopy.textContent = button.dataset.copy;
    });
});
