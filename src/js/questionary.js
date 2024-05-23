
const question = document.getElementById('question');
const answer = Array.from(document.getElementById('answer'));

let currentQuestion = {};
let questionCounter = 0;
let acceptingAnswer = true;
let avaliableQuestions = []

startGame = () =>{
    currentQuestion = 0;
    avaliableQuestions = [...questions]
    nextQuestion()
}

nextQuestion = () =>{
    
}

const questions = [
    {
        question: "Em um investimento financeiro, um capital de R$ 10.000,00 foi aplicado a juros compostos durante 2 anos. No primeiro ano, a taxa de juros foi de 5% ao ano e, no segundo ano, foi de 8% ao ano. Qual o montante final dessa aplicação ao final dos 2 anos?",
        answers: [
            { text: "R$ 11.600,00", correct: false },
            { text: "R$ 11.700,00", correct: true },
            { text: "R$ 11.800,00", correct: false },
            { text: "R$ 11.900,00", correct: false },
            { text: "R$ 12.000,00", correct: false },
        ]
    },
    {
        question: "Ao demonstrar os benefícios emocionais advindos dos investimentos financeiros, o atendente deve realçar a capacidade dos produtos bancários em proporcionar",
        answers: [
            { text: "ampla gama de serviços de cobrança", correct: false },
            { text: "igualdade de competição com a concorrência", correct: false },
            { text: "necessidades semelhantes entre eles", correct: true },
            { text: "mais capacidade de poupança em longo prazo", correct: false },
            { text: "maior estabilidade e segurança no futuro", correct: false },
        ]
    },
    {
        question: "O agente comercial pode e deve, por meios próprios, medir a qualidade da prestação dos serviços bancários, ao",
        answers: [
            { text: "analisar as necessidades e os desejos dos seus clientes.", correct: false },
            { text: "investigar os meios pelos quais seus clientes acessam as contas", correct: false },
            { text: "pesquisar os principais concorrentes de sua agência", correct: false },
            { text: "questionar os clientes sobre a satisfação com seu atendimento", correct: false },
            { text: "ressaltar as características principais dos produtos oferecidos", correct: true },
        ]
    }
];



/*const nextQuestionButton = document.getElementById('next-question');
const previousQuestion = document.getElementById('previous-question');
const answerContainer = document.querySelector('.answer-container'); /* adcionar uma div com o nome answer-container e dentro dela colocar os botoes de resposta
const questionText = document.querySelector('.question')/*adicionar uma div para a pergunta chamada question


let currentQuestionIndex = 0; /*variavel para o controle da questao, inicia em 0 para sinalizar a primeira pergunta*


nextQuestionButton.addEventListener("click",displayNextQuestion )

const nextQuestionButton = document.getElementById('next-question');
const previousQuestionButton = document.getElementById('previous-question');
const answerContainer = document.querySelector('.answer-container');
const questionText = document.querySelector('.question');

let currentQuestionIndex = 0;

nextQuestionButton.addEventListener("click", displayNextQuestion);
previousQuestionButton.addEventListener("click", displayPreviousQuestion);

document.addEventListener('DOMContentLoaded', (event) => {
    startGame();
});

function displayNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        clearAnswers();
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        currentQuestion.answers.forEach(answer => {
            const newAnswer = document.createElement("button");
            newAnswer.classList.add("answer", "button");
            newAnswer.textContent = answer.text;
            if (answer.correct) {
                newAnswer.dataset.correct = answer.correct;
            }
            answerContainer.appendChild(newAnswer);
            newAnswer.addEventListener("click", selectAnswer);
        });
    }
}

function displayPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayNextQuestion();
    }
}   

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerContainer.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });

    currentQuestionIndex++;
}

function clearAnswers() {
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild);
    }
}

function startGame() {
    currentQuestionIndex = 0;
    displayNextQuestion();
}

const questions = [
    {
        question: "Em um investimento financeiro, um capital de R$ 10.000,00 foi aplicado a juros compostos durante 2 anos. No primeiro ano, a taxa de juros foi de 5% ao ano e, no segundo ano, foi de 8% ao ano. Qual o montante final dessa aplicação ao final dos 2 anos?",
        answers: [
            { text: "R$ 11.600,00", correct: false },
            { text: "R$ 11.700,00", correct: true },
            { text: "R$ 11.800,00", correct: false },
            { text: "R$ 11.900,00", correct: false },
            { text: "R$ 12.000,00", correct: false },
        ]
    },
    {
        question: "Ao demonstrar os benefícios emocionais advindos dos investimentos financeiros, o atendente deve realçar a capacidade dos produtos bancários em proporcionar",
        answers: [
            { text: "ampla gama de serviços de cobrança", correct: false },
            { text: "igualdade de competição com a concorrência", correct: false },
            { text: "necessidades semelhantes entre eles", correct: true },
            { text: "mais capacidade de poupança em longo prazo", correct: false },
            { text: "maior estabilidade e segurança no futuro", correct: false },
        ]
    },
    {
        question: "O agente comercial pode e deve, por meios próprios, medir a qualidade da prestação dos serviços bancários, ao",
        answers: [
            { text: "analisar as necessidades e os desejos dos seus clientes.", correct: false },
            { text: "investigar os meios pelos quais seus clientes acessam as contas", correct: false },
            { text: "pesquisar os principais concorrentes de sua agência", correct: false },
            { text: "questionar os clientes sobre a satisfação com seu atendimento", correct: false },
            { text: "ressaltar as características principais dos produtos oferecidos", correct: true },
        ]
    }
];



function displayNextQuestion(){   /*funcao para remover os elementos filhos do container de respostas
    while(answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild)
    }
    questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answers => { 
        const newAnswer = document.createElemente("question-button")
        newAnswer.classList.add("answer", "button") /*criar o botao de resposta usando a classe button e com nome de answer
        newAnswer.textContent = answer.text
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        answerContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer )
    });
}


function selectAnswer(event){
    const answerClicked = event.target

    if(answerClicked.datasert.correct){
        document.answerButton.classList.add("correct")
    }else{
        document.answerButton.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button ==> {
        if(button.dataset.correct){
            button.classList.add("correct")
        } else{
            button.classList.add("incorrect")
        }

        button.disabled = "true"
        
    })
    currentQuestionIndex++
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
*/