let i = 1;
while (i<=2) {
    console.log ('Привет');
    i++;
}

let a = 1;
do {
    console.log (a);
    a++;
} while (a < 6);


for (let b = 1; b < 23; b++) {
    if (b < 7) {
        continue;        
    }
    console.log (b);    
}


const obj = {
    Коля : 200,
    Вася : 300,
    Петя : 400
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]} $`);
        
}



let n = 1000;
let num = 0;
do {
    n /= 2; 
    num++;    
} while (n >= 50);
console.log (`количество итераций: ${num}`);

let friday = 3;
for (let day = 1; day < 32; day++) {
    if (day % 7 === friday) {
        console.log (`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
    }     
}

let k = 100;
for (let iterations = 1; k >= 0; iterations++) {
   
    if (k >= 7) {
          
    } else {
        console.log (`количество итераций: ${iterations}`);
        
    }
    k -= 7;
}


const months = {
    январь : 1,
    февраль : 2,
    март : 3,
    апрель : 4,
    май : 5,
    июнь : 6,
    июль : 7,
    август : 8,
    сентябрь : 9,
    октябрь : 10,
    ноябрь : 11,
    декабрь : 12
}
for (let key in months) {
         console.log(`${key}: ${months[key]} месяц в году`);
        }

const book = {
    название : "Sugar Kremlin",
    автор : "Vladimir Sorokin", 
    годИздания : 2008, 
    жанр : "Distopia"
}
for (let key in book) {
            console.log(`${key}: ${book[key]}`);
           };


let numbers = [
    10, 34, 23, 56, 67, 3, 409, 6778, 6, 76, 
]   

let min = numbers[1];

for (let key in numbers) {
    if (numbers[key] < min) {
        min = numbers[key];
        
    }    
}
console.log (min);





