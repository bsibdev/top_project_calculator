const clearButton = document.querySelector("#clear-button");
const parenthesisButton = document.querySelector("#parenthesis-button");
const exponentButton = document.querySelector("#exponent-button");
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

let operationSelection = null;

function add(runningNumValue,inputNumValue) {
if (runningNumValue > 0 && inputNumValue > 0) {
    let sum = Number(runningNumValue) + Number(inputNumValue);
    operationResult.textContent = sum;
    runningNum.textContent = sum;
    clearInputNum();
    return runningNumValue;
} else {
    populateRunningNum();
    return;
}
}

function subtract(runningNumValue,inputNumValue) {
    if (runningNumValue > 0 && inputNumValue > 0) {
        let difference = Number(runningNumValue) - Number(inputNumValue);
        operationResult.textContent = difference;
        clearInputNum();
        return;
    } else {
        populateRunningNum();
        return;
    }
    };

function multiply(runningNumValue,inputNumValue) {
    if (runningNumValue > 0 && inputNumValue > 0) {
        let product = Number(runningNumValue) * Number(inputNumValue);
        operationResult.textContent = product;
        clearInputNum();
        return;
    } else {
        populateRunningNum();
        return;
    }
    };

function divide(runningNumValue,inputNumValue) {
    if (runningNumValue > 0 && inputNumValue > 0) {
        let quotient = Number(runningNumValue) / Number(inputNumValue);
        operationResult.textContent = quotient;
        clearInputNum();
        return;
    } else {
        populateRunningNum();
        return;
    }
    };

function exponent(runningNumValue,inputNumValue) {
    if (runningNumValue > 0 && inputNumValue > 0) {
        let power = Number(inputNumValue);
        console.log(power);
        let number = Number(runningNumValue);
        let base_num = Number(runningNumValue);
        console.log(number); 

        for (let i = 1; i<power; i++) {
            number*=base_num;
            console.log(number);
            operationResult.textContent = number;
        }
        
        clearInputNum();
        return;
    } else {
        populateRunningNum();
        return;
    }
    };

let inputNumArr = [];
let inputNumValue = 0;

let runningNumArr = [];
let runningNumValue = 0;

function cleanNum() {
    inputNumValue = inputNumArr.join("");
    runningNumValue = runningNumArr.join("").replaceAll(',','');
    console.log(inputNumValue);
    console.log(runningNumValue);
    inputNum.textContent = inputNumValue;
    runningNum.textContent = runningNumValue;
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
    runningNumValue = runningNumArr.join("").replaceAll(',','');
    runningNum.textContent = runningNumValue;
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
            operationSelection = null;
        break;

        case 'parenthesis-button':
            alert('feature not yet implemented')
        break;

        case 'exponent-button':
            operationSelection = 'exponent';
            exponent(runningNumValue,inputNumValue);
        break;

        case 'divide-button':
            operationSelection = 'divide';
            divide(runningNumValue,inputNumValue);
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
            operationSelection = 'multiply';
            multiply(runningNumValue,inputNumValue);
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
            console.log(operationSelection);
            operationSelection = 'subtract';
            console.log(operationSelection);
            subtract(runningNumValue,inputNumValue);
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
            operationSelection = 'add';
            add(runningNumValue,inputNumValue);
        break;

        case 'neg-button':
            alert('feature not yet implemented')
        break;

        case 'zero-button':
            inputNumArr.push(0);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'decimal-button':
            if (inputNumArr.includes('.')) {
                alert('Number already contains a decimal point');
                return;
            } else {
            inputNumArr.push('.');
            checkForDecimal
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);}
        break;

        case 'operate-button':
            if (operationSelection === null) {
                return;
            } else if (operationSelection === 'add') {
                add(runningNumValue,inputNumValue);
                console.log(`operationSelection = ${operationSelection}`);
                console.log(`added ${inputNumValue} to ${runningNumValue}`);
            } else if (operationSelection === 'subtract') {
                subtract(runningNumValue,inputNumValue);
                console.log(`subtracted ${inputNumValue} from ${runningNumValue}`);
            } else if (operationSelection === 'multiply') {
                multiply(runningNumValue,inputNumValue);
                console.log(`Multiplied ${runningNumValue} by ${inputNumValue}`);
            } else if (operationSelection === 'divide') {
                divide(runningNumValue,inputNumValue);
                console.log(`Divided ${runningNumValue} by ${inputNumValue}`);
            } else if (operationSelection === 'exponent') {
                exponent(runningNumValue,inputNumValue);
                console.log(`Raised ${runningNumValue} to the power of ${inputNumValue}`);
            } else {
                return 'error';
            };
            runningNumValue = Number(operationResult.textContent);
            runningNumArr = [];
            runningNumArr.push(runningNumValue);
            inputNumValue = 0;

            operationSelection = null;
        break;

        case 'delete-button':
            deleteNum(inputNumArr);
        break;
    }
})


