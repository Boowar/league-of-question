import { CountAction, CountActionEnum, CountState } from "./types";

const initialState: CountState = {
    count: 0
}

export default function itemReducer(state = initialState, action: CountAction): CountState {
    switch (action.type){
        case CountActionEnum.INC_COUNT:
            return {...state,  count: state.count + action.payload}
        case CountActionEnum.DEC_COUNT:
            return {...state,  count: state.count - action.payload}
        default:
            return state;
    }
}