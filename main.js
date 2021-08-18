fetch = require('cross-fetch');

const API_URL = 'https://restcountries.eu/rest/v2/all'

async function fetchText() { 
    const data       //  fetch data of countries
     const response = fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data))

    const{area} = await response.json();
    console.log(area);
 
}


fetchText(); 

//How many languages are there in the countries API

