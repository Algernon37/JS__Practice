"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumber1 = +prompt('Введите первое число: ', 0);
const userNumber2 = +prompt('Введите второе число: ', 0);
const userNumber3 = +prompt('Введите третье число: ', 0);

function comparing(a, b, c) {
    const result = Math.max(a,b,c);
    console.log(`Максимальное значение среди чисел ${a}, ${b}, ${c} равно ${result}`);
};

comparing(userNumber1, userNumber2, userNumber3);

