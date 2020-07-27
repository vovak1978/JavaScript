// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, 
// чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.querySelector('#text');
// const forma = document.forms.myform;
// const button = forma.btn;
// button.onclick = () => {
//     div.hidden
//     ? div.hidden = false
//     : div.hidden = true
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const hideButton = forma.hb;
// hideButton.onclick = () => {
//     hideButton.hidden = true;
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік 
// чи меньше він ніж 18, та повідомити про це користувача

// const submit = forma.submitage;
// submit.onclick = () => {
// const age = document.querySelector('#agenumber');

//     if (age <= 18){
// alert('Your age is younger 18');
//     return 1;
//     }
//  alert('Your age is older 18')   
// } 

// - Создайте меню, которое раскрывается/сворачивается при клике
// const menu = document.querySelector('#menu');

// menu.onclick = () =>{
//     document.querySelector('#hidemenu').classList.toggle("show");
    
// }


// - Создать список комментариев , пример объекта коментария - 
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let array = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem 1', body:'lorem ipsum dolo '},
//     {title : 'lorem 2', body:'lorem ipsum dolo sit'}
// ]
// for (let i = 0; i < array.length; i++) {
//     h1 = document.createElement('h1');
//     h1.innerText = array[i].title;
//     document.body.appendChild(h1);
//     div = document.createElement('div');
//     div.setAttribute('class', 'div')
//     div.innerText = array[i].body;
//     document.body.appendChild(div);
//     button = document.createElement('button');
//     button.setAttribute('class', 'btn');
//     h1.appendChild(button);
  
// }
// let buttonArray = document.querySelectorAll('.btn');
// let divArray = document.querySelectorAll('.div');
// for (let i = 0; i < buttonArray.length; i++) {
//     const element = buttonArray[i];
    
//     element.onclick = () => {
//   for (let j = 0; j < divArray.length; j++) {
//             if (i === j) {
//             divArray[j].hidden
//             ? divArray[j].hidden = false
//             : divArray[j].hidden = true        
//         }  
//     }

//     }
// }


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку 
// считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let forma = document.forms;

// let formsOne = forma.firsrform;
// let formsTwo = forma.secondform;
// const button = document.querySelector('#concat');

// button.onclick = () => {
//     console.log(`${formsOne.onetext.value} ${formsOne.twotext.value} ${formsTwo.threetext.value} ${formsTwo.fourtext.value}`);
// }

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// function createTable(row, cell, tag, text) {
//    tag = document.createElement(tag); 
//    table = document.createElement('table');
//     for (let i = 0; i < row; i++) {
//     rows = document.createElement('tr');
//     table.appendChild(rows);
//         for (let j = 0; j < cell; j++) {
//           cells = document.createElement('td');
//             cells.innerText = (text);
//            rows.appendChild(cells);
            
//         }
        
//     }
//     tag.appendChild(table);
//     document.body.appendChild(tag);
// }



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, 
// третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, 
// з відповідним вмістом.
// (Додатковачастина для завдання)

// const formaTable = document.forms.tbform;
// let rowOfTable = document.querySelector('#tablerow').value;
// let cellOfTable = document.querySelector('#tablecell').value;
// let textOfTable = document.querySelector('#intext').value;
// const enterButton = formaTable.enterbtn;

// enterButton.onclick = () => {
    
//     createTable(rowOfTable, cellOfTable, 'div', textOfTable);

// }




// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо 
// нажатием на стрелочки.
// let imageArray = [
//     {id: 1, img: 'cosacks.jpeg'},
//     {id: 2, img: 'graj.jpeg' },
//     {id: 3, img: 'oko.jpeg' },
//     {id: 4, img: 'tur1.jpeg' }
// ];


// let image = document.querySelector('#image');
// btnRight = document.querySelector('#right');
// btnLeft = document.querySelector('#left');
// start = 0;
// image.src = imageArray[start].img;

// btnLeft.onclick = () => {
//     start = start + 1
//     if (start < imageArray.length ) {
//         image.src = imageArray[start].img;
//        }
//    else { start = 0;
//     image.src = imageArray[start].img;
//    }
// }

// btnRight.onclick = () => {
//     start = start - 1;
//     if (start > -1) {
//         image.src = imageArray[start].img;
//        }
//    else { start = imageArray.length - 1;
//     image.src = imageArray[start].img;
//    }
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let banWords = ['мудак', 'чудак'];

// const banButton = document.querySelector('#banbtn');
// banButton.onclick = () => {
//     let banWord = document.querySelector('#tban').value;
//     for (const element of banWords) {
        
//         if (element === banWord) {
//             alert('word is ban');
//         }
//     }
   
// }


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let banWords = ['мудак', 'чудак'];

// const banButton = document.querySelector('#banbtn');
// banButton.onclick = () => {
//     let banWord = document.querySelector('#tban').value;
//     let array = banWord.split(" ");
   
//     for (const element of banWords) {
//         for (const i of array) {
//             if (element === i) {
//                 alert('Sentence has ban word');
//             }
//         }
        
//     }
   
// }
// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. 
// // Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// let div = document.querySelector('.list');
// let checkStatus = document.querySelector('#statuscheckbox');
// let checkAge = document.querySelector('#agecheckbox');
// let checkAdress = document.querySelector('#adresscheckbox');

// function checkFilter(status,age,adress,array) {
// if (status === false && age === false && adress === false) {
//     return filter = JSON.stringify(usersWithAddress);
// }    
//     else if (status === true) {
//         if (age === true) {
//             if (adress === true) {
//                 return filter = JSON.stringify(array.filter
//                     (user => user.status === false && user.age > 28 && user.address.city === 'Kyiv'));        
//             }
//             return filter = JSON.stringify(array.filter
//             (user => user.status === false && user.age > 28));    
//         }
//         else if (adress === true){
//             return filter = JSON.stringify(array.filter
//                 (user => user.status === false && user.address.city === 'Kyiv'));        
//         }
//         else{
//             return filter = JSON.stringify(array.filter
//                 (user => user.status === false));    
//                 }   
//         }
//     else if (age === true){
//         if (adress === true) {
//             return filter = JSON.stringify(array.filter
//                 (user => user.age > 28 && user.address.city === 'Kyiv'));         
//         }
//         return filter = JSON.stringify(array.filter
//             (user => user.age > 28)); 
//     }
//     else if (adress === true) {
//         return filter = JSON.stringify(array.filter
//             (user => user.address.city === 'Kyiv'));         
//     }
// }

// checkStatus.onclick = () => {
//     let status = checkStatus.checked;
//     let age = checkAge.checked;
//     let adress = checkAdress.checked;
//     console.log(status, age, adress)
//    checkFilter(status,age,adress,usersWithAddress);
//    div.innerText = filter;
    
// }

// checkAge.onclick = () => {
//     let status = checkStatus.checked;
//     let age = checkAge.checked;
//     let adress = checkAdress.checked;
//     console.log(status, age, adress)
//    checkFilter(status,age,adress,usersWithAddress);
//    div.innerText = filter;
// }

// checkAdress.onclick = () => {
//     let status = checkStatus.checked;
//     let age = checkAge.checked;
//     let adress = checkAdress.checked;
//     console.log(status, age, adress)
//    checkFilter(status,age,adress,usersWithAddress);
//    div.innerText = filter;
// }
// -- создать скрипт, который берет считывает на странице (rules.html) текст
//  и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
