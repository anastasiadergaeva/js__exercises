// выделение имени
const fullUserName = 'Elena magiccity elf purple Volnova';

const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
const userSurname = fullUserName.slice(fullUserName.lastIndexOf(' '), fullUserName.length);
console.log(userName, userSurname);

// проверка номера
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isNumber (incomingNumber) {
    incomingNumber = incomingNumber.trim();
    incomingNumber = incomingNumber.replace('+7', '8');
    incomingNumber = incomingNumber.replaceAll(')', '');
    incomingNumber = incomingNumber.replaceAll(' ', '');
    incomingNumber = incomingNumber.replaceAll('(', '');
    incomingNumber = incomingNumber.replaceAll('-', '');
    if (incomingNumber.length != 11) {
        return false;
    }
    if (!incomingNumber.startsWith('8')) {
        return false;
    }
    let numNumber = true;
    for (const elem of incomingNumber) {
        if (isNaN(Number(elem))) {
            numNumber = false;
            break;
        }
    }
    return numNumber;
}

console.log(isNumber(num1));
console.log(isNumber(num2));
console.log(isNumber(num3));
console.log(isNumber(num4));
console.log(isNumber(num5));
console.log(isNumber(num1Error));
console.log(isNumber(num2Error));
console.log(isNumber(num3Error));
console.log(isNumber(num4Error));

// маскировка карты
const card = '2342834503458353';

function maskTheCard (cardNumber) {
    const maskedNumber = cardNumber.slice(-4).padStart(cardNumber.length, '*');
    return maskedNumber;
}

console.log(maskTheCard(card));