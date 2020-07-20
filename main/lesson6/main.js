// - создать массив с 20 числами.
// let numbers = [0,-15,2,60,25,-14,39,100,-99,16,34,20,-1,19,36,88,-2,8,11,10]

// -- при помощи метода sort и колбека  отсортировать массив.
``
// let numbersOfSort = numbers.sort((a, b) => a - b);
// console.log(numbersOfSort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let numbersOfSort = numbers.sort((a, b) => b - a);
// console.log(numbersOfSort);

// -- при помощи filter получить числа кратные 3

// let numbersOfFilter = numbers.filter(num => num % 3 === 0);
// console.log(numbersOfFilter);

// -- при помощи filter получить числа кратные 10

// let numbersOfFilter = numbers.filter(num => num % 10 === 0);
// console.log(numbersOfFilter);


// -- перебрать (проитерировать) массив при помощи foreach()

//  numbers.forEach(function(num){
//     console.log(num);
// })


// -- перебрать массив при помощи map() и получить новый массив в котором все 
// значения будут в 3 раза больше

// let map = numbers.map(num => num * 3);
// console.log(map);

// - создать массив со словами на 15-20 элементов.
// let word = ['Ola', 'kols', 'Mona', 'dina', 'baba', 'didi', 'sisi', 'mini', 'o', 
// 'tok', 'div', 'span', 'H1', 'h6','sos'];
// // -- отсортировать его по алфавиту в восходящем порядке.

// let mapLowerCase = word.map((element) => element.toLowerCase());
// let sortWord = mapLowerCase.sort((a, b) => a > b);
// console.log(sortWord);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortWord = word.sort((a, b) => b > a );
// console.log(sortWord);

// -- отфильтровать слова длиной менее 4х символов
// let wordFilter = word.filter(word => word.length < 4);
// console.log(wordFilter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения 
// будут со знаком "!" в конце
// let wordMap = word.map(word => word + '!');
// console.log(wordMap);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false},
//  {name: 'petya', age: 30, status: true},
//  {name: 'kolya', age: 29, status: true},
//  {name: 'olya', age: 28, status: false},
//  {name: 'max', age: 30, status: true},
//  {name: 'anya', age: 31, status: false}, 
//  {name: 'oleg', age: 28, status: false}, 
//  {name: 'andrey', age: 29, status: true}, 
//  {name: 'masha', age: 30, status: true}, 
//  {name: 'olya', age: 31, status: false}, 
//  {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let usersAfeSort = users.sort((user1, user2) => user1.age - user2.age)
// console.log(usersAfeSort);
// let usersAfeSort1 = users.sort((user1, user2) => user2.age - user1.age)
// console.log(usersAfeSort1);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let usersNameLength = users.sort((user1, user2) => user1.name.length - user2.name.length);
// console.log(usersNameLength);
// let usersNameLength1 = users.sort((user1, user2) => user2.name.length - user1.name.length);
// console.log(usersNameLength1);


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує
//  унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// //   та зберегти це в новий масив (первинний масив залишиться без змін)
// let newUsers = []
// for (const element of users) {
    
//     element.id = element.name.length + element.age;
//     newUsers.push(element);   

// }

// console.log(newUsers);


// // - відсортувати його за індентифікатором

// let sortId = newUsers.sort((user1, user2) => user1.id - user2.id);
// console.log(sortId);


// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком

// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let volumeCars = cars.filter(car =>  car.volume > 3);
// console.log(volumeCars);

// - двигун = 2л
// let volumeCars = cars.filter(car =>  car.volume > 2);
// console.log(volumeCars);

// - виробник мерс
// let producerCars = cars.filter(car =>  car.producer === "mercedes");
// console.log(producerCars);


// - двигун більше 3х літрів + виробник мерседес
// let producerVolumeCars = cars.filter(car =>  car.producer === "mercedes" 
// && car.volume > 3);
// console.log(producerVolumeCars);

// - двигун більше 3х літрів + виробник субару
// let producerVolumeCars = cars.filter(car =>  car.producer === "subaru" 
// && car.volume > 3);
// console.log(producerVolumeCars);

// - сили більше ніж 300
// let powerCars = cars.filter(car => car.power > 300);
// console.log(powerCars);

// - сили більше ніж 300 + виробник субару
// let powerCars = cars.filter(car => car.power > 300
// && car.producer === 'subaru');
// console.log(powerCars);

// - мотор серіі ej
// let engineCars = cars.filter(car => car.engine.startsWith("ej"));
// console.log(engineCars);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let powerCars = cars.filter(car => car.power > 300
// && car.producer === 'subaru' && car.engine.startsWith("ej"));
// console.log(powerCars);

// - двигун меньше 3х літрів + виробник мерседес
// let producerVolumeCars = cars.filter(car =>  car.producer === "mercedes" 
// && car.volume < 3);
// console.log(producerVolumeCars);

// - двигун більше 2л + сили більше 250
// let enginePower = cars.filter(car => car.volume > 2 && car.power > 250);
// console.log(enginePower);

// - сили більше 250  + виробник бмв
// let powerAndProducer = cars.filter(car => car.producer === 'bmw' && car.power > 250);
// console.log(powerAndProducer);



// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
// {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
// {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
// {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
// {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
// {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
// {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
// {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
// {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
// {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
// {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей
// let userSortById = usersWithAddress.sort((user1, user2) => user1.id - user2.id);
// console.log(userSortById);

