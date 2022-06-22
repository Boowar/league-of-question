export interface ItemState {
    count: number;
}

export enum ItemActionEnum {
    ADD_COUNT = "ADD_COUNT",
    DEDUCT_COUNT = "DEDUCT_COUNT"
}

export interface AddItemAction {
    type: ItemActionEnum.ADD_COUNT;
    payload: number;
}

export interface DeductItemAction {
    type: ItemActionEnum.DEDUCT_COUNT;
    payload: number;
}

export type ItemAction = 
    AddItemAction | DeductItemAction