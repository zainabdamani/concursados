function startAnimation(img) {
    img.classList.add("hovered");
}

function stopAnimation(img) {
    img.classList.remove("hovered");
}

document.addEventListener("DOMContentLoaded", function () {
    const spans = document.querySelectorAll(".frase[data-date]");

    spans.forEach(span => {
        const date = new Date(span.getAttribute("data-date"));
        const now = new Date();

        const timeDiff = date - now;
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff > 0) {
            span.textContent = `Inscrição inicia em ${date.toLocaleDateString()} - Faltam ${daysDiff} dias`;
        } else if (daysDiff === 0) {
            span.textContent = `Inscrição inicia hoje`;
        } else {
            span.textContent = `Inscrições Abertas`;
        }
    });
});
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);

