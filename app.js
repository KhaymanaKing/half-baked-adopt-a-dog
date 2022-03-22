import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';
// import { dogSearch } from './fetch-utils.js';

// const form = document.querySelector('form');
const dogListContainer = document.getElementById('dog-list-container');

// on load


window.addEventListener('load', async() => {
    const dogs = await getDogs();

    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);

        dogListContainer.append(dogEl);

        console.log(dogs);
    }
});


