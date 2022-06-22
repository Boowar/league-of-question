import {AppDispatch} from "../../index";
import {AddItemAction, ItemActionEnum, DeductItemAction} from './types'

export const ItemActionCreators = {
addCount: (payload: number): AddItemAction => ({type: ItemActionEnum.ADD_COUNT, payload}),
deductCount: (payload: number): DeductItemAction => ({type: ItemActionEnum.DEDUCT_COUNT, payload})
}