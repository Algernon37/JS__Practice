"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = +prompt("Введите целое число в интервале [1, 32)");

if (Number.isNaN(dayNumber) || dayNumber < 1 || dayNumber >= 32) {
    console.log("Неверное значение");
} else if (dayNumber <= 10) {
    console.log(`Число ${dayNumber} попадает в 1 декаду месяца`);
} else if (dayNumber <= 20) {
    console.log(`Число ${dayNumber} попадает в 2 декаду месяца`);
} else {
    console.log(`Число ${dayNumber} попадает в 3 декаду месяца`);
};