// -- отсортировать его по id пользователей в обратном опрядке
// let userSortById = usersWithAddress.sort((user1, user2) => user2.id - user1.id);
// console.log(userSortById);

// -- отсортировать его по возрасту пользователей
// let userSortByAge = usersWithAddress.sort((user1, user2) => user1.age - user2.age);
// console.log(userSortByAge);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let userSortByAge = usersWithAddress.sort((user1, user2) => user2.age - user1.age);
// console.log(userSortByAge);

// -- отсортировать его по имени пользователей
// let userSortByName = usersWithAddress.sort((user1, user2) => user1.name > user2.name);
// console.log(userSortByName);

// -- отсортировать его по имени пользователей в обратном порядке
// let userSortByName = usersWithAddress.sort((user1, user2) => user2.name > user1.name);
// console.log(userSortByName);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let sortByAdress = usersWithAddress.sort((user1, user2) => user1.address.street > user2.address.street);
// console.log(sortByAdress);

// -- отсортировать его по номеру дома по возрастанию
// let sortByAdress = usersWithAddress.sort((user1, user2) => user1.address.number - user2.address.number);
// console.log(sortByAdress);

// -- отфильтровать (оставить) тех кто младше 30
// let filterByAge = usersWithAddress.filter(user => user.age < 30);
// console.log(filterByAge);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filterByStatus = usersWithAddress.filter(user => user.status === false);
// console.log(filterByStatus);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filterByStatus = usersWithAddress.filter(user => user.status === false
// && user.age < 30);
// console.log(filterByStatus);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filterByNumber = usersWithAddress.filter(user => user.address.number % 2 === 0);
// console.log(filterByNumber);

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

// class Driver {
//   constructor(name, age, stage){
//     this.name = name;
//     this.age = age;
//     this.stage = stage;
//   }
// }


// class Cars {
//     constructor(model, power, owner=(Driver), price, yearOfBuilding){
//         this.model = model;
//         this.power = power;
//         this.owner = owner;
//         this.price = price;
//         this.yearOfBuilding = yearOfBuilding;    
//     }
//   }
// let carOne = new Cars('polo', 150, {name: 'vasya', age: 30, stage:10}, 10000, 2009);
// let carTwo = new Cars('niro', 135, {name: 'petro', age: 25, stage: 8}, 20000, 2018);
// let carThree = new Cars('pasat', 180, {name: 'olena', age: 30, stage: 4},25000, 2015);
// let carFour = new Cars('X5', 250, {name: 'ira', age: 27, stage: 3}, 50000, 2014);
// let carFive = new Cars('octavia', 180, {name: 'ivan', age: 35, stage: 18}, 14000, 2014);
// let carSix = new Cars('prestige', 235, {name: 'taras', age: 20, stage: 1}, 8000, 2010);
// let carSeven = new Cars('outlander', 190, {name: 'oksana', age: 27, stage: 4}, 27000, 2013);
// let carEight = new Cars('leaf', 130, {name: 'ded', age: 45, stage: 25}, 30000, 2019);

// let car = [carOne, carTwo, carThree, carFour, carFive, carSix, carSeven, carEight];


// let newDriver1 = new Driver('tolik', 36, 20);
// let newDriver2 = new Driver('lilu', 20, 1);
// let newDriver3 = new Driver('pavlo', 31, 10);
// let newDriver4 = new Driver('lera', 36, 4);

// let newDrivers = [newDriver1, newDriver2, newDriver3, newDriver4];

// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів 
// // на 10% (переприсвоєння змінної потужності).
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).


//   let cars = [];
//   for (let i = 0, j = 0; i < car.length; j++ ) {
//     car[i].power = car[i].power + (car[i].power * 0.1);
//     car[i].owner = newDrivers[j];
//     cars.push(car[i]);
//     i = i + 2;
    
//   }
   



// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй 
// // підвищення потужності двигуна на 10% та ціну на 5%
//     for (let i = 0; i < cars.length; ) {
//     cars[i].power = cars[i].power + (cars[i].power * 0.1);
//     cars[i].price = cars[i].price + (cars[i].price * 0.05);
//     i = i + 2;
//      }

// // Після того зробити перевірку досвіду ВСІХ наших водіїв. 
// // Якщо досвід водія менший за 5 років, але його вік більший за 25, 
// // то необідно відправити його на курси підвищення кваліфікації, 
// // що збільшить йому досвід на 1 рік.

// for (const element of cars) {
//   for (const key in element) {
//     if (element.owner.stage < 5 && element.owner.age > 25){
//       element.owner.stage = element.owner.stage + 1;
//      }
//   }
// }
// console.log(cars);


// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let middleSum = cars.reduce((acu, cur) =>  {
//   return acu + cur.price;
//   },0);

// console.log(`Загальна сума покупки ${middleSum}`);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть 
// наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. 
// Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. 
// Если такого элемента нет в массиве, выведите -1.

// Пример:
// arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function minMaxIndexs(array) {
    let key = 5;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key){
          minIndex = i;
          for (let j = array.length; j > -1; j--) {
              if (array[j] === key) {
                  maxIndex = j;
                  console.log(`MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`);
                  return minIndex, maxIndex;   
              }              
          }
        }
      
    }
    return -1;
}

minMaxIndexs(array);
// console.log(minIndex, maxIndex);