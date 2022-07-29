import { IItem } from "../../../models/IItem";

export interface ItemState {
    items: IItem[];
}

export enum ItemActionEnum {
    ADD_ITEM = "ADD_ITEM",
    DEL_ITEM = "DEL_ITEM",
    SET_ITEM = "SET_ITEM",
    SET_ERROR = "SET_ERROR",
    INC_COUNT_ITEM = "INC_COUNT_ITEM",
    DEC_COUNT_ITEM = "DEC_COUNT_ITEM"
}

export interface SetItemAction {
    type: ItemActionEnum.SET_ITEM;
    payload: IItem[] | [];
}

export interface AddItemAction {
    type: ItemActionEnum.ADD_ITEM;
    payload: string;
}

export interface DelItemAction {
    type: ItemActionEnum.DEL_ITEM;
    payload: Array<IItem> | [] | any;
}

export interface SetErrorAction {
    type: ItemActionEnum.SET_ERROR;
    payload: string;
}

export interface IncCountItemAction {
    type: ItemActionEnum.INC_COUNT_ITEM;
    payload: Array<IItem> | [] | number | string;
}

export interface DecCountItemAction {
    type: ItemActionEnum.DEC_COUNT_ITEM;
    payload: Array<IItem> | [] | number | string;
}

export type ItemAction = 
    SetItemAction  |
    AddItemAction  | 
    DelItemAction  |
    SetErrorAction |
    IncCountItemAction |
    DecCountItemAction