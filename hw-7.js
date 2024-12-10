// игра викторина
function quizGame() {
const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let trueAnswers = 0;
for (let i = 0; i < quiz.length; i++) {
    alert(quiz[i].question);
    let userAnswer = prompt(`Выберите вариант ответа: ${quiz[i].options}`);
    if(userAnswer === null) {
        break;
    }
    else if(userAnswer == quiz[i].correctAnswer) {
        trueAnswers++;
    };
   
}

alert(`количество правильных ответов - ${trueAnswers}`);
}


// игра "Переверни текст"

function turnTextOver() {
    let text = prompt("Введите произвольный тескт");
    let newText = text.split('').reverse().join('');
    alert(newText);
}


// задание 1
let string1 = 'js';
let newString1 = string1.toUpperCase();
console.log(newString1);

// задание 2

function fromSecondString(array, str) {
    return array.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));

}
console.log(fromSecondString(['apple', 'applause', 'confuse', 'application'], 'appl'));

// задание 3

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// задание 4

let min = Math.min(52, 53, 49, 77, 21, 32);
let max = Math.max(52, 53, 49, 77, 21, 32)
console.log(min, max);

// задание 5
function randomNumber() {    
    console.log(Math.ceil(Math.random() * 10));
}
randomNumber();

// задание 6

function randomArray(a) {
    let i = 0;
    let arr6 = [];
    while(i <= (a / 2) - 1) {
        arr6[i] = Math.ceil(Math.random() * a);
        i++;
    }
    console.log(arr6);
    
}

randomArray(12);

// задание 7

function randomBeetwen(x, y) {
    if(x < y) {
        console.log(Math.floor(Math.random() * (y - x + 1)) + x);

    }
    else {
        console.log(Math.floor(Math.random() * (x - y + 1)) + y);
    }

}
randomBeetwen(9, 7);

// задание 8

console.log(new Date());


// задание 9

let currentDate = new Date();
let after73Days = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + after73Days;

console.log(new Date(searchDate));


// задание 10

function formatDate(date) {

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let fullDate = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " это - " + days[date.getDay()];

let time = "Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

console.log(fullDate);
console.log(time);
}

formatDate(currentDate)

