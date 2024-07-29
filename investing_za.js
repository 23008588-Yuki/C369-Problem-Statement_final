const questions = [
    {
        question: 'What is a mutual fund?',
        answers: [
            { text: 'A pool of funds collected from many investors to invest in a diversified portfolio', correct: true },
            { text: 'A type of savings account with high interest rates', correct: false },
            { text: 'A government bond', correct: false },
            { text: 'A personal loan for investing', correct: false }
        ]
    },
    {
        question: 'What is a stock?',
        answers: [
            { text: 'A share of ownership in a company', correct: true },
            { text: 'A type of savings account', correct: false },
            { text: 'A loan issued by a corporation', correct: false },
            { text: 'A form of insurance', correct: false }
        ]
    },
    {
        question: 'What is a bond?',
        answers: [
            { text: 'A debt security issued by a corporation or government', correct: true },
            { text: 'A share in a company’s profits', correct: false },
            { text: 'A type of savings account', correct: false },
            { text: 'An investment in real estate', correct: false }
        ]
    },
    {
        question: 'What does "diversification" mean in investing?',
        answers: [
            { text: 'Spreading investments across different asset classes to reduce risk', correct: true },
            { text: 'Investing all funds into a single asset for maximum return', correct: false },
            { text: 'Focusing only on high-risk investments', correct: false },
            { text: 'Investing in international markets only', correct: false }
        ]
    },
    {
        question: 'What is a brokerage account?',
        answers: [
            { text: 'An account used to buy and sell securities through a broker', correct: true },
            { text: 'A savings account with a fixed interest rate', correct: false },
            { text: 'A type of retirement account', correct: false },
            { text: 'An account for loan repayments', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result');

    function showQuestion(question) {
        questionContainer.innerText = question.question;
        answerButtons.innerHTML = '';
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn', 'btn-outline-primary', 'mb-2');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';
        if (correct) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        });
        if (currentQuestionIndex < questions.length - 1) {
            nextButton.classList.remove('d-none');
        } else {
            showResult();
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('btn-success');
        } else {
            element.classList.add('btn-danger');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('btn-success');
        element.classList.remove('btn-danger');
    }

    function showResult() {
        questionContainer.classList.add('d-none');
        answerButtons.classList.add('d-none');
        nextButton.classList.add('d-none');
        resultContainer.innerHTML = `You scored ${score} out of ${questions.length}!`;
        resultContainer.style.display = 'block';
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        nextButton.classList.add('d-none');
        showQuestion(questions[currentQuestionIndex]);
    });

    showQuestion(questions[currentQuestionIndex]);
});