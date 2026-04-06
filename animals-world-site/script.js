const root = document.documentElement;
const toneButtons = document.querySelectorAll(".tone");
const toneName = document.getElementById("tone-name");
const toneCopy = document.getElementById("tone-copy");
const ringLinks = document.querySelectorAll(".ring-nav a");
const sections = [...document.querySelectorAll("main section")];

toneButtons.forEach((button) => {
    button.addEventListener("click", () => {
        toneButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        toneName.textContent = button.dataset.tone;
        toneCopy.textContent = button.dataset.copy;
        root.style.setProperty("--tone-shift", `${button.offsetLeft / 10}deg`);
    });
});

window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    root.style.setProperty("--pointer-x", x.toFixed(3));
    root.style.setProperty("--pointer-y", y.toFixed(3));
});

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            ringLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    },
    { threshold: 0.45 }
);

sections.forEach((section) => sectionObserver.observe(section));
