let userName = prompt("Введите ваше имя:");
let letter = prompt("Введите любую букву:");

userName = userName.toLowerCase();
letter = letter.toLowerCase();

if (userName.includes(letter)) {
    alert("В вашем имени присутствует буква " + letter + "!");
} else {
    alert("Буквы " + letter + " нет в вашем имени.");
}