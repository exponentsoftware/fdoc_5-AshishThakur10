
fetch = require('cross-fetch');

const API_URL = 'https://restcountries.eu/rest/v2/all'

console.log(API_URL)

// fetch('https://restcountries.eu/rest/v2/all')
//   .then(response => response.json())
//   .then(data => console.log(data));

function fetchText() {
     fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => console.log(data));
 
}


fetchText();

