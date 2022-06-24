import { ItemAction, ItemActionEnum, ItemState } from "./types";

const initialState: ItemState = {
    items:[]
}

export default function itemReducer(state = initialState, action: ItemAction): ItemState {
    switch (action.type){
        case ItemActionEnum.ADD_ITEM:
            return {...state,  }
        case ItemActionEnum.DEL_ITEM:
            return {...state,  }
            case ItemActionEnum.SET_ITEM:
            return {...state,  items: action.payload}
        default:
            return state;
    }
}