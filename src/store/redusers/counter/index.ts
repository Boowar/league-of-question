import { CountAction, CountActionEnum, CountState } from "./types";

const initialState: CountState = {
    id: '',
    count: 0
}

export default function itemReducer(state = initialState, action: CountAction): CountState {
    switch (action.type){
        case CountActionEnum.SET_COUNT:
            console.log('SET_COUNT state.count', state.count)
            console.log('SET_COUNT action.payload', action.payload)
            console.log('SET_COUNT state', state)
            return {...state, id: action.payload.id, count: action.payload.count}
        case CountActionEnum.INC_COUNT:
            console.log('INC_COUNT state.count', state.count)
            console.log('INC_COUNT action.payload', action.payload)
            console.log('INC_COUNT state', state)
            return {...state,  count: state.count + action.payload.count}
        case CountActionEnum.DEC_COUNT:
            return {...state,  count: state.count - action.payload}
        default:
            return state;
    }
}