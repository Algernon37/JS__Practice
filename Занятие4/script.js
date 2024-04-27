// let count = 0;

// function counterClickButton() {
//     alert(`Вы нажали на кнопку ${++count} раз`)
// }

// const word = 'cat';
// console.log(word.split(''))

// const a = 'papa';

// let v = a.split('');

// const b = v.shift();
// const c = v.shift();

// console.log(b);
// console.log(c);

// let a = 0;
// const myArray = [1, 2, 3];

// myArray.unshift(a);
// console.log(myArray);

// const array = [1, 2, 3, 7, 29];

// for (let index = 0; index < array.length; index++) {
//     if (array[index] >= 5) {
//         console.log(array[index]);
//     } else {
//         continue;
//     };
// };

function f() {
    const array = ['ёлка', 'елка', 'ель'];
    const answer = prompt("Зимой и летом одним цветом");

    array.includes(answer) ? alert("Good job!") : alert("Wrong!");
};

