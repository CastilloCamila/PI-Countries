import axios from 'axios'
import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL , ADD_ACTIVITY,GET_ALL_ACTIVITIES, FILTERED,UPDATE_PAGE, CLEAR_DETAIL} from './actionTypes.js'

export function getAllCountries() {

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
export function getAllActivities() {
    return dispatch=>{
        return axios.get(`http://localhost:3001/activity/allActivities`)
        .then(response=> dispatch({type:GET_ALL_ACTIVITIES, payload:response.data}))
        .catch(error=>error)
    }
    
}

export function filtered(payload){
    return{
        type:FILTERED,
        payload:payload
    }
}
export function updatePage(payload){
    return{
        type:UPDATE_PAGE,
        payload:payload
    }
}

export function cleartDetail(){
    return{
        type:CLEAR_DETAIL
    }
}