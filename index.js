// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом.
// Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
const celDegrees = 20;
let ferDegrees = celDegrees * 33.8;
console.log(celDegrees, "=", ferDegrees);
// Створити змінну для зберігання кількості днів у місяці.
// Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
const daysInMonth = 30;
let hoursInMonth = daysInMonth * 60;
let minutesInMonth = hoursInMonth * 60;
console.log(daysInMonth, " days in a month ", hoursInMonth, " hours in a month ", minutesInMonth, " minutes in a month ");
// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі.
// Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
let health = 100;
let energy = 100;
health -= 20;
energy -= 30;
console.log("new health ", health);
console.log("new energy ", energy);
// Створити змінну для зберігання суми покупки в магазині.
// Застосувати знижку в розмірі 10 % до цієї суми за допомогою оператора множення та вивести результат в консоль.
let sum = 120;
sum = sum * 0.9;
console.log("sum after discount ", sum);
// Створити змінну для зберігання числа з плаваючою комою.
// Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
let float = 3.14159265358979;
console.log(Math.floor(float));
// Створити змінну для зберігання рядка, який містить числа з плаваючою комою.
// Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
let floatNum = "3.1415";
console.log(parseFloat(floatNum));
// Створити змінну для зберігання рядка, який містить ціле число.
// Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
let num = "6";
console.log(parseInt(num));
// Створити змінну для зберігання числа. Використати метод Math.sqrt()
// для обчислення квадратного кореня числа та вивести результат в консоль.
let squareRoot = 16;
console.log(Math.sqrt(squareRoot));
// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка.
// Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
// Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
let wholeInt = 5;
let stringNum = "30";
console.log(wholeInt.toString());
console.log(parseInt(stringNum));
