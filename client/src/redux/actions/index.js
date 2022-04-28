import axios from 'axios'
import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL} from './actionTypes.js'

export function getAllCountries() {
    return dispatch => {
        return axios.get(`http://localhost:3001/countries`)
        .then(response=>dispatch({type:GET_ALL_COUNTRIES, payload:response.data}))
    }
}
export function getCountryDetail(id){
    return dispatch=>{
    return axios.get(`http://localhost:3001/countries/${id}`)
    .then(response=>dispatch({type:GET_COUNTRY_DETAIL, payload:response.data}))
    }
}