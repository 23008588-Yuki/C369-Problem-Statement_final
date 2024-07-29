document.addEventListener('DOMContentLoaded', () => {
    const claimButtons = document.querySelectorAll('.claim-btn');

    claimButtons.forEach(button => {
        button.addEventListener('click', () => {
            const rewardId = button.id;
            const statusElement = document.getElementById(`status${rewardId.slice(-1)}`);

            // Here you could add logic to check if the reward can be claimed
            // and interact with a backend if needed. For this example, we'll just show a message.

            button.disabled = true;  // Disable the button after claiming
            statusElement.innerHTML = 'Successfully claimed!';
            statusElement.classList.add('text-success');

            // Show a browser alert for successful claim
            alert('Successfully claimed your reward!');
        });
    });
});