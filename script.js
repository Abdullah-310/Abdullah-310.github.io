// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Typing Intro Animation
document.addEventListener('DOMContentLoaded', () => {
  const headerText = document.querySelector("header h1");
  const text = headerText.textContent;
  headerText.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      headerText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Hover Animations
const skillBoxes = document.querySelectorAll('.skill-box');
skillBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = "scale(1.05)";
    box.style.transition = "transform 0.3s ease";
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = "scale(1)";
  });
});
