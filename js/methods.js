/* includes(string) - перевіряє чи є підрядок стрінг в рядку, на якому викликається цей метод.
Якщо цей підрядок знайдено, то метод поверне тру, якщо ж підрядка не знайдено повертає фолс.
*/

const userStack = "I know HTML, CSS, JS, Node.js";

const isUserKnowHtml = userStack.includes("HTML");
console.log(`HTML: ${isUserKnowHtml}`);


/* startsWith/endsWith - перевіряють чи починається/закінчується рядок якимось символом або іншим підрядком.
Повертають тру або фолс
*/

const url = "https://example.com";

function isUrlSafe(url) {
    return url.startsWith("https");
}

console.log(`site ${url} safety status: ${isUrlSafe(url)}`);

function isBaseUrl(url) {
    return url.endsWith(".com");
}

console.log(`is ${url} base: ${isBaseUrl(url)}`);

/* indexOf(string) - повертає перший індекс початку підрядка стрінг у рядку, в якому викликається.
Якщо такого підрядка немає, то повертається -1
*/

const text = "Hello everyone. My name is Sean.";
const firstSentence = getTextBeforeDivider(text, ".")
console.log(firstSentence);

function getTextBeforeDivider(text, divider) {
    const index = text.indexOf(divider);

    if (index === -1) {
        console.log("Такого розділювача не існує!");
        return "";
    }
    
    return text.slice(0, index + 1);
}

/* trim() - повертає новий рядок, у якому видалені зайві пробіли на початку та кінці рядку.
"    hello world!    ".trim()  після буде "hello world!"
*/

const firsrName = "     John    ";
console.log(`Hello, ${firsrName.trim()}!`);

const test = " JoHn SnOW   ";
console.log(test.trim().toLocaleLowerCase());