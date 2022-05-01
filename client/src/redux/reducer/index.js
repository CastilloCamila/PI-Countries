import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, ADD_ACTIVITY} from "../actions/actionTypes.js";

const incialState={
    countryDetail:{},
    activity:{},
    countries:{}
    
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
        default:
            return state;
    }
}
export default reducer;