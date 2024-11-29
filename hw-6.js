// //  игра "Угадай число"
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
			break;
		}
		answer = Number(prompt('Попробуй снова!'));	
	}
	if (answer === solution) { 
		alert('Поздравляю! Ты угадал!');
	}	
}

// игра "Простая арифметика"
let number1 = Math.floor(Math.random() * 100) + 1;
let number2 = Math.floor(Math.random() * 100) + 1;
let operationIndex = Math.ceil((Math.floor(Math.random() * 10) + 1) / 3);
const operations = ['+', '-', '/', '*']

console.log(number1, number2, operationIndex, operations, operations[operationIndex]);
let sign = operations[operationIndex];
let desicion;

function arithmetic() {
    do {
        if(number1 >= number2) {
            max = number1;
            min = number2;
        } 
        else {
            max = number2;
            min = number1;
        }
        console.log(min, max);
        
        
        if (sign == '+') {
           desicion = min + max;
        } 
        else if(sign == '-') {
           desicion = max - min;
        }
        else if(sign == '/') {
           desicion = Math.round(max / min);
        }
        else if(sign == '*') {
           desicion = min * max;
        }
        
        let userAnswer = Number(prompt(`Сколько будет ${max} ${sign} ${min}?`));
        if (userAnswer == desicion) {
            alert('Угадал!!!');
        }
        else {
            alert('Неверно');
        }
        
    } while (!arithmetic);
    
}










// задание 1
const massiv = [1, 5, 4, 10, 0, 3];

// let i = 0;
// do {
//     console.log(massiv[i]); 
//     i++;
// } while (massiv[i] != 10);

for (let i = 0; i < massiv.length; i++) {
    console.log(massiv[i]);
    if (massiv[i] == 10) {
        break;
    }   
}

// задание 2
console.log('индекс элемента 4 равняется ' + massiv.indexOf(4));


// massiv.forEach(num => {
//     if(num == 4) {
//         console.log(massiv.indexOf(num));        
//     }
// })

// задание 3

const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

// задание 4
let odin = [];
let odinOdin = [];

for (let n = 0; n < 3; n++) {
    for (let i = 0; i < 3; i++) {
    odin[i] = 1;
    }
    odinOdin[n] = odin;    
}  

console.log(odinOdin);

// задание 5

let addPush = [1, 1, 1]
for (let i = 1; i < 4; i++) {
    addPush.push(2);    
}
console.log(addPush);

// задание 6

let sortFilt = [9, 8, 7, 'a', 6, 5];
sortFilt.sort();
// sortFilt.pop();
sortFilt = sortFilt.filter(item => ! isNaN(item));
console.log(sortFilt);

// задание 7

const guess = [9, 8, 7, 6, 5];
let userAnsw = Number(prompt('угадай число'));
if (guess.includes(userAnsw)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// задание 8

let str = 'abcdef';
str = str.split('').reverse().join('');

console.log(str);

// задание 9

const double = [[1, 2, 3],[4, 5, 6]];
// let trouble = [];
// for (let i = 0; i < double.length; i++) {
//     trouble.push(...double[i]);
    
// }
let trouble = double[0].concat(double[1]);
console.log(trouble);

// задание 10

const sum = [1, 4, 7, 2, 2, 8, 9];
console.log(sum);


for (let i = 0; i < (sum.length - 1); i++) {    
        let summa = sum[i] + sum[i+1];
        console.log(summa);
}
     

// задание 11

const arr11 = [3, 5, 8, 1, 9];

let square = (arr) => {
    let newArr11 = arr.map(num => num * num);
    return newArr11;

}


console.log(square(arr11));

// задание 12

let getWordLength = (arr) => {
    return arr.map(word => word.length);
}

console.log(getWordLength(['это', 'проверка', 'функции']));

// задание 13

let getMinusNull = (arr) => {
    return arr.filter(num => num < 0);
}
console.log(getMinusNull([0, -5, -9, 65]));


// задание 14

let random = [];
let odd = [];

for (let i = 1; i < 11; i++) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    random.push(randomNum);    
}

for (let i = 0; i < random.length; i++) {
    if (random[i] % 2 == 0) {
        odd.push(random[i]);
    }
    else {
        continue;
    }    
}
console.log(random);
console.log(odd);

// задание 15
let arr15 = [];
for (let i = 1; i < 7; i++) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    arr15.push(randomNum);    
}
console.log(arr15);

function average (arr) {
    return arr.reduce((total, number) => total + number, 0) / arr.length;
}
console.log(average(arr15));
