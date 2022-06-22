import { ItemAction, ItemActionEnum, ItemState } from "./types";

const initialState: ItemState = {
    count: 0
}

export default function itemReducer(state = initialState, action: ItemAction): ItemState {
    switch (action.type){
        case ItemActionEnum.ADD_COUNT:
            return {...state,  count: state.count + action.payload}
            case ItemActionEnum.DEDUCT_COUNT:
            return {...state,  count: state.count - action.payload}
        default:
            return state;
    }
}