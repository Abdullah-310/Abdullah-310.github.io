// Typing animation
const typingTarget = document.getElementById("typing-text");
const text = "Mechanical Engineering Student | Problem Solver";
let idx = 0;
function typeEffect() {
  if (idx < text.length) {
    typingTarget.innerHTML += text.charAt(idx);
    idx++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Scroll animation
const sections = document.querySelectorAll("section");
function revealSections() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < trigger) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Theme toggle
const themeBtn = document.getElementById("theme-button");
const themeOptions = document.getElementById("theme-options");
const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");

themeBtn.addEventListener("click", () => {
  themeOptions.classList.toggle("hidden");
});

lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark");
});

darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark");
});
