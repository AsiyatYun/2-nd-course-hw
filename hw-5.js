let solution = Math.floor(Math.random() * 100) + 1;
console.log(solution);
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



