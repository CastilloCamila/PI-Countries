const axios = require('axios')

const {  Country } = require('../db.js');

function dataBaseLoad() {
    axios.get('https://restcountries.com/v3/all')
      .then(response => {
        let apiCountries = response.data
        apiCountries = response.data.map(country => {
          return country = {
            id: country.cca3,
            name: country.name.common,
            image: country.flags[1],
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : 'The capital of this country is not defined',
            subregion: country.subregion,
            area: country.area,
            population: country.population,
  
          }
        })
        Country.bulkCreate(apiCountries)
  
  
      })
  }
  module.exports= dataBaseLoad
