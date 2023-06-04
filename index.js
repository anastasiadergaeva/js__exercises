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

let moneyForOrder = hoursToMakeJob * hourlyRate;
console.log(moneyForOrder);