const questions = [
    {
        question: 'What is a checking account?',
        answers: [
            { text: 'An account used for everyday transactions', correct: true },
            { text: 'An account used for saving money over time', correct: false },
            { text: 'A type of investment account', correct: false },
            { text: 'An account with high interest rates', correct: false }
        ]
    },
    {
        question: 'What does an ATM stand for?',
        answers: [
            { text: 'Automated Teller Machine', correct: true },
            { text: 'Automatic Transaction Machine', correct: false },
            { text: 'Account Transfer Machine', correct: false },
            { text: 'Applied Transaction Mechanism', correct: false }
        ]
    },
    {
        question: 'What is overdraft protection?',
        answers: [
            { text: 'A service that prevents you from spending more than your account balance', correct: false },
            { text: 'A service that allows you to withdraw more money than you have', correct: true },
            { text: 'A type of insurance for your bank account', correct: false },
            { text: 'A method to transfer funds between accounts', correct: false }
        ]
    },
    {
        question: 'What is a bank statement?',
        answers: [
            { text: 'A document summarizing transactions over a period', correct: true },
            { text: 'A list of account holders at a bank', correct: false },
            { text: 'A notification of account changes', correct: false },
            { text: 'A summary of bank fees and charges', correct: false }
        ]
    },
    {
        question: 'What is the purpose of a debit card?',
        answers: [
            { text: 'To borrow money from a bank', correct: false },
            { text: 'To make purchases directly from your bank account', correct: true },
            { text: 'To earn rewards points for spending', correct: false },
            { text: 'To apply for a loan from the bank', correct: false }
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