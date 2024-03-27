"use strick";

const mainEl = document.createElement('main');
mainEl.classList.add('mainEl');
document.body.appendChild(mainEl);

const newData = JSON.parse(data);

newData.forEach(user => {
    mainEl.insertAdjacentHTML('beforeend', `
        <div class = 'wrapper'>
            <h2>${user.name.first}</h2>
            <h2>${user.name.last}</h2>
            <p>${user.email}</p>
            <p>${user.location.city}</p>
            <a href="tel:+${user.phone}">${user.phone}</a>
        </div>
    `);
});