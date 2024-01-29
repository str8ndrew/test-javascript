// Види масивів 
const planetsSun = ['Earth', 'Mars', 'Venus']; // масив рядків
const numbers = [1, 2, 3, 4, 5]; // масив чисел
const mixed = ['apple', 10, true]; // масив з елементами різних типів

// Між іменем змінної, яка зберігає масив, і квадратними дужками не повинно бути пробілу.
//  Вказуємо індекс елемента всередині квадратних дужок.
const planetS = ['Earth', 'Mars', 'Venus'];
console.log(planetS[0]); // 'Earth'
console.log(planetS[1]); // 'Mars'
console.log(planetS[2]); // 'Venus'


// Перевизначення значення елемента
// Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши нове значення.
// Цей процес називається "перевизначенням" значення елемента.
const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
planets[0] = 'Jupiter';
planets[2] = 'Neptune';
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// Довжина масиву
// Довжина масиву, тобто кількість його елементів, зберігається у властивості length.
//  Це динамічна величина, яка автоматично змінюється під час додавання або видалення елементів.
// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets.length); // 3


// Знання довжини масиву корисно, коли нам потрібно перевірити, скільки елементів у масиві на даний момент.
// const planets = ['Earth', 'Mars', 'Venus'];

// if(planets.length >= 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("3 or less elements");
// }


// Масив → Рядок
// При перетворенні масиву в рядок усі елементи масиву об'єднуються в один рядок, розділений комами.

const array = [1, true, "Poly"];
console.log(String(array)); // "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"

// Масив → Логічне значення (буль)
// При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.


// Методи масиву
// Метод join()
// Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
// У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'


// Метод slice()
// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
// не змінюючи його.Копія створюється від індексу begin до, але не включаючи індекс end.

const planetss = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planetss.slice(0, 2)); // ['Earth', 'Mars']
console.log(planetss.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planetss.slice(1, 3)); // ['Mars', 'Venus']

// Результат роботи методу slice() можна зберегти у змінну для подальшого використання:
const planet = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
const result = planet.slice(1, 3);
console.log(result); // ["Mars", "Venus"]

// Метод concat()
// Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.

const firstArrays = ["Mercury", "Venus"];
const secondArrays = ["Mars", "Jupiter"];
const results = firstArrays.concat(secondArrays);
console.log(results); // ["Mercury", "Venus", "Mars", "Jupiter"];


// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом.
// const values = "8 11";
// function calculateArea(values) {
//     const valuesArr = values.split(" ");
//     const width = Number(valuesArr[0]);
//     const height = Number(valuesArr[1]);
//     return width * height;
// }



// Напиши скрипт, який виводить у консоль всі слова рядка
// крім першого і останнього.Результуючий рядок не повинен починатися
// або закінчуватися символом пробілу.
// Скрипт повинен працювати для будь - якого рядка.

const