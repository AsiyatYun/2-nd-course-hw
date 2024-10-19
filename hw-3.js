let password = 'пароль';
let key = prompt ("Введите пароль");
if (password === key) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


let c = 2;
 if (c>=1 && c<=9) {
    console.log("Верно");
 }
 else {
    console.log("Неверно");
 }

// c = 0;
// c = 10; 
// c = -3;
// c = 2;


let d = 4005;
let e = 18;
console.log(d > 100 || e > 100 ? "Верно" : "Неверно");


let a = '2';
let b = '3';
alert(+a + +b);

let monthNumber = 12;
switch (monthNumber) {
    case 12:
        console.log("Зима")
        break;
    case 1:
        console.log("Зима")
        break;
    case 2:
        console.log("Зима")
        break;
    case 3:
        console.log("Весна")
        break;
    case 4:
        console.log("Весна")
        break;
    case 5:
        console.log("Весна")
        break;
    case 6:
        console.log("Лето")
        break;
    case 7:
        console.log("Лето")
        break;
    case 8:
        console.log("Лето")
        break;
    case 9:
        console.log("Осень")
        break;
    case 10:
        console.log("Осень")
        break;
    case 11:
        console.log("Осень")
        break;
    default:
        console.log("Ошибка")
        break;
}



let num = prompt ("Пожалуйста, введите любое число");
let check = +num;
if (check == NaN) 
    {
        alert('Это не число');
    }  else if (num % 2 == 0) {
       alert('Число чётное');
    }    else {
       alert('Число нечётное');
    }


   


let clientOS = 1;
clientOS == 0 ? console.log("Установите версию приложения для iOS по ссылке") : console.log("Установите версию приложения для Android по ссылке");


let clientDeviceYear = 2010;
if (clientDeviceYear <= 2014 ) {
    console.log(clientOS == 0 ? "Установите облегченную версию приложения для iOS по ссылке" : "Установите облегченную версию приложения для Android по ссылке");
};