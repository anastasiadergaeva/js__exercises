// сортировка пользователей
const users = [
    { name: 'Вася', age: 30 },
    { name: 'Катя', age: 18 },
    { name: 'Аня', age: 40 },
    { name: 'Петя', age: 25 },
];

console.log(users.sort((a, b) => a.age - b.age));

// преобразование объектов
const infoOfUsers = [
    {
        userName: 'Вася',
        surname: 'Петров',
        age: 30,
        skills: ['Разработка', 'DevOps']
    },
    {
        userName: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Frontend-разработка']
    }
];

const userData = infoOfUsers.map(user => {
    return {
        fullName: `${user.userName} ${user.surname}`,
        skillNum: user.skills.length
    }
});

console.log(userData);