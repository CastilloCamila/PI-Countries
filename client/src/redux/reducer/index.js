import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_DETAIL,
    ADD_ACTIVITY,
    GET_ALL_ACTIVITIES,
    SEARCH_COUNTRY,
    FILTERED,
    CLEAR_DETAIL
} from "../actions/actionTypes.js";


const incialState = {
    filters: {},
    countryDetail: {},
    activity: {},
    allActivities: {},
    filteredCountries: {},
    countries: {}


}
const reducer = function (state = incialState, { type, payload }) {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,
                filteredCountries: payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: payload
            }
        case ADD_ACTIVITY:
            return {
                ...state,
                activity: payload
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: payload
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                filteredCountries: payload
            }
        case FILTERED:
            return {
                ...state,
                filteredCountries: payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                countryDetail: {}
            }
    
        default:
            return state;
    }
}
export default reducer;