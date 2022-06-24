import { IItem } from "../../../models/IItem";

export interface ItemState {
    items: IItem[];
}

export enum ItemActionEnum {
    ADD_ITEM = "ADD_ITEM",
    DEL_ITEM = "DEL_ITEM",
    SET_ITEM = "SET_ITEM",
    SET_ERROR = "SET_ERROR"
}

export interface SetItemAction {
    type: ItemActionEnum.SET_ITEM;
    payload: Array<IItem> | [];
}

export interface AddItemAction {
    type: ItemActionEnum.ADD_ITEM;
    payload: Array<IItem> | [];
}

export interface DelItemAction {
    type: ItemActionEnum.DEL_ITEM;
    payload: Array<IItem> | [];
}

export interface SetErrorAction {
    type: ItemActionEnum.SET_ERROR;
    payload: string;
}

export type ItemAction = 
    SetItemAction |
    AddItemAction | 
    DelItemAction |
    SetErrorAction