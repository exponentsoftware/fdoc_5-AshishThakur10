//Find the 10 most largest countries

const axios = require('axios')

const API_URL = 'https://restcountries.eu/rest/v2/all'
var resdata;

const getData = async () => {
    const url = API_URL
    const res = await axios.get(url)
  resdata = res.data
 
   //10 most largest countries
const countriesArea = () => {
    const sorted = resdata.sort((a, b) => b.area - a.area).slice(0, 10);
    sorted.map((item, index) => {
      const name = item.name;
      const area = item.area
      console.log(name + ", area = " + area + " sq km");
    })
  };

countriesArea();
}
getData();