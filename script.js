function loadText(mode) {
  const input = document.getElementById("inputText").value.trim();
  const reader = document.getElementById("reader");

  if (!input) {
    reader.innerHTML = "<p>Please paste some text first!</p>";
    return;
  }

  reader.innerHTML = "<p>" + input.replace(/\n/g, "<br>") + "</p>";
  reader.className = "reader glass-card";

  if (mode === "light") reader.classList.add("light-mode");
  if (mode === "dark") reader.classList.add("dark-mode");
  if (mode === "sepia") reader.classList.add("sepia-mode");
}

function clearText() {
  document.getElementById("inputText").value = "";
  const reader = document.getElementById("reader");
  reader.innerHTML = "<p>Paste your text above and select a mode to start reading!</p>";
  reader.className = "reader glass-card";
}

// Reading progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
});
