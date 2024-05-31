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
const inputNum = document.querySelector('#input-num');
const operationResult = document.querySelector('#operation-result')
const runningNum = document.querySelector('#running-num');

//document.addEventListener('click',)



function add(runningNumValue,inputNumValue) {
if (runningNumValue.replaceAll(',','') > 0 && inputNumValue > 0) {
    let sum = Number(runningNumValue.replaceAll(',','')) + Number(inputNumValue);
    operationResult.textContent = sum;
    clearInputNum();
    return;
} else {
    populateRunningNum();
    return;
}
}

let inputNumArr = [];
let inputNumValue = 0;

let runningNumArr = [];
let runningNumValue = 0;

function cleanNum() {
    inputNumValue = inputNumArr.join("");
    runningNumValue = runningNumArr.join("");
    console.log(inputNumValue);
    console.log(runningNumValue);
    inputNum.textContent = inputNumValue;
    runningNum.textContent = runningNumValue.replaceAll(',','');
    return;
}

function deleteNum(inputNumArr){
    inputNumArr.pop();
    cleanNum(inputNumArr,runningNumArr);
    return;
}

function clearInputNum() {
    inputNumArr = [];
    inputNum.textContent = '0';
}

function clearRunningNum() {
    
    runningNumArr = [];
    runningNum.textContent = '0';
    /*for (let i = 0; i < inputNumArr.length; i++) {
        inputNumArr.pop([i]);
        
    }
    for (let i = 0; i < runningNumArr.length; i++) {
        runningNumArr.pop([i]);
        
    }
    cleanNum(inputNumArr,runningNumArr);
    
    return;
*/}

function populateRunningNum() {
    runningNumArr.push(inputNumArr);
    runningNumValue = runningNumArr.join("");
    runningNum.textContent = runningNumValue.replaceAll(',','');
    clearInputNum();
    return;
    
}


document.addEventListener('click',(event) => {
    const target = event.target;
    switch (target.id) {
        case 'clear-button':
            clearInputNum();
            clearRunningNum();
            operationResult.textContent = '0';
        break;

        case 'parenthesis-button':
        break;

        case 'percent-button':
        break;

        case 'divide-button':
        break;

        case 'seven-button':
            inputNumArr.push(7);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'eight-button':
            inputNumArr.push(8);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'nine-button':
            inputNumArr.push(9);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'x-button':
        break;

        case 'four-button':
            inputNumArr.push(4);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'five-button':
            inputNumArr.push(5);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'six-button':
            inputNumArr.push(6);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'subtract-button':
        break;

        case 'one-button':
            inputNumArr.push(1);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'two-button':
            inputNumArr.push(2);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'three-button':
            inputNumArr.push(3);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'add-button':
            add(runningNumValue,inputNumValue)
        break;

        case 'neg-button':
        break;

        case 'zero-button':
            inputNumArr.push(0);
            cleanNum(inputNumArr,runningNumArr);
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