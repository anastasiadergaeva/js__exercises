/** Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите?**/

const hourlyRate = 80;
const daytime = 5;
const dayOfWeek = 5;
const timeToOrder = 40;
const timeBeforeVacation = 11;
const noneWorkDays = 2;

let daysToMakeJob = timeBeforeVacation - noneWorkDays; // сколько дней уйдёт на заказ
let hoursToMakeJob = daysToMakeJob * daytime; // сколько часов уйдёт на заказ

console.log(hoursToMakeJob >= timeToOrder); // true - успею, false - не успею

let moneyForOrder = timeToOrder * hourlyRate;
console.log(moneyForOrder);

/** Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах */

const investedMoney = 12000;
const bankRate = 7;
const period = 24;
const homeValue = 13500;

let receivedMoney = investedMoney * (1 + (bankRate / 100) / 12) ** period;

if (homeValue <= receivedMoney) {
    console.log(`Вася сможет купить дом, ура! Остаток: ${receivedMoney - homeValue}`);
} else {
    console.log('Вася останется без дома...');
}

console.log(receivedMoney);

/* Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех". */

const questionForUser = prompt('Сколько будет 7 + или - 15?');
switch (true) {
    case Number(questionForUser) === 22:
    case Number(questionForUser) === -8:
    case questionForUser === 'Я не робот':
        console.log('Успех!');
        break;
    default:
        console.log('Вы робот!');
}

// Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
// - Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
// - Он не забанен (isBanned)
// - Игра не куплена (isExist)
// - Игра в продаже (isSelling)
// Напишите условие для покупки и выведите в консоль результат.

const balance = 1500;
const bonusBalance = 2110;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) && (!isBanned) && (!isExist) && isSelling;
console.log(`Возможно ли купить игру: ${canBuy ? 'Возможно' : 'Невозможно'}`);

/** Переписать функцию в стрелочную */

function toPower(num, power) {
    const res = num ** power;
    return res;
}
console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));

// Кредит на MacBook

function creditMoney (age, hasJob = false) {
    switch(true) {
        case age > 24 && hasJob:
            return 500;
            break;
        case age > 24:
            return 100;
            break;
        default:
            return 0;
    }
}

function canBuyMacBook (priceOfMacBookUSD, age, moneyUSD, hasJob = false) {
    const moneyOfCredit = creditMoney(age, hasJob);
    return priceOfMacBookUSD <= moneyUSD + moneyOfCredit;
}

console.log(canBuyMacBook(2000, 30, 1500, true));

// Обновление списка задач

const tasks = ['Задача 1'];

function additionToTheEnd (task) {
    tasks.push(task);
}

function deleteByName (task) {
    const index = tasks.indexOf(tasks);
    if (index === -1) {
        return;
    }
    tasks.splice(index, 1);
}

function moveToStart (task) {
    const index = tasks.indexOf(tasks);
    if (index === -1) {
        return;
    }
    const previousTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(previousTask);
}