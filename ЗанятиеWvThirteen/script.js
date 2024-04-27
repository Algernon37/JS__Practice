"use strick";

//1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

(function firstFunction() {
    const arr = [1, 5, 7, 9];
    console.log(Math.min(...arr));
})();

//2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.


function createCounter(init) {
    let obj = {
        increment: function() {
            return ++init;
        },
        decrement: function () {
            return --init;
        }
    };
    return obj;
};

console.log(createCounter(1).increment());


//3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
    if (root.classList.contains(className)) {
        return root;
    } else {
        for (let i = 0; i < root.children.length; i++) {
            const foundElement = findElementByClass(root.children[i], className);
            if (foundElement) {
                return foundElement; 
            }
        }
        return null;
    }
};

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);