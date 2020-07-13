
// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let windows = {
//     width: 130,
//     height: 150,
//     tone: true,
// }
// let monitor = {
//     diagonal: 21,
//     model: 'Flatron',
//     lcd: true
// }
// let women = {
//     name: 'Ira',
//     age: 30,
//     status: false,
// }
// let room = {
//     furniture: true,
//     TV: false,
//     balcony: false
// }
// let bed = {
//     size: 'king',
//     color: 'red',
//     matrace: 'ortho'
// }

// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let car = {
//     model: 'siat',
//     plus:['abs', 'hui'],
//     fuel:{
//         firstFuel: 'benzin',
//         secondFuel: 'electric'
//     } 
// }
// let flat = {
//     floor: 'second',
//     room: ['kitchen', 'bedroom', 'bathroom'],
//     owners: {
//         mainOwner: 'Lion',
//         coOwner: 'Cat'
//     }
// }

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// let array = [windows, monitor, women, room, bed];
// for (const key in windows) {
//     console.log(key);
// }
// for (const key in monitor) {
//     console.log(key);
// }
// for (const key in women) {
//     console.log(key);
// }
// for (const key in room) {
//     console.log(key);
// }
// for (const key in bed) {
//     console.log(key);
// }
// for (const key in car) {
//     console.log(key);
// }
// for (const key in flat) {
//     console.log(key);
// }
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(windows));
// console.log(Object.keys(monitor));
// console.log(Object.keys(women));
// console.log(Object.keys(room));
// // console.log(Object.keys(bed));
// // console.log(Object.keys(car));
// // console.log(Object.keys(flat));

// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars =[
//     {model: 'AUDI', year: 1995, power: 1500, color: 'black'},
//     {model: 'VW', year: 1999, power: 1500, color: 'black'},
//     {model: 'SIAT', year: 1990, power: 1500, color: 'white'},
//     {model: 'KIA', year: 1991, power: 1500, color: 'black'},
//     {model: 'Nissan', year: 1993, power: 2000, color: 'black'},
//     {model: 'Honda', year: 1998, power: 1500, color: 'black'},
//     {model: 'Mazda', year: 1997, power: 1500, color: 'black'},
//     {model: 'Huyndai', year: 1996, power: 1600, color: 'black'},
//     {model: 'Scoda', year: 1998, power: 1500, color: 'black'},
//     {model: 'Tesla', year: 2015, power: 1500, color: 'black'}
// ]
// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// i = 0;
// while(i < cars.length){
//     console.log(cars[i]);
//     i++;
// }


// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for(i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }


// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const element of cars) {
//     console.log(element);    
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let windowJson = JSON.stringify(windows);
// let monitorJson = JSON.stringify(monitor);
// let womenJson = JSON.stringify(women);
// let roomJson = JSON.stringify(room);
// let bedJson = JSON.stringify(bed);
// let carJson = JSON.stringify(car);
// let flatJson = JSON.stringify(flat);

// // - взять json из задания 11 и превратить их обратно в объекты.
// let parsedWindows = JSON.parse(windowJson);
// let parsedMonitor = JSON.parse(monitorJson);
// let parsedWomen = JSON.parse(windowJson);
// let parsedroom = JSON.parse(roomJson);
// let parsedbed = JSON.parse(bedJson);
// let parsedcar = JSON.parse(carJson);
// let parsedflat = JSON.parse(f);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (const element of cars) {
//     elementJson = JSON.stringify(element);
//     console.log(elementJson);
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let array = [];
// i = 0;
// while(i < cars.length){
//     iJson = JSON.stringify(cars[i]);
//     array.push(iJson);
//     i++;
// }
// console.log(array);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let users = [
//     {name: 'Ivan', age: 30, skills:['java', 'payton']},
//     {name: 'Petro', age: 35, skills:['js', 'c']},
//     {name: 'Olga', age: 30, skills:['c++', 'react']}
// ]
// let array = [];
// for (i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for(j = 0; j < users[i].skills.length; j++){
//         console.log(users[i].skills[j]);
//         array.push(users[i].skills[j]);
//     }
//        }
// // console.log(array);

// // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users =  [
//  {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//  {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//  {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//   {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//   {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];


