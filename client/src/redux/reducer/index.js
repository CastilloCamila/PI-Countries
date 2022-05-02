import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, ADD_ACTIVITY, GET_ALL_ACTIVITIES, SEARCH_COUNTRY} from "../actions/actionTypes.js";


const incialState={
    countryDetail:{},
    activity:{},
    allActivities:{},
    countries:{},
    search:{}
    
}
const reducer= function  (state= incialState, {type,payload})  {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return{
            ...state,
                countries:payload
            }
        case GET_COUNTRY_DETAIL:
            return{
                ...state,
                countryDetail: payload
            }
        case ADD_ACTIVITY:
            return{
                ...state,
                activity:payload
            }
        case GET_ALL_ACTIVITIES:
            return{
                ...state,
                allActivities:payload
            }
        case SEARCH_COUNTRY:
            return{
                ...state,
                search:payload
            }

        default:
            return state;
    }
}
export default reducer;