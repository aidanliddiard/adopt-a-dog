import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs
// render and append all dog cards to the container

async function fetchdogs() {
    const dogs = await getDogs();
    console.log(dogs);

    for (let dog of dogs) {
        const li = renderDogCard(dog);
        dogListContainer.append(li);
    }
}

fetchdogs();