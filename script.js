const progress = document.querySelector('.progress-done');
const input = document.querySelector('.input');
const maxInput = document.querySelector('.maxInput');
let finalValue = 0;
let max = 0;

changeWidth = () => {
    progress.style.width = `${(finalValue / max) * 100}%`;
    progress.innerText = `${Math.ceil((finalValue / max) * 100)}%`;
}

input.addEventListener('keyup', () => {
    finalValue = parseInt(input.value, 10)
    changeWidth();
})

maxInput.addEventListener('keyup', () => {
    max = parseInt(maxInput.value, 10)
    changeWidth();
})