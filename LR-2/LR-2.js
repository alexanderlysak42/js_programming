// Практична робота 2

// Завдання 1
// Робота з об'єктом user
let user = {}; // 1. Створюємо порожній об'єкт
user.name = "Марк"; // 2. Додаємо властивість name
user.surname = "Сміт"; // 3. Додаємо властивість surname
user.name = "Тарас"; // 4. Змінюємо name на Тарас
delete user.name; // 5. Видаляємо властивість name

console.log(user); // { surname: 'Сміт' }

// Завдання 2
// Перевірка на пустий об'єкт
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Тест:
let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Вставай";
alert( isEmpty(schedule) ); // false

// Завдання 3
// Сума властивостей об'єкта (зарплати)
let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum); // 3900

// Завдання 4
// Помноження числових значень властивостей на 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

// Тест:
let menu = {
    width: 200,
    height: 300,
    title: "Меню"
};

multiplyNumeric(menu);
console.log(menu); // { width: 400, height: 600, title: 'Меню' }