'use strict'
const numberInput = document.querySelector('.js-number');
const button = document.querySelector('.js-bunton');
const clueText = document.querySelector('.js-clue');
const countText = document.querySelector('.js-count');
const winText = document.querySelector('.js-win');



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

function comprobNumbr(){
    const numberValue = parseInt(numberInput.value);
    if (numberValue === secretNumber){
        console.log('Has ganado campeona!!!');
        clueText.innerHTML = 'Has ganado campeona!!!';
    } else if (numberValue > secretNumber) {
        console.log('Demasiado alto');
        clueText.innerHTML = 'Demasiado alto';
    } else if (numberValue < secretNumber) {
        console.log('Demasiado bajo');
        clueText.innerHTML = 'Demasiado bajo';
    }
}


const secretNumber = getRandomNumber(100);
console.log(secretNumber);

/* function tryCounter(count) {
    let newCount = count += 1;
    count = newCount;
    return count;
} */

button.addEventListener('click', (ev) => {
    ev.preventDefault;
    //console.log(tryCounter(0));
    console.log('Funciona');
    console.log(comprobNumbr());
});