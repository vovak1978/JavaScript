// // -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru

// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select
// //  Приклад результату
// //    {
// //         titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //         attrs: [
// //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области 
// // с помощью комбинации клавиш'},
// //         {/*some props and values*/},
// //         {/*...*/},
// //         {/*...*/},
// //         ]

// //    }
// class Tag{
//     constructor(titleOfTag, action, attrs = (titleOfAttr, actionOfAttr)){
//         this.titleOfAttr = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
// let aTag = new Tag('area', `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// [{titleOfAttr: 'accesskey', actionOfAttr:'Переход к области с помощью комбинации клавиш'}, 
// {titleOfAttr: 'coords', actionOfAttr:'Устанавливает координаты активной области.'}]);
// console.log(aTag);

// let divTag = new Tag('div', `является блочным элементом и предназначен для выделения фрагмента документа...`,
// [{titleOfAttr: 'alighn', actionOfAttr:'Задает выравнивание содержимого тега <div>'}, 
// {titleOfAttr: 'title', actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(divTag);

// let hTag = new Tag('h1', `представляет собой наиболее важный заголовок первого уровня...`,
// {titleOfAttr: 'alighn', actionOfAttr:'Определяет выравнивание заголовка. '});
// console.log(hTag);

// let spanTag = new Tag('span', `предназначен для определения строчных элементов документа...`,
// [{titleOfAttr: 'contenteditable', actionOfAttr:'Сообщает, что элемент доступен для редактирования пользователем.'}, 
// {titleOfAttr: 'hidden', actionOfAttr:'Скрывает содержимое элемента от просмотра'}]);
// console.log(spanTag);

// let inputTag = new Tag('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные...`,
// [{titleOfAttr: 'alt', actionOfAttr:'Альтернативный текст для кнопки с изображением.'}, 
// {titleOfAttr: 'border', actionOfAttr:'Толщина рамки вокруг изображения. '}]);
// console.log(inputTag);

// let formTag = new Tag('form', `Тег <form> устанавливает форму на веб-странице....`,
// [{titleOfAttr: 'target', actionOfAttr:'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат'}, 
// {titleOfAttr: 'name', actionOfAttr:'Имя формы '}]);
// console.log(formTag);

// let optiontTag = new Tag('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью ...`,
// [{titleOfAttr: 'disabled', actionOfAttr:'Заблокировать для доступа элемент списка'}, 
// {titleOfAttr: 'label', actionOfAttr:'Указание метки пункта списка. '}]);
// console.log(optionTag);

// let selectTag = new Tag('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка,...`,
// [{titleOfAttr: 'size', actionOfAttr:'Количество отображаемых строк списка.'}, 
// {titleOfAttr: 'tabindex', actionOfAttr:'Определяет последовательность перехода между элементами при нажатии на клавишу Tab '}]);
// console.log(selectTag);

// ==============================================



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} 
// на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
//  на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, 
// і доавляет його в поточний об'єкт car
// ==============================================
// let driver = {
//     name: 'vasya',
//     age: 31
// }

// let cars = {
//         model: 'T5',
//         producer: 'VW',
//         yearBuilding: 2007,
//         maxSpeed: 160,
//         valueEngine: 1900,
//         drive: function () {
//         document.write('Їдемо зі швидкістю' + this.maxSpeed);
//         }, 
//         addDriver:  function(driver){
//             this.driver = driver;
//         },
//         info: function (){
//         console.log(`model ${this.model}, producer ${this.producer}, 
//         year of building ${this.yearBuilding}, max speed ${this.maxSpeed}, 
//         value engine ${this.valueEngine}, driver ${this.driver}`);
//         },
//         increaseMaxSpeed: function(newSpeed){
//             this.maxSpeed = newSpeed;
//             console.log(this.maxSpeed);

//         },
//         changeYear: function(newValue){
//             this.yearBuilding = newValue;
//             console.log(this.yearBuilding)
//         }

//     }



// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, 
// з властивостями модель, виробник, рік випуску, максимальна швидкість, 
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на 
// значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, 
// і доавляет його в поточний об'єкт car
// ==============================================

