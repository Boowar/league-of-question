import ItemService from "../../../api/ItemService";
import { IItem } from "../../../models/IItem";
import {AppDispatch} from "../../index";
import {ItemActionEnum, SetErrorAction, SetItemAction} from './types'

export const ItemActionCreators = {
setItem: (payload: Array<IItem>): SetItemAction => ({type: ItemActionEnum.SET_ITEM, payload}),
setError: (payload: string): SetErrorAction => ({type: ItemActionEnum.SET_ERROR, payload}),
getItems: () => async(dispatch: AppDispatch) => {
    try {
        setTimeout(async () => {
            const response = await ItemService.getItems()
            console.log(response.data)
            dispatch(ItemActionCreators.setItem(response.data))
        }, 1000)
    } catch (e) {
        dispatch(ItemActionCreators.setError("Произошла ошибка"))
    }
}

}