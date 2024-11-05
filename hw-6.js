// // первая игра 
// let solution = Math.floor(Math.random() * 100) + 1;
// console.log(solution);

// function gameGuess() {	
// 	let answer = Number(prompt('Я загадал число от 1 до 100. Попробуй угадать его!'));
// 	while (answer !== solution) {
// 		if (answer > solution) {
// 			alert('Загаданное число меньше');
// 		} else if (answer < solution) {
// 			alert('Загаданное число больше');
// 		} 
// 		else {
// 			alert('Некорректное значение');
// 			break;
// 		}
// 		answer = Number(prompt('Попробуй снова!'));	
// 	}
// 	if (answer === solution) { 
// 		alert('Поздравляю! Ты угадал!');
// 	}	
// }




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
        break
    }   
}

// задание 2
console.log('индекс элемента 4 равняется ' + massiv.indexOf(4));


// massiv.forEach((num) => {
//     if(massiv[num] == 4) {
//         console.log(massiv[num].indexOf);        
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

// const guess = [9, 8, 7, 6, 5];
// let userAnsw = Number(prompt('угадай число'));
// if (guess.includes(userAnsw)) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }

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

function square ([ar]) {
    ar[...arr].map
}

