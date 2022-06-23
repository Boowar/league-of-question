export interface ItemState {
    name: string;
    count: number;
}

export enum ItemActionEnum {
    ADD_COUNT = "ADD_COUNT",
    DEDUCT_COUNT = "DEDUCT_COUNT",
    SET_ERROR = "SET_ERROR"
}

export interface AddItemAction {
    type: ItemActionEnum.ADD_COUNT;
    payload: number;
}

export interface DeductItemAction {
    type: ItemActionEnum.DEDUCT_COUNT;
    payload: number;
}

export interface SetErrorAction {
    type: ItemActionEnum.SET_ERROR;
    payload: string;
}

export type ItemAction = 
    AddItemAction | 
    DeductItemAction |
    SetErrorAction