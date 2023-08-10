// вывод изменений цен
const prices = [[100, 200], [120, 100], [200, 350]];
const getDelta = prices
    .map(price => price[1] - price[0])
    .filter(delta => delta > 0);
console.log(getDelta);

// среднее значение
const arr = [1, 4, 4, 10];
const averageValue = arr.reduce((acc, element) => {
    return acc + element / arr.length;
}, 0);
console.log(averageValue);

// реализация some
const counts = [2, 4, 4, 10, 20];
function some (array, element) {
    const result = counts.find(el => el === element);
    return result == undefined ? false : true;
}
console.log(some(counts, 0));

// или
console.log(counts.some(el => el === 2));