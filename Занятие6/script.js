const heading = document.querySelectorAll('.title');
const text = document.querySelectorAll('.text')

const heading3 = document.querySelector('#heading')
const heading2 = document.getElementById('heading');

const listEls = document.getElementsByClassName('list');
const listElsQS = document.querySelectorAll('.list');

const tagName = document.getElementsByTagName('p');

const heading4 = document.createElement('h3');
heading4.textContent = 'hello, world!';

heading[0].textContent = 'hello, JS!';

const delHeading = document.querySelector('#heading');
delHeading.remove();


const textElm = document.createElement('p');
textElm.textContent = 'I frequently fall, but i always stand up';

const parentEl = document.createElement('div');
parentEl.classList.add('content')

document.body.appendChild(parentEl);

const buttonEl = document.querySelector('[type="button"]');
const parentEl2 = document.querySelector('.content');

buttonEl.onclick = function () {
    buttonEl.textContent = 'Товар в корзине';
    parentEl2.appendChild(textElm);
};

const imgEl = document.querySelector('.img')
imgEl.onclick = function () {
    imgEl.src = 'newphoto.jpg';
};

