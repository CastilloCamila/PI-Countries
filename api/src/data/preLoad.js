const axios = require('axios')

const { Country, Activity } = require('../db.js');

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
function loadActivities() {
  const act1={
    name: "correr",
    difficulty: "2",
    duration: "1 hour",
    season: "Winter",
    countries:["BWA", "ARG"]

  }
  const act2={
    name: "caminar",
    difficulty: "2",
    duration: "1 hour",
    season: "Winter",
    countries:["ARG"]

  }
  const array=[act1,act2]
  Activity.bulkCreate(array)
}
module.exports = {dataBaseLoad,loadActivities}
