// Цикл в обратном порядке

const arr = ['day', 'your', 'hack', 'can', 'who', 'power', 'magical', 'with', 'girl', 'A'];
const resultArray = [];
for (let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);
}

console.log(resultArray.join(' '));

// Расчёт итогового баланса

const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getFinalBalance() {
    let sumOfOperations = 0;
    for (let i = 0; i < operations.length; i++) {
        sumOfOperations += operations[i];
    }
    const finalBalance = sumOfOperations + startingBalance;
    return finalBalance;
}

console.log(getFinalBalance());

function getNegativeBalance(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    let positiveBalance = true;
    for (let element of arrayOfOperations) {
        balance += element;
        switch (true) {
            case balance < 0:
                positiveBalance = false;
                break;
        }
    }
    return positiveBalance;
}

console.log(getNegativeBalance(operations, startingBalance));

function getAverageIncomeAndExpense(arrayOfOperations) {
    let positiveCount = 0;
    let negativeCount = 0;
    let positiveSum = 0;
    let negativeSum = 0;
    for (const element of arrayOfOperations) {
        if (element > 0) {
            positiveCount++;
            positiveSum += element;
        }
        else if (element < 0) {
            negativeCount++;
            negativeSum += element;
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(getAverageIncomeAndExpense(operations));