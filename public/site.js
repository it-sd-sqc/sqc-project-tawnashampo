const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

function toggleDarkMode () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    darkModeToggle.textContent = isDarkMode ? "☀️" : "🌙";
}

darkModeToggle.addEventListener("click", toggleDarkMode);
