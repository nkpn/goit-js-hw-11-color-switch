import colors from './colors.js';
import randomIntegerFromInterval from './randomIntegerFromInterval.js'

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    bodyEl: document.querySelector('body'),
}

let changeColor;

const newRandomColor = () =>
    refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

function clickOnStart() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    changeColor = setInterval(newRandomColor, 1000);
}

function clickOnStop() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(changeColor);
}

refs.startBtn.addEventListener('click', clickOnStart);
refs.stopBtn.addEventListener('click', clickOnStop);
