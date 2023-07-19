// Цикл в обратном порядке

const arr = ['day', 'your', 'hack', 'can', 'who', 'power', 'magical', 'with', 'girl', 'A'];
const resultArray = [];
for (let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);
}

console.log(resultArray.join(' '));