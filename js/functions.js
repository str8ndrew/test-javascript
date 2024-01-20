// function declaration - оголошення функціїї
// () - список параметрів
// {} - тіло функції 
function displayMsg() {
    console.log("Hello World!");
}

// виклик функції
displayMsg();



// (username) - це параметр, його значення завжди буде приходити під час виклику функції зі списку аргументів
function greeting(username) {
    console.log(`Hello, ${username}!`);
}

// ("Dima") - це аргумент, це значенняя для параметру функції
greeting("Dima");
greeting("Andrii");
greeting("Karyna");




function convertToInt(string) {
    const number = Number.parseFloat(string);
    const result = Math.round(number);
    console.log(result);
    return result; /* для отримання значення (результату розрахунків всередині функції)
    у зовнішній код на місце виклику

    */
}


convertToInt("25.7px");
convertToInt("100.5px");
convertToInt("3.01px");


const newFigHeight = convertToInt("25.7px") + 5;
console.log(newFigHeight);






function calcBMI(weight, height) {
/* 1. замінити кому на крапку (наприклад через метод replace)
2. перетворюємо строку в число (наприклад через метод Number або parseFloat())
3. рахуємо індекс маси тіла та округлюємо до однієї цифри після коми
*/
    
    // перший крок
    weight = weight.replace(",", ".");
    height = height.replace(",", ".");
    
    // другий крок
    weight = Number(weight);
    height = Number(height);

    // третій крок
    const result = weight / (height * height);

    console.log(weight, height);
    return Number(result.toFixed(1));
    // .toFixed - округлює число до певної кількості цифр після коми, але цей метод повертає "рядок"
}


const bmi = calcBMI("88,3", "1.75");
console.log(bmi);






//TODO: № 2  if...else =========================================================================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

const question = prompt("Яка офіційна назва JavaScript?");
if(question === "ECMAScript") {
alert("Вірно!")
} else {
    alert("Не знаєте? ECMAScript!")
}



//TODO:  № 4   =============================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

const time = 70;
const minutes = time % 60;
console.log(minutes);
const hours = Math.floor(time / 60);
const modifyHours = String(hours).padStart(2, 0);
console.log(`${modifyHours}:${minutes}`);




//TODO: № 4
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

const num = 3;
let result = "";
switch (num) {
    case 1: result = "зима"; break;
    case 2: result = "весна"; break;
    case 3: result = "літо"; break;
    case 4: result = "осінь"; break;
    default: result = "тільки 4 пори року";
}
console.log(result);



/* Напиши скрипт перевірки підписки користувача
Є три типи підписки: "free", "vip", "pro"
Отримати доступ можуть тільки користувачі "vip" та "pro"
*/

const sub = "vip";
const canAcces = sub === "pro" || sub === "vip";
console.log(canAcces);



/* Напиши скрипт, який перевіряє можливість відкрити чат з користувачем
Для цього користувач має бути: 
- другом
- онлайн
- без режима не турбувати 
*/
const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log("Можна відкрити чат?", canOpenChat);