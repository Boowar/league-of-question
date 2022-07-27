import { CountAction, CountActionEnum, CountState } from "./types";

const initialState: CountState = {
    id: '',
    count: 0
}

export default function itemReducer(state = initialState, action: CountAction): CountState {
    switch (action.type){
        case CountActionEnum.SET_COUNT:
            return {...state, id: action.payload.id, count: action.payload.count}
        case CountActionEnum.INC_COUNT:
            return {...state,  count: state.count + action.payload.count}
        case CountActionEnum.DEC_COUNT:
            return {...state,  count: state.count - action.payload}
        default:
            return state;
    }
}