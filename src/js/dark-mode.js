document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("dark-mode-btn");
    const currentMode = localStorage.getItem("dark-mode");

    if (currentMode === "enabled") {
        document.documentElement.classList.add("dark-mode");
    }
    toggleButton.addEventListener("click", function() {
        document.documentElement.classList.toggle("dark-mode");
        const mode = document.documentElement.classList.contains("dark-mode") ? "enabled" : "disabled";
        localStorage.setItem("dark-mode", mode);
    });
});