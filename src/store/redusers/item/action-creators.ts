import ItemService from "../../../api/ItemService";
import {AppDispatch} from "../../index";
import {AddItemAction, ItemActionEnum, DeductItemAction, SetErrorAction} from './types'

export const ItemActionCreators = {
addCount: (payload: number): AddItemAction => ({type: ItemActionEnum.ADD_COUNT, payload}),
deductCount: (payload: number): DeductItemAction => ({type: ItemActionEnum.DEDUCT_COUNT, payload}),
setError: (payload: string): SetErrorAction => ({type: ItemActionEnum.SET_ERROR, payload}),
getItems: (name: string, count: number) => async(dispatch: AppDispatch) => {
    try {
        console.log("start")
        setTimeout(async () => {
            const response = await ItemService.getItems()
            console.log(response)
        }, 1000)
    } catch (e) {
        dispatch(ItemActionCreators.setError("Произошла ошибка"))
    }
}

}