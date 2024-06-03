function resumoDesempenhoMateria(Disciplina, totalPerguntas, percentualAcertos, tempoMedioResposta) {
  this.Disciplina = Disciplina;
  this.totalPerguntas = totalPerguntas;
  this.percentualAcertos = percentualAcertos;
  this.tempoMedioResposta = tempoMedioResposta;
}

let materiasResumo = new resumoDesempenhoMateria("Matematica", 120, 47, "1m27s");
let materiasResumo2 = new resumoDesempenhoMateria("Portugues", 120, 47, "1m27s");
let materiasResumo3 = new resumoDesempenhoMateria("Informatica", 120, 47, "1m27s");
let materiasResumo4 = new resumoDesempenhoMateria("Lingua Estrangeira", 120, 47, "1m27s");
let materiasResumo5 = new resumoDesempenhoMateria("Geografia", 120, 47, "1m27s");

function createHtmlCard(materia) {
  const card = document.createElement("div");
  card.classList.add("alinhar");

  const titulodiv = document.createElement("div");
  titulodiv.classList.add("background-titulo");
  const titulo = document.createElement("h3");
  titulo.textContent = materia.Disciplina;
  card.appendChild(titulo);

  const conteudo = document.createElement("div");
  conteudo.classList.add("background-titulo");
  
  const totalPerguntas = document.createElement("p");
  totalPerguntas.textContent = `Total de Perguntas: ${materia.totalPerguntas}`;
  conteudo.appendChild(totalPerguntas);

  const percentualAcertos = document.createElement("p");
  percentualAcertos.textContent = `Percentual de Acertos: ${materia.percentualAcertos}%`;
  conteudo.appendChild(percentualAcertos);

  const tempoMedioResposta = document.createElement("p");
  tempoMedioResposta.textContent = `Tempo Médio de Resposta: ${materia.tempoMedioResposta}`;
  conteudo.appendChild(tempoMedioResposta);

  card.appendChild(conteudo);

  return card;
}

// Definição da função generateCardList
function generateCardList(cards) {
  const container = document.getElementById("product-container");
  cards.forEach(materia => {
      const card = createHtmlCard(materia);
      container.appendChild(card);
  });
}

// Criação da lista de matérias e geração dos cartões
let materias = [materiasResumo, materiasResumo2, materiasResumo3, materiasResumo4, materiasResumo5];
generateCardList(materias);

// Armazenamento das matérias no local storage
localStorage.setItem("materias", JSON.stringify(materias));







$(document).ready(function () {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("href"); // activated tab
      $('.grafico').removeClass('active');
      $(target).addClass('active');
  });

  var ctxBar = document.getElementById('bar-chart').getContext('2d');
  var ctxRadar = document.getElementById('radar-chart').getContext('2d');

  var barChart = new Chart(ctxBar, {
      type: 'bar',
      data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
          datasets: [{
              label: 'Desempenho',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: 'rgba(143, 0, 255, 0.2)',
              borderColor: 'rgba(143, 0, 255, 1)',
              borderWidth: 1
          }]
      },
      options: {
          animation: {
              duration: 4000
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

  var radarChart = new Chart(ctxRadar, {
      type: 'radar',
      data: {
          labels: ['Matematica', 'Português', 'Conhecimentos Gerais', 'Informática', 'Lingua Estrangeira'],
          datasets: [{
              label: 'Desempenho',
              data: [50, 100, 85, 30, 85],
              backgroundColor: 'rgba(143, 0, 255, 0.2)',
              borderColor: 'rgba(143, 0, 255, 1)',
              borderWidth: 1
          }]
      },
      options: {
          animation: {
              duration: 4000
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
      }
  });
});