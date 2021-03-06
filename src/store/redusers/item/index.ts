import { IItem } from "../../../models/IItem";
import { ItemAction, ItemActionEnum, ItemState } from "./types";

const initialState: ItemState = {
    items:[{id: '', name: '', count: 0}]
}

export default function itemReducer(state = initialState, action: ItemAction): ItemState {
    switch (action.type){
        case ItemActionEnum.ADD_ITEM:
            const newItem = {id: state.items.length + 1, name: action.payload, count:0}
            console.log('state!@',state)
            return {...state,  items: [...state.items, newItem]}
        case ItemActionEnum.DEL_ITEM:
            console.log('delItem', action.payload)
            return {...state,  items: state.items.filter(item => item.id !== action.payload.id)}
        case ItemActionEnum.SET_ITEM:
            return {...state,  items: action.payload}
        case ItemActionEnum.INC_COUNT_ITEM:
            return {...state, items: state.items.map((item) => item.id === action.payload ? 
            {...item, count: item.count + 1}: item)}
        case ItemActionEnum.DEC_COUNT_ITEM:
            return {...state, items: state.items.map((item) => item.id === action.payload ? 
            {...item, count: item.count - 1}: item)}
        default:
            return state;
    }
}