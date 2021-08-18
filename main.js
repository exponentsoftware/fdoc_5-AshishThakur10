fetch = require('cross-fetch');
readline = require('')

const API_URL = 'https://restcountries.eu/rest/v2/all'

console.log(API_URL)

function fetchText() {   // countries API to fetch data about countries
     fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => console.log(data));
 
}


fetchText();

