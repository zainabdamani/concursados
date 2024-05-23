const $startGameButton = document.querySelector('.start-quiz')
const $filter = document.querySelector('.filter')
const $quizContainer = document.querySelector('.container-quiz')
const $containerProgressBar = document.querySelector('.container-progress-bar')
const $progressBar = document.querySelector('.progress-bar')
const $progress = document.querySelector('.progress')
const $timerLeft = document.querySelector ('.timer-left')
const $previousQuestionButton = document.querySelector('.previous-question')
const $nextQuestionButton = document.querySelector('.next-question')






$startGameButton.addEventListener("click", startGame)

function startGame(){
    $startGameButton.classList.add("hide")
    $filter.classList.remove("hide")
    $quizContainer.classList.remove("hide")
    $progressBar.classList.remove("hide")
    $progress.classList.remove("hide")
    $timerLeft.classList.remove('hide')
    $nextQuestionButton.classList.remove('hide')
    $previousQuestionButton.classList.remove('hide')

}










const questions = [
    {
    question:"Em um investimento financeiro, um capital de R$ 10.000,00 foi aplicado a juros compostos durante 2 anos. No primeiro ano, a taxa de juros foi de 5% ao ano e, no segundo ano, foi de 8% ao ano. Qual o montante final dessa aplicação ao final dos 2 anos?",
    answers:[
        { text: "R$ 11.600,00", correct: false},
        { text: "R$ 11.700,00", correct: true},
        { text: "R$ 11.800,00", correct: false},
        { text: "R$ 11.900,00", correct: false},
        { text: "R$ 12.000,00", correct: false},
    ]
},

{
    question:"Ao demonstrar os benefícios emocionais advindos dos investimentos financeiros, o atendente deve realçar a capacidade dos produtos bancários em proporcionar",
    answers:[
        { text: "ampla gama de serviços de cobrança", correct: false},
        { text: "igualdade de competição com a concorrência", correct: false},
        { text: "necessidades semelhantes entre eles", correct: true},
        { text: "mais capacidade de poupança em longo prazo", correct: false},
        { text: "maior estabilidade e segurança no futuro", correct: false},
    ]
},
{
    question:"O agente comercial pode e deve, por meios próprios, medir a qualidade da prestação dos serviços bancários, ao",
    answers:[
        { text: "analisar as necessidades e os desejos dos seus clientes.", correct: false},
        { text: "investigar os meios pelos quais seus clientes acessam as contas", correct: false},
        { text: "pesquisar os principais concorrentes de sua agência", correct: false},
        { text: "questionar os clientes sobre a satisfação com seu atendimento", correct: false},
        { text: "ressaltar as características principais dos produtos oferecidos", correct: true},
    ]
}
];