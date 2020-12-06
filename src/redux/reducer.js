import {ADD_ITEM, DELETE_ITEM, SEARCH,GET_ITEM} from './action_type'

let initState = {
    item:{
       col1:[],
       col2:[]
     }
 };
export default function operateCount(preState=initState, action){
    const {type,data} = action
    let newState
    switch (type) {
        case SEARCH:
            newState =  preState + data
            return newState;
        case ADD_ITEM:
            console.log('this is data from add',data)
            let col = data.group;
            let itemArray=[...preState.item[col]];
            itemArray.unshift(data);
            preState.item[col] =  itemArray;
            newState = Object.assign({}, preState)
            return newState;  
        case DELETE_ITEM:
            newState =  preState
            return newState;  
        case GET_ITEM:
            console.log('this is data from get',data)
            newState =  data
            return newState;                
        default:
        return preState
    }
}