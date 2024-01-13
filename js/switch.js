let word = 'Some';

switch (word) {
    case "new":
        console.log("Var is new");
        break;
    case 5:
        console.log("Var is 5");
        break;
    case "Some":
        console.log("Var is some");
        break;
    case 15:
        console.log("Var is 15");
        break;
    default:
        console.log("Var is unknown");
}


console.log("2" > "12"); /* 
при порівнянні строки і числа все приведеться до числа,
але коли ви порівнюєте строки, то вони порівнюються посимвольно за лексикографіччним словником.
(unicode)
*/

// 50 > 49 true
console.log("2".charCodeAt(0)) // 50
console.log("1".charCodeAt(0)) // 49

console.log("a" > "A");
// 97 > 65 true
console.log("a".charCodeAt(0)) // 97
console.log("A".charCodeAt(0)) // 65





// Суворе порівняння 
console.log("6" === 6); // false
/* порівнянн без зведення типів (суворе порівняння), суворе порівняння спочатку порівнює типи даних значень,
а тільки потім самі значення, якщо ж типи даних будуть різні, результатом порівняння буде false, навіть якщо
самі значення будуть рівні
"6" === 6 | string === number // false
*/