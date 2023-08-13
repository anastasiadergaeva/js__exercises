// выделение имени
const fullUserName = 'Elena magiccity elf purple Volnova';

const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
const userSurname = fullUserName.slice(fullUserName.lastIndexOf(' '), fullUserName.length);
console.log(userName, userSurname);