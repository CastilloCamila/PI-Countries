import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, ADD_ACTIVITY, GET_ALL_ACTIVITIES, SEARCH_COUNTRY} from "../actions/actionTypes.js";


const incialState={
    search:{
        //[{
    //     id: 'BWA',
    //     name: 'Botswana',
    //     image: 'https://flagcdn.com/w320/bw.png',
    //     continent: 'Africa',
    //     capital: 'Gaborone',
    //     subregion: 'Southern Africa',
    //     area: 582000,
    //     population: 2351625,
    //     createdAt: '2022-05-02T19:35:35.982Z',
    //     updatedAt: '2022-05-02T19:35:35.982Z'
    //   },
    //   {
    //     id: 'MKD',
    //     name: 'North Macedonia',
    //     image: 'https://flagcdn.com/w320/mk.png',
    //     continent: 'Europe',
    //     capital: 'Skopje',
    //     subregion: 'Southeast Europe',
    //     area: 25713,
    //     population: 2077132,
    //     createdAt: '2022-05-02T19:35:35.982Z',
    //     updatedAt: '2022-05-02T19:35:35.982Z'
    //   }]
    },
    countryDetail:{},
    activity:{},
    allActivities:{},
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