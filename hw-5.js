let solution = Math.floor(Math.random() * 100) + 1;
console.log(solution);

function gameGuess() {	
	let answer = Number(prompt('Я загадал число от 1 до 100. Попробуй угадать его!'));
	while (answer !== solution) {
		if (answer > solution) {
			alert('Загаданное число меньше');
		} else if (answer < solution) {
			alert('Загаданное число больше');
		} 
		else {
			alert('Некорректное значение');
		}
		answer = Number(prompt('Попробуй снова!'));	
	}
	if (answer === solution) { 
		alert('Поздравляю! Ты угадал!');
	}	
}


// Задания на работу с кодом

// задание 1

let min = (a, b) => {return a <= b ? a : b; };
console.log(min(6800, 6800));

// задание 2

let num = Number(prompt('Введите число'));	

function odd(num) {
	if(num % 2 === 0) {
		num = 'Число чётное'
	}
	else {
		num = 'Число нечётное'
	}
	return num;
}

console.log (odd(num));

// задание 3

function square(n) {
	n = n*n;
	return n;
};
console.log(square(5));

function squareConsole(n) {
	n = n*n;
	console.log(n);	
};
squareConsole(7);

// задание 4

let greeting = (age) => {
	age = Number(prompt('Сколько Вам лет?'));
	if(age < 0) {
		alert('Вы ввели неправильное значение');
	} else if(age < 13){
		alert('Привет, друг!');
	} else {
		alert('Добро пожаловать!');
	}
}
greeting();

// задание 5

function multiplication(a, b) {
	if(isNaN(a) || isNaN(b)) {
		console.log('Одно или оба значения не являются числом');
	}
	else {
		return a * b;
	}
}
multiplication(5, 'fnhgf');

// задание 6

function cube() {
	let n = prompt('введите число');
	if(isNaN(n)) {
		alert('Переданный параметр не является числом');
	} 
	else {
		let a = n ** 3;
		alert(`${n} в кубе равняется ${a}`);
	}
}

// for (let i = 1; i < 11; i++) {
// 	cube(i);	
// }

// задание 7

const circle1 = {
	radius: 35,
	getAria: getAria,
	getPerimeter: getPerimeter,
}
const circle2 = {
	radius: 75,
	getAria: getAria,
	getPerimeter: getPerimeter,
}
function getAria() {
	return [this.radius] * [this.radius] * 3.14;
}
function getPerimeter() {
	return 2 * [this.radius] * 3.14;
}


// console.log(circle1.getAria());
// console.log(circle2.getAria());
// console.log(circle1.getPerimeter());
// console.log(circle2.getPerimeter());


