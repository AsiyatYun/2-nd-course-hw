
// Игра "Камень, ножницы, бумага"

function rockPaperScissors() {
    const rockPaper = ['камень', 'ножницы', 'бумага'];
let compChoice = Math.floor((Math.random() * 3));
console.log(compChoice);
let compOption = rockPaper[compChoice]; 
console.log(compOption);

let userAnsw = prompt ('Выберите оружие')

if (userAnsw.toLowerCase() === compOption.toLowerCase()) {
    alert(`Выбор соперника - ${compOption}. Ничья!`);    
} 
else if ((userAnsw.toLowerCase() === 'камень' && compOption.toLowerCase() === 'ножницы') || (userAnsw.toLowerCase() === 'ножницы' && compOption.toLowerCase() === 'бумага') || (userAnsw.toLowerCase() === 'бумага' && compOption.toLowerCase() === 'камень')) {
    alert(`Выбор соперника - ${compOption}. Поздравляю с победой!`);
} else if ((userAnsw.toLowerCase() !== rockPaper[0].toLowerCase()) && (userAnsw.toLowerCase() !== rockPaper[1].toLowerCase()) && (userAnsw.toLowerCase() !== rockPaper[2].toLowerCase())) {
    alert('Некорректное значение');    
} else {
    alert(`Выбор соперника - ${compOption}. Вы проиграли!`);

}
}




// задание1

const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 


 console.log(people1.sort((a, b) => a.age - b.age));


// задание2


function isPositive(num) {
    return num > 0;
}

function isMale(arr) {
    return arr.gender === 'male' 
}

function filter(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
    
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// задание3




let timerId = setInterval(() => {
    let currentDate = new Date();
    console.log(currentDate);
}, 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 33000);

// задание4

function delayForSecond1(callback) {
    setTimeout(() => {
        callback();  
    }, 1000);
   
}

delayForSecond1(function () {
   console.log('Привет, Глеб!');
})

// задание5


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { 
             cb(); 
            }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))    



