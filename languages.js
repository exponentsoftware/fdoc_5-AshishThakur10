const axios =require('axios')

const API_URL = 'https://restcountries.eu/rest/v2/all'

   //  fetch data of countries
    // const response = fetch(API_URL)
   // .then(response => response.json())
    //.then(data => console.log(data))



var resdata;

const getData = async () => {
    const url = API_URL
    const arr = [];
    const arr2 = [];
    const res = await axios.get(url)
  resdata = res.data
 

// all languages in an array
const getAllLaunguage = () => {
  resdata.map((item, index) => {
    const lang = item.languages.map((language) => language.name);
    arr.push(lang);
  });

  arr.map((item, index) => {
    const newArray = [...item];
    console.log(newArray);
    return newArray;
  });
};
      
     getAllLaunguage()




}

getData();
