import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL} from "../actions/actionTypes.js";

const incialState={
    countries:{},
    countryDetail:{}
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
        default:
            return state;
    }
}
export default reducer;