/* Цикл for використовується у випадках, коли ви точно знаєте
скільки разів ви хочете виконати один і той самий код 
for(ініціалізацію внутрішніх змінних, тобто, лічильника; умова продовження циклу,
    поки у мова істинна - цикл йде; пост вираз, у якому будете вказувати як буде змінюватися лічильник)
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