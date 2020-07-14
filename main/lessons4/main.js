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
// function lengthArray(array) {
//     quantity = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(typeof array[i] === "object" ){
//             quantity = quantity + 1;
//                     }
        
//     }
//     console.log(quantity);
//         return(quantity);
// }

// - Створити функцію яка приймає масив будь яких объектів, та повертає 
// загальн кількість полів в них
// function fieldArray(array) {
    //     field = 0;
    //     for (const element of array){
    //         for (const key in element) {
    //             field = field + 1;
    //         }
    //       }
        
    //     console.log(field);
    //         return(field);
    // }
    
  // - створити функцію  яка скаладає значення елементів з однаковими індексами  
// та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// function addElementsOfArray(array, array1) {
//     let array2 = [];
//     for (let i = 0; i < array.length; i++) {
//         array2.push(array[i] + array1[i]);
//      }
//      console.log(array2);
//      return(array2);
// }


// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в 
// // індексі "i" на "i+1"
// function changePlace(array, i) {
//     let firstNumber = array[i];
//     let secondNumber = array[i+1];
//     array[i] = secondNumber;
//     array[i + 1] = firstNumber;
//     console.log(array);
//     return(array)
// }
// let array = [0,1,2,3,4,5,6]
// changePlace(array, 4)

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. 
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function zeroToEnd(array) {
//     for (let i = array.length; i > -1; i--) {
        
//         if(array[i] === 0){
//         array.splice(i, 1);
//         array.push(0);    
//         }
//     }
//     console.log(array)
//     return(array)
// }

// let array = [1,0,6,0,3];
// zeroToEnd(array);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addTextToDiv(text) {
//     let div = document.createElement("div");
//     div.innerText  = (text);
//     document.body.appendChild(div)
// }

// addTextToDiv("Hello owu");

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addElementToBody(element, text) {
//         element = document.createElement(element);
//         element.innerText = (text);
//         document.body.appendChild(element)
//     }
    
//     addElementToBody("p","Hello");

// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// function addArrayToBody(array, element) {
//     element = document.createElement(element);
//     let list = [];
//     for (const iter of array) {
//        
//        list.push(iter.model);
//     }

//     element.innerText = (list);
//     document.body.appendChild(element);
// }
 
// let cars =[
//         {model: 'AUDI', year: 1995, power: 1500, color: 'black'},
//         {model: 'VW', year: 1999, power: 1500, color: 'black'},
//         {model: 'SIAT', year: 1990, power: 1500, color: 'white'},
//         {model: 'KIA', year: 1991, power: 1500, color: 'black'},
//         {model: 'Nissan', year: 1993, power: 2000, color: 'black'},
//         {model: 'Honda', year: 1998, power: 1500, color: 'black'},
//         {model: 'Mazda', year: 1997, power: 1500, color: 'black'},
//         {model: 'Huyndai', year: 1996, power: 1600, color: 'black'},
//         {model: 'Scoda', year: 1998, power: 1500, color: 'black'},
//         {model: 'Tesla', year: 2015, power: 1500, color: 'black'}
//     ]

    // addArrayToBody(cars, "div")

// Для кожного автомобіля створити свій блок, та додати його в елемент, 
// індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// function addArrayBody(array, element) {
//     element = document.createElement(element);  
//     for (const iter of array) {
//         let p = document.createElement("p")
//         p.innerText = JSON.stringify(iter);
//         element.appendChild(p);
       
//     }
//     document.body.appendChild(element);
    
    
// }

// addArrayBody(cars, "div")

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор
//  елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, 
// індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// function addArrayBlock(array, element) {
//     element = document.createElement(element);
//     for (const elem of array) {
//        let div = document.createElement("div");
//        element.appendChild(div);
//        for (const key in elem) {
           
//            let p = document.createElement("p");
//            p.innerText = (JSON.stringify(elem[key]))
//            div.appendChild(p);
               
//            }
//        }
    
//     document.body.appendChild(element)
// }

// addArrayBlock(cars, "div")
