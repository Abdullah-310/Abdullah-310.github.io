// ========== Theme Toggle ==========
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// ========== Typing Text ==========
const text = "Mechanical Engineering Student | Problem Solver";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

// ========== Scroll Reveal ==========
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < trigger) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Initial styles for animation
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "all 0.6s ease";
});