// function Cars(model, producer, yearBuilding, maxSpeed, valueEngine) {
//     this.model = model;
//     this.producer = producer;
//     this.yearBuilding = yearBuilding;
//     this.maxSpeed = maxSpeed;
//     this.valueEngine = valueEngine;
//     this.drive = function () {
//     console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
//     } 
//     this.info = function (){
//     console.log(`model ${this.model}, producer ${this.producer}, 
//     year of building ${this.yearBuilding}, max speed ${this.maxSpeed}, 
//     value engine ${this.valueEngine}, driver ${this.driver} `);
//     }
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function(newValue){
//         this.yearBuilding = newValue;
//     }
//     this.addDriver = function(driver){
//         this.driver = driver;
//     }
// }

//     let cars = new Cars( 'T5', 'Vw', 2007, 160, 1900);
//     let dri = {
//         name: 'vasya',
//         age: 31
//     }
// console.log(cars);
// cars.increaseMaxSpeed(200);
// cars.changeYear(2010)
// cars.drive();
// cars.addDriver(dri);
// console.log(cars);
// cars.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
// на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і доавляет його в поточний об'єкт car
// ==============================================

// class Cars{
//     constructor(model, producer, yearBuilding, maxSpeed, valueEngine){
//         this.model = model;
//         this.producer = producer;
//         this.yearBuilding = yearBuilding;
//         this.maxSpeed = maxSpeed;
//         this.valueEngine = valueEngine;
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
//         } 
//     info (){
//         console.log(`model ${this.model}, producer ${this.producer}, 
//         year of building ${this.yearBuilding}, max speed ${this.maxSpeed}, 
//         value engine ${this.valueEngine}, driver ${this.driver} `);
//         }
//     increaseMaxSpeed (newSpeed){
//             this.maxSpeed = newSpeed;
//         }
//     changeYear (newValue){
//             this.yearBuilding = newValue;
//         }
//     addDriver (driver){
//             this.driver = driver;
//         }
// }
// let cars = new Cars('T5', 'Vw', 2007, 160, 1900)
// let dri = {
//             name: 'vasya',
//             age: 31
//         }
//     console.log(cars);
//     cars.increaseMaxSpeed(200);
//     cars.changeYear(2010)
//     cars.drive();
//     cars.addDriver(dri);
//     console.log(cars);
//     cars.info();
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік,
//  туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella{
//     constructor(name, age, sizeFoot){
//         this.name = name;
//         this.age = age;
//         this.sizeFoot = sizeFoot;
//     }
// }
// `let cindy = new Cinderella('cindy', 19, 30);
// let mindy = new Cinderella('mindy', 20, 31);
// let hindy = new Cinderella('hindy', 21, 32);
// let mandy = new Cinderella('mandy', 22, 33);
// let tindy = new Cinderella('tindy', 23, 34);
// let mundy = new Cinderella('mundy', 24, 35);
// let bundy = new Cinderella('bundy', 25, 36);
// let tedy = new Cinderella('tedy', 26, 37);
// let medy = new Cinderella('medy', 27, 38);
// let mody = new Cinderella('mody', 28, 39);

// let array = [cindy, mindy, hindy, mandy, tindy, mundy, bundy, tedy, medy, mody];`
// // console.log(array);

// class Prince extends Cinderella {
//     constructor(name, age, sizeFootOfShoes){
//         super(name, age);
//     this.sizeFootOfShoes = sizeFootOfShoes;
//     }

// }

// let prince = new Prince('Hary', 40, 39);
// // console.log(prince);

// for (const element of array) {
//     for (const key in element) {
//         if (prince.sizeFootOfShoes === element.sizeFoot) {
//             console.log(`${element.name} is your Cinderella.`)
            
//         }
        
//     }
// }

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з 
// полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому
//  підходить
// ==============================================

// function Cinderella(name, age, sizeFoot) {
//     this.name = name;
//     this.age = age;
//     this.sizeFoot = sizeFoot;
// }

// let cindy = new Cinderella('cindy', 19, 30);
// let mindy = new Cinderella('mindy', 20, 31);
// let hindy = new Cinderella('hindy', 21, 32);
// let mandy = new Cinderella('mandy', 22, 33);
// let tindy = new Cinderella('tindy', 23, 34);
// let mundy = new Cinderella('mundy', 24, 35);
// let bundy = new Cinderella('bundy', 25, 36);
// let tedy = new Cinderella('tedy', 26, 37);
// let medy = new Cinderella('medy', 27, 38);
// let mody = new Cinderella('mody', 28, 39);

// let array = [cindy, mindy, hindy, mandy, tindy, mundy, bundy, tedy, medy, mody];

// function Prince(name, age, sizeFootOfShoes) {
    
//     this.name = name;
//     this.age = age;
//     this.sizeFootOfShoes = sizeFootOfShoes;
//     this.seek = function () {
//     for (const element of array) {
//         for (const key in element) {
//             if (this.sizeFootOfShoes === element.sizeFoot) {
//                 console.log(`${element.name} is your Cinderella.`)
                
//             }
            
//         }
//     }
        
//     }
// }
//     let prince = new Prince('Hary', 40, 39);
//     prince.seek();