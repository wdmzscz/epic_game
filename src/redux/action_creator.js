import {SEARCH, DELETE_ITEM, ADD_ITEM} from './action_type';

export const searchAction = value=>({type:SEARCH,data:value});
export const deleteItemAction = value=>({type:DELETE_ITEM,data:value});
export const addItemAction = value=>({type:ADD_ITEM,data:value});