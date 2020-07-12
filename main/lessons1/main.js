// створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let ob = {
//     dog: {
//         name: 'Rex',
//         age: 5,
//         poroda: true,
//         color: 'black',
//         passport: false
//     },
//     person: {
//         name: 'Vasyl',
//         work: 'agent',
//         age: 34,
//         status: true,
//         hobi: 'hiking'
//     },
//     car: {
//         model: 'Kia',
//         year: 2018,
//         color: 'black',
//         hibrid: true,
//         type: 'sedan' 
//     },
//     flat:{
//         square: 60,
//         quantityRoom: 2,
//         owner:{
//         name: 'Petro',
//         age: 45  
//     },
//     coowners: false,
//     yearBuilding: 1996
//     },
//     book:{
//     name:'Century of change',
//     autor: 'P.Morimer',
//     year: 2010,
//     country: 'England',
//     quantityOfPage: 800
//     }    
// }
// console.log(ob)

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
// let array = [
//     ['Reks', 'Jack', 'Lilu', 'Pini', 'Chico'],
//     ['Vasil', 'Taras', 'Fedot', 'Teodor', 'Oleg'],
//     ['KIA', 'Tesla', 'AUDI', 'Siat', 'Slavuta']
// ]
// console.log(array);


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
// let house = {
// square: 60,
// quantityFloor: 2,
// listOfRoom: ['kitchen', 'livingroom', 'bedroom', 'bathroom'],
// owne:{
//     name: 'Petro',
//     age: 45  
// },
// coowners: false
// }
// console.log(house);



// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - ім'я передостаннього об'єкту
// console.log(users[7].status);
// - статус Максима
// console.log(users[4].status);
// - ім'я передостаннього об'єкту
// console.log(users[users.length - 2].name);
// - ім'я третього об'єкта
// console.log(users[2].name);
// - вік Олега
// console.log(users[6].age);
// - вік Олі
// console.log(users[3].age);
// - вік + ім'я 5го об'єкта
// console.log(users[4].age, users[4].name);
// - вік + сатус Анни
// console.log(users[5].age, users[4].status);

// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let cont = document.getElementById('content');
console.log(cont);
let rule = document.getElementById('rules');
console.log(rule);
cont.innerText = 'ABCDEFGH';
rule.innerText = 'bjhfuveriuwer';
let p = document.getElementsByTagName("p");
for (const element of p) {
    element.style.background = 'red'; 
    element.style.color = 'navy';
}    

let div = document.getElementsByTagName("div");
for (const element of div) {
    element.style.background = 'red'; 
    element.style.color = 'navy';
}    

let ul = document.getElementsByTagName("ul");
for (const element of ul) {
    element.style.background = 'red'; 
    element.style.color = 'navy';
}    
console.log(rule.classList)

let list = document.getElementsByClassName('fc_rules');
for (const element of list) {
    element.style.color = 'red';
}    
