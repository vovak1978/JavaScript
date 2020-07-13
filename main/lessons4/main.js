// створити функцію яка виводить масив
// function arrayReturn(array) {
//     console.log(array)
// }
// let array1 = [0,2,3,4,5,6];
// arrayReturn(array1);

// - створити функцію яка заповнює масив рандомними числами та виводить його. 
// Для виведення використати попвередню функцію.
// function randomArray(quantityOfElement) {
//     let array = [];
//     for (let i = 0; i < quantityOfElement; i++){
//         array.push(Math.random());
//     }
//     return(arrayReturn(array));
// }
// randomArray(9);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minOfThree(a, b, c) {
//     if (a <= b & a <=c){
//         min = a;
//     }
//     else if(b <= a & b <= c){
//         min = b;
//     }
//     else{
//         min = c;
//     }
//     return(min);
// }

// console.log(minOfThree(3, 3, 3));


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxOfThree(a, b, c) {
//     if (a >= b & a >=c){
//         max = a;
//     }
//     else if(b >= a & b >= c){
//         max = b;
//     }
//     else{
//         max = c;
//     }
//     return(max);
// }

// console.log(maxOfThree(3, 9, 11));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, 
// а виводить найбільше

// function minNumber(quantityOfNumbers) {
//     let number = +prompt('Number');
//     let number1 = +prompt('Number')
//     if (number > number1){
//     max = number;
//     min = number1;
//     }
//     else{
//     max = number1;
//     min = number;
//     }
//     for(let i = 2; i < quantityOfNumbers; i++){
//         number = +prompt('Number');
//         if(number < min){
//             min = number;
//             }
//         else if(number > max){
//             max = number;
//             }
//     }
//         console.log(max);
//         return(min);
//     }

// - створити функцію яка повертає найбільше число з масиву
// function maxNumberArray(array) {
//     max = 0;
//     for (let i = 0; i < array.length; i++) {
//         const num = array[i];
//         if(num > max){
//             max = num;
//         }
//     }
//     return(max);
// }

// // - створити функцію яка повертає найменьше число з масиву
// function minNumberArray(array) {
//     min = 0;
//     for (let i = 0; i < array.length; i++) {
//         const num = array[i];
//         if(num < min){
//             min = num;
//         }
//     }
//     return(min);
// }


// - створити функцію яка приймає масив чисел та складає значення елементів масиву
//  та повертає його.
// function sumNumberArray(array) {
//         sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             sum = sum + array[i];
//         }
//         return(sum);
//     }
    
//  - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function middleOfSumNumberArray(array) {
//         sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             sum = sum + array[i];
//         }
//         middle = sum / array.length
//         return(middle);
//     }
   

// - Створити функцію яка приймає масив будь яких объектів, та 
// повертає значення кількості об'єктів в масиві


// - Створити функцію яка приймає масив будь яких объектів, та повертає 
// загальн кількість полів в них

// - створити функцію  яка скаладає значення елементів з однаковими індексами  
// та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в 
// індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. 
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
