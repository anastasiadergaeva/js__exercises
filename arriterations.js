// вывод изменений цен
const prices = [[100, 200], [120, 100], [200, 350]];
const getDelta = prices
    .map(price => price[1] - price[0])
    .filter(delta => delta > 0);
console.log(getDelta);