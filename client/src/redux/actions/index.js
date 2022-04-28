import axios from 'axios'
import GET_ALL_COUNTRIES from './actionTypes.js'

function getAllCountries() {
    return (dispatch)=>{
        return axios.get(`http://localhost:3001/countries`)
        then(response=>dispatch({type:GET_ALL_COUNTRIES, payload:response.data}))
    }
}
