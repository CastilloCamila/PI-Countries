import axios from 'axios'
import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL , ADD_ACTIVITY} from './actionTypes.js'

export function getAllCountries(country) {

    return dispatch => {
        return axios.get(`http://localhost:3001/countries`)
            .then(response => dispatch({ type: GET_ALL_COUNTRIES, payload: response.data }))
            .catch(error=>error)
            
    }

}
export function getCountryDetail(id) {
    return dispatch => {
        return axios.get(`http://localhost:3001/countries/${id}`)
            .then(response => dispatch({ type: GET_COUNTRY_DETAIL, payload: response.data }))
            .catch(error=>error)
    }
}
export function AddActivity(data) {
    return dispatch => {
        return axios.post(`http://localhost:3001/activity`, data)
            .then(response => dispatch({ type: ADD_ACTIVITY, payload: response.data }))
            .catch(error=>error)
    }
}