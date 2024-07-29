const questions = [
    {
        question: 'What is the main benefit of a high-yield savings account?',
        answers: [
            { text: 'Higher interest rates compared to regular savings accounts', correct: true },
            { text: 'Lower fees than other savings accounts', correct: false },
            { text: 'Free checks and debit cards', correct: false },
            { text: 'No minimum balance requirement', correct: false }
        ]
    },
    {
        question: 'What does "APY" stand for in savings accounts?',
        answers: [
            { text: 'Annual Percentage Yield', correct: true },
            { text: 'Annual Principal Yield', correct: false },
            { text: 'Account Percentage Yield', correct: false },
            { text: 'Adjusted Payment Yield', correct: false }
        ]
    },
    {
        question: 'What is a certificate of deposit (CD)?',
        answers: [
            { text: 'A savings account with a fixed interest rate and maturity date', correct: true },
            { text: 'A type of investment in stocks', correct: false },
            { text: 'A loan offered by a bank', correct: false },
            { text: 'An account with unlimited access to funds', correct: false }
        ]
    },
    {
        question: 'What is compound interest?',
        answers: [
            { text: 'Interest calculated on the principal only', correct: false },
            { text: 'Interest calculated on the principal plus accumulated interest', correct: true },
            { text: 'A fixed amount of interest paid monthly', correct: false },
            { text: 'Interest paid by the bank to its customers', correct: false }
        ]
    },
    {
        question: 'What is the benefit of having an emergency fund?',
        answers: [
            { text: 'To cover unexpected expenses without going into debt', correct: true },
            { text: 'To invest in high-risk stocks', correct: false },
            { text: 'To earn interest on long-term deposits', correct: false },
            { text: 'To pay off credit card debt', correct: false }
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