document.addEventListener('keydown',(keyBoardEvent) => {
    const key = keyBoardEvent.key;
    switch (key) {
        case 'Escape':
            clearInputNum();
            clearRunningNum();
            operationResult.textContent = '0';
            operationSelection = null;
        break;

        case 'Slash':
            operationSelection = 'divide';
            divide(runningNumValue,inputNumValue);
        break;

        case '7':
            inputNumArr.push(7);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case '8':
            inputNumArr.push(8);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case '9':
            inputNumArr.push(9);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;


        case '4':
            inputNumArr.push(4);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case '5':
            inputNumArr.push(5);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case '6':
            inputNumArr.push(6);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'Minus':
            console.log(operationSelection);
            operationSelection = 'subtract';
            console.log(operationSelection);
            subtract(runningNumValue,inputNumValue);
        break;

        case '1':
            inputNumArr.push(1);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case '2':
            inputNumArr.push(2);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case '3':
            inputNumArr.push(3);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case '0':
            inputNumArr.push(0);
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);
        break;

        case 'Period':
            if (inputNumArr.includes('.')) {
                alert('Number already contains a decimal point');
                return;
            } else {
            inputNumArr.push('.');
            checkForDecimal
            cleanNum(inputNumArr,runningNumArr);
            console.log(inputNumArr);}
        break;

        case 'Enter':
            if (operationSelection === null) {
                return;
            } else if (operationSelection === 'add') {
                add(runningNumValue,inputNumValue);
                console.log(`operationSelection = ${operationSelection}`);
                console.log(`added ${inputNumValue} to ${runningNumValue}`);
            } else if (operationSelection === 'subtract') {
                subtract(runningNumValue,inputNumValue);
                console.log(`subtracted ${inputNumValue} from ${runningNumValue}`);
            } else if (operationSelection === 'multiply') {
                multiply(runningNumValue,inputNumValue);
                console.log(`Multiplied ${runningNumValue} by ${inputNumValue}`);
            } else if (operationSelection === 'divide') {
                divide(runningNumValue,inputNumValue);
                console.log(`Divided ${runningNumValue} by ${inputNumValue}`);
            } else if (operationSelection === 'exponent') {
                exponent(runningNumValue,inputNumValue);
                console.log(`Raised ${runningNumValue} to the power of ${inputNumValue}`);
            } else {
                return 'error';
            };
            runningNumValue = Number(operationResult.textContent);
            runningNumArr = [];
            runningNumArr.push(runningNumValue);
            inputNumValue = 0;

            operationSelection = null;
        break;

        case 'Backspace':
            deleteNum(inputNumArr);
        break;

        case '(':
            alert('feature not yet implemented')
        break;

        case '^':
            operationSelection = 'exponent';
            exponent(runningNumValue,inputNumValue);
        break;

        case '*':
            operationSelection = 'multiply';
            multiply(runningNumValue,inputNumValue);
        break;
        
        case '+':
            operationSelection = 'add';
            add(runningNumValue,inputNumValue);
        break;
    }
})