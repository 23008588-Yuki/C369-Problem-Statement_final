function showQuiz() {
    document.getElementById('quiz-section').style.display = 'block';
}

function checkAnswer(button) {
    const feedback = document.getElementById('feedback');
    if (button.textContent === 'A plan for future expenses') {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Try again.';
        feedback.style.color = 'red';
    }
}

function calculateBudget() {
    const food = parseInt(document.getElementById('food').value) || 0;
    const rent = parseInt(document.getElementById('rent').value) || 0;
    const entertainment = parseInt(document.getElementById('entertainment').value) || 0;
    const total = food + rent + entertainment;

    const feedback = document.getElementById('budget-feedback');
    if (total > 1000) {
        feedback.textContent = 'You have exceeded your budget!';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = `Great job! You have allocated your budget within the limit. You have $${1000 - total} left.`;
        feedback.style.color = 'green';
    }
}
