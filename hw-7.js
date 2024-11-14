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
let string1 = String('js');
let newString1 = string1.toUpperCase();
console.log(newString1);

// задание 2

// задание 3

// задание 4

// задание 5

// задание 6

// задание 7

// задание 8

// задание 9

// задание 10