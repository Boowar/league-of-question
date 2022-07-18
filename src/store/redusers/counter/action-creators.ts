import {SetCountAction, IncCountAction, CountActionEnum, DecCountAction, SetErrorAction} from './types'

export const CountActionCreators = {

setCount: (payload: any): SetCountAction => ({type: CountActionEnum.SET_COUNT, payload}),
incCount: (payload: any): IncCountAction => ({type: CountActionEnum.INC_COUNT, payload}),
decCount: (payload: number): DecCountAction => ({type: CountActionEnum.DEC_COUNT, payload}),
setError: (payload: string): SetErrorAction => ({type: CountActionEnum.SET_ERROR, payload})
}