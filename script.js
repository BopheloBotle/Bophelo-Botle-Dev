const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {
navLinks.classList.remove("active");
});

});
// ================= SKILLS ANIMATION ON SCROLL =================
const bars = document.querySelectorAll(".progress-bar");

const animateSkills = () => {
    const trigger = window.innerHeight * 0.8;

    bars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;

        // Only animate once
        if (top < trigger && !bar.classList.contains("animated")) {
            bar.style.width = bar.getAttribute("data-progress");
            bar.classList.add("animated");
        }
    });
};
