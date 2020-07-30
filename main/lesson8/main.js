// Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время,
//  введенный текст остался в textarea.
// const area = document.querySelector('#store');
// area.value = localStorage.getItem('item');

// window.onbeforeunload = () => {
//     localStorage.setItem('item', area.value);
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" 
// и они "фикисруются" (в хранилище), затем поредактировать их, 
// затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться 
// по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const area = document.querySelector('#store');
// const btn = document.querySelector('#btn');
// const div =  document.querySelector('#content')

// const btnLeft = document.createElement("button");
// btnLeft.innerText = ('Назад');
// div.appendChild(btnLeft);
// const btnRight = document.createElement("button");
// btnRight.innerText = ('Вперед');
// div.appendChild(btnRight);   
// btnRight.hidden = true;
// btnLeft.hidden = true;

// if (localStorage.length > 0){
//   i = localStorage.length;
//   j = i;
//   area.value = localStorage.getItem(i);  
//   btnRight.hidden = false;
//   btnLeft.hidden = false;
// }
//    else{
//     i = 0;
//    }
     
// btn.onclick = () => {
//     i = i + 1;   
//     j = i; 
//     localStorage.setItem(i, area.value);
//    btnRight.hidden = false;
//    btnLeft.hidden = false;
//     }


// btnLeft.onclick = () => {
//    if (j > 1) { 
//     j = j - 1;
//   area.value = localStorage.getItem(j);
// }
// }

// btnRight.onclick = () => {
//     if (j < i){
//     j = j + 1;
//   area.value = localStorage.getItem(j);
//     }
// }

