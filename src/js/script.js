document.addEventListener("DOMContentLoaded", function() {
  var timeLeft = 0;
  var progressBar = document.querySelector('.progress');
  var timeDisplay = document.getElementById('time');

  function updateTime() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    timeDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  }

  function updateProgressBar() {
    var percent = (timeLeft / maxTime) * 100;
    progressBar.style.width = percent + '%';

    var progressRatio = percent / 100;

    if (progressRatio <= 1) {
      var green = Math.floor(255 - progressRatio * 255);
      var yellow = Math.floor(progressRatio * 255);
      progressBar.style.backgroundColor = `rgb(${yellow}, ${green},  0)`;
    } else if (progressRatio >= 1) {
      var yellow = Math.floor(255 - (progressRatio - 0.6) * 255);
      var red = Math.floor((progressRatio - 0.6) * 255);
      progressBar.style.backgroundColor = `rgb(${yellow}, ${red}, 0)`;
    }
  }

  function countUp() {
    if (timeLeft < maxTime) {
      timeLeft++;
      updateTime();
      updateProgressBar();
      setTimeout(countUp, 1000);
    }
  }

  updateTime();
  updateProgressBar();
  
});
