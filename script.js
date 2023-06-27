const dice = document.querySelector('.dice')
const advice = document.querySelector('.advice')
const adviceId = document.querySelector('.adviceId')

dice.addEventListener('click', generateAdvice);

async function generateAdvice() {
    advice.textContent = 'Loading Advice...';
    adviceId.textContent = '';
    fetch('https://api.adviceslip.com/advice')
    .then(async response => {
        const res = await response.json();
        advice.textContent = `"${res.slip.advice}"`;
        adviceId.textContent = res.slip.id;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

generateAdvice();