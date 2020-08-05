// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

function timeOut(min,max) {
    return Math.random() * ((max - min) + min);
}

function getUp(isGetUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGetUp) {
                console.log("Ти не проспав, і це добре");
                resolve(true);
            }
            else{
                console.log("Ти проспав і день пропав");
                reject('ERRORR');
            }
        }, timeOut(4000, 1000))
    
    })
}

function breakfast(isGas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGas) {
                console.log('Сніданок готовий')
                resolve(true);
            }
        else{
            console.log('Ти голодний і дуже злий')
            reject('ERRORR');
        }
        }, timeOut(5000, 2000))
    })
    
}

function Job(isJobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isJobDone) {
                console.log(`ти заробив 400 гривень`);
                resolve(400);
            }
            else{
                console.log('Ти без грошей і це погано для тебе')
                reject('ERRORR');
            }
        }, timeOut(3000, 500))
    })
    
} 

function dinner(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 200) {
                console.log('Ти ситий і ти радієш життю');
                resolve(true);
            }
            else{
                console.log('без вечері ти пропав');
                reject('ERRORR');
            }
        }, timeOut(4000, 2000))
    })
}

function running(isRain) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (!isRain) {
                console.log("нема нічого кращого за вечірню пробіжку");
                resolve(true);
            }
            else{
                console.log("без пробіжки не заснеш");
                reject('ERRORR');
            }
        }, timeOut(5000, 2000))
    })
}

function shower(isWater) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWater) {
                console.log('ти помитий можеш іти спати');
                resolve(true);
             }
             else{
                 console.log('брудний не заснеш');
                 reject("ERRORR");
             }
        }, timeOut(4000, 1000))
    })
}

async function daySheldue() {
    try {
        let getUps = await getUp(true);
    
        let breakfasts = await breakfast(true); 
    
        let reward = await Job(true);

        let diners = await dinner(reward);

        let runnings = await running(false);

        let showers = await shower(true);

    } catch (error) {
        console.error(error)
    }
}
daySheldue();