let drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
}

drawCats(3);

/* Math.round(num): повертає значення числа після округлення до найближчого
цілого. Округлення відбувається за математичними правилами, якщо десяткова
частина числа менша 0.5, то округлення буде в меншу сторону, якщо 0.5 і більше — то в більшу. */
console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2


/* Метод toFixed() повертає рядок, що представляє число із зазначеною кількістю знаків після крапки.
Таким чином, ми можемо отримати заокруглений результат з необхідною точністю.
*/

console.log((0.1 + 0.2).toFixed(1));
console.log((2.2133453).toFixed(5));


// метод перетворює рядок з плаваючою крапкою на число

const value = "24.5px";
const numerical = Number.parseFloat(value);
console.log(numerical); // 24.5


//------------------------> FUNCTIONS <------------------------//
// Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Передача аргументів
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"



//------------------------> МЕТОДИ РЯДКІВ <------------------------//
/* Метод slice() копіює підрядок із вихідного рядка,починаючи з індексу startIndex і 
до(не включаючи) індексу endIndex, і повертає цю копію як новий рядок. */
const fullName = "Andrii Ostrianin";
console.log(fullName.slice(4, 6)); // ii
console.log(fullName.slice(7)); // Ostrianin 
console.log(fullName.slice(0, fullName.length)); // Andrii Ostrianin
const surname = fullName.slice(7);
console.log(surname);


