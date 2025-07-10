const textArray = ["AI Enthusiast", "Computer Vision Researcher", "Creator", "Tech Storyteller"];
let index = 0;
let charIndex = 0;

function typeText() {
  const current = textArray[index];
  if (charIndex <= current.length) {
    document.getElementById("typewriter").textContent = current.slice(0, charIndex++);
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  const current = textArray[index];
  if (charIndex >= 0) {
    document.getElementById("typewriter").textContent = current.slice(0, charIndex--);
    setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

document.getElementById("toggle-theme").addEventListener("click", () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

window.onload = () => {
  typeText();
};