// for (i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for(j = 0; j < users[i].skills.length; j++){
//         console.log(users[i].skills[j]);

//     }
//        }


            			// let users = [{
            			// 	name: 'vasya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            			// 	name: 'petya',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            			// 	name: 'kolya',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            			// 	name: 'max',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            			// 	name: 'anya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            			// 	name: 'oleg',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            			// 	name: 'andrey',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            			// 	name: 'masha',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            			// 	name: 'max',
            			// 	age: 31,
            			// 	status: true,
            			// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let array = [];
// for(i = 0; i < users.length; i++){
//    array.push(users[i].address);
// }
// console.log(array);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const element of users) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     div.innerText = JSON.stringify(element);   
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const element of users) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
    
//     for (const key in element) {
//         let divka = document.createElement('div')
//         divka.innerText = JSON.stringify(element[key]);  
//         div.appendChild(divka);
//     }
       
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const element of users) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
    
//     for (const key in element) {
//         let divka = document.createElement('div')
//         divka.innerText = JSON.stringify(element[key]);  
//         div.appendChild(divka);
//         for (const adress in element[key]) {
//             let divka1 = document.createElement('div')
//             divka1.innerText = JSON.stringify(key[adress]);  
//             divka.appendChild(divka1);
//         }
//     }
    
    
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [
//             {id: 1, name: 'vasya', age: 31, status: false}, 
//             {id: 2, name: 'petya', age: 30, status: true}, 
//             {id: 3, name: 'kolya', age: 29, status: true}, 
//             {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [
//             {user_id: 3, country: 'USA', city: 'Portland'},
//             {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//             {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//             {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// usersWithId.sort((a, b) => a.id > b.id ? 1 : -1);
// citiesWithId.sort((a, b) => a.user_id > b.user_id ? 1 : -1);
// let usersWithCities = [];
// for(i = 0; i < usersWithId.length; i++){
//    let element = usersWithId[i];
//    element['adress'] = citiesWithId[i];
//    usersWithCities.push(element); 
   
// }
// console.log(usersWithCities);
 




// // - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let id  = document.getElementById('first');
// // console.log(id.innerText);
// let clas = document.getElementsByClassName('new');
// for (const element of clas) {
// 	// console.log(element.innerText);
// }
// let teg = document.getElementsByTagName('p');
// for (const element of teg) {
// 	// console.log(element.innerText);
// }
// // - змінити цей текст використовуючи селектори id, class,  tag

// id.innerText = '11111111111111111';

// for (const element of clas) {
// 	element.innerText = '2222222222222';
// }

// for (const element of teg) {
// 	element.innerText = '3333333333333';
// }
// // - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// id.style.width = '400px';
// id.style.height = '400px';
// for (const element of clas) {
// 	element.style.width = '600px';
// 	element.style.height = '600px';
// }
// for (const element of teg) {
// 	element.style.width = '800px';
// 	element.style.height = '600px';
// }
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// let row = document.createElement('tr');
// table.appendChild(row);
// for(i = 0; i < 3; i++){
// 	let cell = document.createElement('td');
// 	row.appendChild(cell)
// }
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);

// for(row = 0; row < 10; row++){
// 	let row = document.createElement('tr');	
// 	table.appendChild(row);
// 		let cell = document.createElement('td');
// 		row.appendChild(cell);
// 		let cell1 = document.createElement('td');
// 		row.appendChild(cell1);
// 		let cell2 = document.createElement('td');
// 		row.appendChild(cell2);
// 	}


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// for(row = 0; row < 10; row++){
// 	let row = document.createElement('tr');	
// 	table.appendChild(row);
// 	for(cell = 0; cell < 5; cell++){
// 		let cell = document.createElement('td');
// 		row.appendChild(cell);
// 	}
		
// 	}

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = prompt('кількість рядів?');
// let m = prompt('кількість ячейок?');
// let table = document.createElement('table');
// document.body.appendChild(table);
// for(row = 0; row < n; row++){
// 	let row = document.createElement('tr');	
// 	table.appendChild(row);
// 	for(cell = 0; cell < m; cell++){
// 		let cell = document.createElement('td');
// 		row.appendChild(cell);
// 	}
		
// 	}

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний1111