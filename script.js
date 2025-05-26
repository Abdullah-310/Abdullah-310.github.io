// Theme toggle button
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

// Typing effect for title subtitle
const typingTarget = document.getElementById("typing-text");
const text = "Mechanical Engineering Student | Problem Solver";
let idx = 0;

function typeEffect() {
  if (idx < text.length) {
    typingTarget.innerHTML += text.charAt(idx);
    idx++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();

// Scroll fade-in
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
