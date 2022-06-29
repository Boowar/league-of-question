export interface CountState {
    count: number;
}

export enum CountActionEnum {
    INC_COUNT = "INC_COUNT",
    DEC_COUNT = "DEC_COUNT",
    SET_COUNT = "SET_COUNT",
    SET_ERROR = "SET_ERROR"
}

export interface IncCountAction {
    type: CountActionEnum.INC_COUNT;
    payload: number;
}

export interface SetCountAction {
    type: CountActionEnum.SET_COUNT;
    payload: number;
}

export interface DecCountAction {
    type: CountActionEnum.DEC_COUNT;
    payload: number;
}

export interface SetErrorAction {
    type: CountActionEnum.SET_ERROR;
    payload: string;
}

export type CountAction = 
    IncCountAction |
    SetCountAction | 
    DecCountAction |
    SetErrorAction