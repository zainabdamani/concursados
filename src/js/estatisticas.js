document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('line-chart').getContext('2d');

    var data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Desempenho',
            data: [12, 19, 20, 5, 10, 3],
            backgroundColor: 'rgba(143, 0, 255, 0.2)',
            borderColor: 'rgba(143, 0, 255, 1)',
            borderWidth: 1
        }]
    };

    var options = {
        animation: {
            duration: 4000, // Tempo da animação em milissegundos
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('radar-chart').getContext('2d');
  
    var data = {
      labels: ['Matematica', 'Português', 'Conhecimentos Gerais', 'Informática', 'Lingua Estrangeira'],
      datasets: [{
        label: 'Desempenho',
        data: [50, 100, 85, 30, 85],
        backgroundColor: 'rgba(143, 0, 255, 0.2)',
        borderColor: 'rgba(143, 0, 255, 1)',
        borderWidth: 1,

      }]
    };
  
    var options = {
      animation: {
        duration: 4000, // Tempo da animação em milissegundos
      },
      scale: {
        angleLines: {
          display: true
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    };
  
    var chart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: options
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('bar-chart').getContext('2d');
  
    var data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Desempenho',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(143, 0, 255, 0.2)',
        borderColor: 'rgba(143, 0, 255, 1)',
        borderWidth: 1
      }]
    };
  
    var options = {
      animation: {
        duration: 4000, // Tempo da animação em milissegundos
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  
    var chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  });
  