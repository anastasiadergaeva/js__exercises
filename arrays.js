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
    return tasks.splice(index, 1);
}

function moveToStart (task) {
    const resultOfRemove = deleteByName(task);
    if (result) {
        tasks.unshift(resultOfRemove[0]);
    }
}

// Функция разбора url

const url = 'https://purpleschool.ru/course/javascript';
const url2 = 'https://purpleschoolru/course/javascript'

function stringSplitting(url) {
    const [protocol, _, domainName, ...pathWebsite] = url.split('/');
    if (protocol === 'https' || protocol === 'http:' || protocol === 'https:') {
        if (!domainName.includes('.')) {
            return;
        }
        console.log(`Протокол: ${protocol.split(':')[0]}, доменное имя: ${domainName}, путь внутри сайта: /${pathWebsite.join('/')}`);
    }
}

stringSplitting(url2);