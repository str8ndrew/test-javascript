/* Цикл for використовується у випадках, коли ви точно знаєте
скільки разів ви хочете виконати один і той самий код 
for(ініціалізацію внутрішніх змінних, тобто, лічильника; умова продовження циклу,
    поки умова істинна - цикл йде; пост вираз, у якому будете вказувати як буде змінюватися лічильник)
*/

for (let i = 0; i < 5; i += 1) {
    console.log(i, "Hello world!");
}

for (let i = 10; i > 0; i -= 1) {
    console.log(i, "My name is Andrii");
}

for (let i = 2; i <= 30; i += 2) {
    console.log(i);
}


/* while - використовується тоді, коли ми не знаємо точну кількість ітерацій,
але знаємо умову до яких пір повинен виконуватися цикл
*/

let counter = 0;
while (counter < 10) {
    console.log(counter);
    counter += 1;
}

console.log("While examples");

const correcrPass = "qwerty";
let userPass = prompt("Enter your password");
let attempts = 3;
while (userPass !== correcrPass && attempts > 2) {
    userPass = prompt("Your password isnt correct. Try again!");
    attempts -= 1;
}

console.log(userPass);


let clientCounter = 18;
const maxClients = 25;
while (clientCounter < maxClients) {
    console.log(clientCounter);
    clientCounter += 1;
}
console.log("While examples");


/* Напиши скрипт, який підраховує суму всіх парних чисел, 
які входять в діапазон чисел у змінних від мін до макс.
Наприклад, якщо мін = 0 і макс = 5, то діапазон 0-5, і в 
ньому два парних числа - 2 і 4, їх сума 6.
*/

const min = 5;
const max = 15;
let total = 0;
for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0 && i !== 0) {
        console.log("Even: ", i);
        total += i;
    }
}

console.log(`TOTAL: ${total}`);

