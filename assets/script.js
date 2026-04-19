// Section → sidebar colour mapping
const sectionColors = {
  hero: "#ff9091",
  research: "#ffa850",
  experience: "#fcdc3e",
  skills: "#aad84d",
  contact: "#6fcf88"
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar a");
const sidebar = document.querySelector(".sidebar");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        // Highlight active link
        navLinks.forEach(link => {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
            link.setAttribute("aria-current", "true");
          }
        });

        // Update sidebar background
        sidebar.style.background = sectionColors[id] || "white";
      }
    });
  },
  { threshold: 0.8 }
);

sections.forEach(section => observer.observe(section));

// Reading mode toggle
const readingBtn = document.getElementById("toggle-reading");
const statusSpan = readingBtn.querySelector(".status");

readingBtn.addEventListener("click", () => {
  document.body.classList.toggle("reading-mode");
  const isReading = document.body.classList.contains("reading-mode");

  readingBtn.setAttribute("aria-pressed", isReading);
  statusSpan.textContent = isReading ? "ON" : "OFF";

  localStorage.setItem("readingMode", isReading);
});

// Text size control
const textSizeSelect = document.getElementById("text-size");
textSizeSelect.addEventListener("change", () => {
  document.body.classList.remove("text-small","text-medium","text-large");
  document.body.classList.add("text-" + textSizeSelect.value);
  localStorage.setItem("textSize", textSizeSelect.value);
});

// Load saved preferences on page load
document.addEventListener("DOMContentLoaded", () => {
  // Reading mode
  const savedReading = localStorage.getItem("readingMode") === "true";
  if (savedReading) {
    document.body.classList.add("reading-mode");
    readingBtn.setAttribute("aria-pressed", "true");
    statusSpan.textContent = "ON";
  }

  // Text size
  const savedSize = localStorage.getItem("textSize") || "medium";
  document.body.classList.add("text-" + savedSize);
  textSizeSelect.value = savedSize;
});
