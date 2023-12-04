const taskDoc = document.querySelectorAll('.task');
const descriptionDoc = document.querySelector('.description')

const description = {
    0: 'Задание 1. Создать переменную name и сохранить в ней любое имя. Вывести в косоли фразу: "Привет, &ltname&gt!", где &ltname&gt - значение переменной.',
    1: 'Задание 2. Треугольник имеет высоту (h) - 30 и длину основания (d) - 50. Выведите в консоли площадь треугольника',
    2: 'Задание 3. Используя математическую функцию Math.random(), создайте переменную n, внутри которой будет храниться случайное целое число в диапазоне от 12 до 67 (включая границы).',
    3: 'Задание 4. Создать 3 переменных со случайными числами в диапазоне от 0 до 255 (вкл) и одну переменную со случайным числом от 0 до 1 с округлением до 2-х знаков после точки. Вывести в консоль эти переменные в виде строки: rgba(&ltn1&gt, &ltn2&gt, &ltn3&gt, &ltn4&gt). Пример: "rgba(387, 94, 48, 0.76)". &ltn1&gt - &ltn4&gt - пример названия переменных',
    4: 'Задание 5. Создать переменную time со случайным значением в диапазоне от 86400000 до 2592000000 (от 1 до 30 суток). Вывести в консоли сколько это в днях, часах, минутах, секундах и миллисекундах. Пример: "2382291094 мс - 27 д 13 ч 44 мин 51 сек 94 мс"'
}

taskDoc.forEach((el, i) => {
    if (el.classList.contains('active')) {
        descriptionDoc.innerHTML = description[i]
    }
})

for (let el of taskDoc) {
    el.addEventListener('click', () => {
        taskDoc.forEach(e => {
            e.classList.remove('active')
        })
        el.classList.add('active')
        taskDoc.forEach((el, i) => {
            if (el.classList.contains('active')) {
                descriptionDoc.innerHTML = description[i]
            }
        })
    })
}

// Task 1
let myName = 'Evgeny';
const strMyName = `Hello, ${myName}!`;

//Task 2
let h = 30;
let d = 50 ;
const S = 1/2 * d * h;

//Task 3
n = Math.floor(Math.random() * (67 - 12 + 1)) + 12;

//Task 4
const color = () => {
    return Math.floor(Math.random() * 256);
}
const opacity = () => {
    return Number(Math.random().toFixed(2));
}

let rgba = [];
const RGBA = [0, 0, 0, 0];

rgba = RGBA.map((el, i) => {
    if (i !== RGBA.length - 1) {
        el = color()
    } else {
        el = opacity() 
    }
    return el
})

const bgColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;

//Task 5
let time = Math.floor(Math.random() * (2592000000 - 86400000 + 1)) + 86400000;
const day = Math.floor(time / 1000 / 60 / 60 / 24);
const hour = Math.floor((time - day * 1000 * 60 * 60 * 24) / 60 / 60 / 1000);
const minute = Math.floor((time - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60) / 60 / 1000);
const second = Math.floor((time - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60 - minute * 1000 * 60) / 1000);
const millisecond = Math.floor(time - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60 - minute * 1000 * 60 - second * 1000);
const TIME = `${time}ms = ${day}d ${hour}h ${minute}m ${second}s ${millisecond}ms`;

//Output of all results
let task = {
    0: strMyName,
    1: S,
    2: n,
    3: bgColor,
    4: TIME
}

taskDoc.forEach((el, i) => {
    console.log(task[i])
    el.innerHTML = task[i]
})