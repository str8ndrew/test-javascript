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