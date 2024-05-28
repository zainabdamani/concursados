document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.getElementById("dark-mode-btn");
    const currentMode = localStorage.getItem("dark-mode");

    if (currentMode === "disabled") {
        document.documentElement.classList.remove("dark-mode");
    }
    darkModeButton.addEventListener("click", function() {
        document.documentElement.classList.toggle("dark-mode");
        const mode = document.documentElement.classList.contains("dark-mode") ? "enabled" : "disabled";
        localStorage.setItem("dark-mode", mode);
    });
});

