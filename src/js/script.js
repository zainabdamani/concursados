document.addEventListener("DOMContentLoaded", function() {
    var timeLeft = 120; 
    var progressBar = document.querySelector('.progress');
    var timeDisplay = document.getElementById('time');

    function updateTime() {
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
      timeDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    }

    function updateProgressBar() {
      var percent = (timeLeft / 120) * 100;
      progressBar.style.width = percent + '%';
    }

    function countdown() {
      if (timeLeft > 0) {
        timeLeft--;
        updateTime();
        updateProgressBar();
        setTimeout(countdown, 1000);
      } else {
        alert("Tempo esgotado! Por favor, recomece as perguntas.");
      }
    }

    updateTime();
    updateProgressBar();
    countdown();
});
