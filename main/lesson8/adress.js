// Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, 
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными 
// объекта

const saveBtn = document.querySelector('#savebtn');
const editbtn = document.querySelector('#editbtn');
const addbtn = document.querySelector('#addbtn');

const data = document.querySelector('#data');
const name = document.querySelector('#pib');
const telephone = document.querySelector('#tele');
const mail = document.querySelector('#email');
const firm = document.querySelector('#firm');
const department = document.querySelector('#department');
const dateBirthday = document.querySelector('#date');

const text = document.querySelector('#text');
const list = document.querySelector('#select');

const edit = document.querySelector('#edit');
const person = document.querySelector('#person');

let nameArray = [];

window.onload = () => {
    data.hidden = true;
    edit.hidden = true;
    list.hidden = true;
   for (let i = 0; i < localStorage.length; i++) {
    nameArray.push(localStorage.key(i));   
   }
   
}

text.onkeyup = () => {
    list.hidden = false;
    let letter = text.value;
    let filterArray = nameArray.filter(letters => letters.startsWith(letter));
    list.innerHTML = "";
    filterArray.forEach(element => {
        const option = document.createElement('option');
        option.innerText = element;
        list.appendChild(option);
        
        option.onclick =() => {
             edit.hidden = false;
             const adressObject = JSON.parse(localStorage.getItem(element));
             person.value = element;
                                      
                 }
                 editbtn.onclick = () => {
                    data.hidden = false;
                    name.value = element;
                    telephone.value = adressObject.telephone;
                    mail.value = adressObject.mail;
                firm.value = adressObject.firm;
                department.value = adressObject.department;
                dateBirthday.value = adressObject.dateBirtday;
                                   
                }      
    });

}

addbtn.onclick = () => {
    data.hidden = false;
  
}


saveBtn.onclick = () => {
       let object = {
        telephone: telephone.value,
        mail: mail.value,
        firm: firm.value,
        department: department.value,
        dateBirtday: dateBirthday.value
            }        
  localStorage.setItem(name.value, JSON.stringify(object));
}
