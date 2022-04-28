import { GET_ALL_COUNTRIES } from "../actions/actionTypes";
const incialState={

}
const reducer= function  (state= incialState, {type,payload})  {
    switch (type) {
        case GET_ALL_COUNTRIES:
            
            break;
    
        default:
            return state;
    }
}
export default reducer;