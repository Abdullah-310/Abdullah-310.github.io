// === Beast Portfolio Script (Enhanced) ===

// Theme toggle with dropdown
const themeToggleBtn = document.getElementById("theme-toggle");
const themeOptions = document.getElementById("theme-options");
const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");

// Show/hide theme options
themeToggleBtn.addEventListener("click", () => {
  themeOptions.classList.toggle("show");
});

// Apply light mode
lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
});

// Apply dark mode
darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

// Load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll("nav a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in animation on scroll
const fadeElems = document.querySelectorAll("section, header, footer, .project, .skill-box");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

fadeElems.forEach(el => {
  observer.observe(el);
});

// Typing effect for intro
function typeEffect(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("header h1");
  if (title) typeEffect(title, 80);
});

// Hover float animation
const floatElems = document.querySelectorAll(".project, .skill-box, nav a, button, .theme-box");
floatElems.forEach(elem => {
  elem.addEventListener("mouseenter", () => {
    elem.classList.add("float-up");
  });
  elem.addEventListener("mouseleave", () => {
    elem.classList.remove("float-up");
  });
});
