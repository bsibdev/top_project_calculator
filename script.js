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
const workingNum = document.querySelector('#input-num');

//document.addEventListener('click',)

let num1 = 3;
let num2 = 5;

function add(num1,num2) {
let sum = num1 + num2;
return sum;
}

console.log(add(num1,num2));

let inputNumArr = [];

function cleanNum(inputNumArr) {
    const inputNum = inputNumArr.join("");
    console.log(inputNum);
    workingNum.textContent = inputNum;
    return inputNum;
}

function deleteNum(inputNumArr){
    inputNumArr.pop();
    cleanNum(inputNumArr);
    return;
}

function clearAll(inputNumArr) {
    for (let i = 0; i < inputNumArr.length; i++) {
        inputNumArr.pop([i]);
        
    }
    cleanNum(inputNumArr);
    
    return;
}


document.addEventListener('click',(event) => {
    const target = event.target;
    switch (target.id) {
        case 'clear-button':
            inputNumArr = [];
            workingNum.textContent = '0';
        break;

        case 'parenthesis-button':
        break;

        case 'percent-button':
        break;

        case 'divide-button':
        break;

        case 'seven-button':
            inputNumArr.push(7);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'eight-button':
            inputNumArr.push(8);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'nine-button':
            inputNumArr.push(9);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'x-button':
        break;

        case 'four-button':
            inputNumArr.push(4);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'five-button':
            inputNumArr.push(5);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'six-button':
            inputNumArr.push(6);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'subtract-button':
        break;

        case 'one-button':
            inputNumArr.push(1);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'two-button':
            inputNumArr.push(2);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'three-button':
            inputNumArr.push(3);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'add-button':
        break;

        case 'neg-button':
        break;

        case 'zero-button':
            inputNumArr.push(0);
            cleanNum(inputNumArr);
            console.log(inputNumArr);
        break;

        case 'decimal-button':
        break;

        case 'operate-button':
        break;

        case 'delete-button':
            deleteNum(inputNumArr);
        break;
    }
})