import { numbersWithCommas } from "./utils.js";

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];

// fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));    // You have to spread the data (...)


// My tries to rewrite the fetch

async function getCities() {
    const res = await fetch(endpoint);
    const data = await res.json();
    const cities = [...data];
    console.log(cities);

    // to Display it, target the area, and innerHTML to it.
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
  <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numbersWithCommas(place.population)}</span>
</li>
  `
    }).join('');
    suggestions.innerHTML = html;
}


function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex);
    })
}


/*
function dispayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
    <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numbersWithCommas(place.population)}</span>
</li>
    `
    }).join('');
    suggestions.innerHTML = html;
}
*/

// searchInput.addEventListener('change', dispayMatches);
// searchInput.addEventListener('keyup', dispayMatches);


searchInput.addEventListener('change', getCities);
searchInput.addEventListener('keyup', getCities);

/*
Source: https://www.youtube.com/watch?v=y4gZMJKAeWs&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=6&ab_channel=WesBos
 */