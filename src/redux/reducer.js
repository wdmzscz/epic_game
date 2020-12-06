import {ADD_ITEM, DELETE_ITEM, SEARCH} from './action_type'

let initState = 0;
export default function operateCount(preState=initState, action){
    const {type,data} = action
    let newState
    switch (type) {
        case SEARCH:
            newState =  data
            return newState;
        case ADD_ITEM:
            newState =  data
            return newState;  
        case DELETE_ITEM:
            newState =  data
            return newState;                
        default:
            break;
    }
}