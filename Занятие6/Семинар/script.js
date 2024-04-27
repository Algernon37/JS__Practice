/* 1 Задание
<div id="block">
<p>1</p>
<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, 
выведите его в консоль
Получите ссылку на первый абзац с классом www. 
и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */

// console.log(document.querySelector('p'));
// console.log(document.querySelector('.www'));
// console.log(document.querySelectorAll('.www'));

// 2 Задание 
//Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”

// const a = document.querySelector('.link');
// a.textContent = 'link text html';

// Заменить href, на значение https://developer.mozilla.org/ru/ 

// a.href = 'https://developer.mozilla.org/ru/';

// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const imgEl = document.querySelector('.photo');
// imgEl.src = 'https://img.freepik.com/premium-photo/a-white-kitten-with-a-fluffy-tail-sits-on-a-blue-background_962508-11589.jpg?w=740';

// 3 Задание 
//Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const textElm = document.createElement('p');
// textElm.textContent = 'Новый текстовый элемент';
// const parentEl = document.querySelector('.content');
// parentEl.appendChild(textElm);
// parentEl.remove();


// 4 Задание 
// Создать элемент button, добавить в блок <div class="content"></div>

// const buttonElm = document.createElement('button');
// buttonElm.textContent = 'Счётчик';
// const parentEl = document.querySelector('.content');
// parentEl.appendChild(buttonElm);

// let n = 0;
// buttonElm.onclick = function () {
//     console.log(`Вы нажали на кнопку: ${++n}`);
// };

// При клике на который в консоль
// выводится сколько раз пользователь нажал на данную кнопку

// 5 Задание 
//Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо
// чтобы текст поменялся на “Текст отправлен”

const buttonElm = document.createElement('button');
buttonElm.textContent = 'Счётчик';
const parentEl = document.querySelector('.content');
parentEl.appendChild(buttonElm);

buttonElm.addEventListener("click", () => {
    buttonElm.textContent = 'Текст отправлен';
});