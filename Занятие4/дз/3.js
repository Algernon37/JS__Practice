"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

function generateArray(length) {
    const array = [];
    for (let index = 0; index < length; index++) {
        array.push(Math.floor(Math.random() * 10));
    };
    return array;
};

function main() {
    const array = generateArray(5);
    const result = [];

    const sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    const minValue = Math.min(...array);

    (function indexOfThree(array, result) {
        for (let index = 0; index < array.length; index++) {
            if (array[index] === 3) {
                result.push(index);
            };
        };
        return result;
    })(array, result);

    console.log("Сгенерированный массив:", array);
    console.log("Сумма элементов массива:", sum);
    console.log("Минимальное значение в массиве:", minValue);
    console.log("Массив индексов со значением 3:", result);
};

main();
