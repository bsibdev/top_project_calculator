const clearButton = document.querySelector("#clear-button");
const parenthesisButton = document.querySelector("#parenthesis-button");
const percentButton = document.querySelector("#percent-button");
const divideButton = document.querySelector("#divide-button");
const sevenButton = document.querySelector("#seven-button");
const eightButton = document.querySelector("#eight-button");
const nineButton = document.querySelector("#nine-button");
const xButton = document.querySelector("#x-button");
const fourButton = document.querySelector("#four-button");
const fiveButton = document.querySelector("#five-button");
const sixButton = document.querySelector("#six-button");
const subtractButton = document.querySelector("#subtract-button");
const oneButton = document.querySelector("#one-button");
const twoButton = document.querySelector("#two-button");
const threeButton = document.querySelector("#three-button");
const addButton = document.querySelector("#add-button");
const negButton = document.querySelector("#neg-button");
const zeroButton = document.querySelector("#zero-button");
const decimalButton = document.querySelector("#decimal-button");
const operateButton = document.querySelector("#operate-button");

//document.addEventListener('click',)

let num1 = 3;
let num2 = 5;

function add(num1,num2) {
let sum = num1 + num2;
return sum;
}

console.log(add(num1,num2));

const inputNum = [];

document.addEventListener('click',(event) => {
    const target = event.target;
    switch (target.id) {
        case 'clear-button':
        break;

        case 'parenthesis-button':
        break;

        case 'percent-button':
        break;

        case 'divide-button':
        break;

        case 'seven-button':
            inputNum.push(7);
            console.log(inputNum);
        break;

        case 'eight-button':
        break;

        case 'nine-button':
        break;

        case 'x-button':
        break;

        case 'four-button':
        break;

        case 'five-button':
        break;

        case 'six-button':
        break;

        case 'subtract-button':
        break;

        case 'one-button':
        break;

        case 'two-button':
        break;

        case 'three-button':
        break;

        case 'add-button':
        break;

        case 'neg-button':
        break;

        case 'zero-button':
        break;

        case 'decimal-button':
        break;

        case 'operate-button':
        break;
    }
})