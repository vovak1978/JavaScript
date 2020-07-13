// // - Напишіть код, який :
// // -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let header = document.getElementById('main_header');
// header.style.color = 'navy';

// // -- робить шириниу елементу ul 400 пікселів
// let ul = document.getElementsByTagName('ul');
// for (const element of ul) {
//   element.style.width = '400px';  
// }

// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// let link = document.getElementsByClassName('linkList');
// for (const element of link) {
//     element.style.width = '50%';  
//   }
  
// // -- отримує текст який зберігається в елементі з класом listElement2
// let list = document.getElementsByClassName('listElement2');
// for (const element of list) {
//     let text = element.innerText;
//     console.log(text);
// }


// // -- отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li');
// for (const element of li) {
//     element.style.backgroundColor = 'grey';  
//   }
// // -- отримує всі елементи 'a' та додає їм клас anchor
// // -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let a = document.getElementsByTagName('a');
// for (const element of a) {
//     element.className = 'anchor'; 
//     element.classList.add('element_XXX'); 
//     if(element.innerText === 'link3'){
//         element.style.fontSize = '40px'; 
//     }
//     element.innerText = 'XXX';
//   }


// // -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// // -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sub = document.getElementsByClassName('sub-header');
// let fon = prompt('Color fon?');
// let colorText = prompt('Color text?')
// for (const element of sub) {
//     element.style.backgroundColor = fon;
//     if (element.innerText === 'content 2 segment')  {
//         element.style.color = colorText;
//     }
//   }


// // -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content = document.getElementsByClassName('content_1');
// text = prompt('Text?');
// for (const element of content) {
//     element.innerText = text;
// }

// // -- отримати елементи p та змінити їм paddin на довільне значення
// let p = document.getElementsByTagName('p');
// for (const element of p) {
//     element.style.padding = '20px';
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let contentTwo = document.getElementsByClassName('text2');
// for (const element of contentTwo) {
//     element.innerText = 'KOL Kol LOP';
// }

