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
const fullNames = "Andrii Ostrianin";
console.log(fullNames.slice(4, 6)); // ii
console.log(fullNames.slice(7)); // Ostrianin 
console.log(fullNames.slice(0, fullNames.length)); // Andrii Ostrianin
const surname = fullNames.slice(7);
console.log(surname);


// Метод includes()
/* Метод рядків includes() використовується для перевірки наявності підрядка у рядку.
Він повертає логічне значення true, якщо підрядок знайдено, і false, якщо підрядок відсутній.
Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - 
результат перевірки входження підрядка firstName у рядок fullName.

fullName - рядок, що містить повне ім'я
firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені
(параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий.
 Перед перевіркою входження не забудь прирівняти їх до однакового регістру. */
 function checkForName(fullName, firstName) {
  if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
    return true;
  }
  return false;
}

// Метод indexOf()
/* Метод indexOf() використовується для пошуку першого входження підрядка в рядок. Він повертає:

індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або
-1, якщо підрядок не виявлено */

const messages = "Welcome to Bahamas!";
const index = messages.indexOf("to");
console.log(index); // 8


