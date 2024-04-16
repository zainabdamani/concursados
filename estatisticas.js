document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('line-chart').getContext('2d');

    var data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Vendas',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    var options = {
        animation: {
            duration: 2000, // Tempo da animação em milissegundos
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
      labels: ['Vendas', 'Marketing', 'Desenvolvimento', 'Suporte', 'Administração'],
      datasets: [{
        label: 'Desempenho',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,

      }]
    };
  
    var options = {
      animation: {
        duration: 2000, // Tempo da animação em milissegundos
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
        label: 'Vendas',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };
  
    var options = {
      animation: {
        duration: 2000, // Tempo da animação em milissegundos
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
  