import axios, {AxiosResponse} from "axios";
import {IItem} from "../models/IItem";

export default class ItemService {
    static async getItems(): Promise<AxiosResponse<IItem[]>> {
        return axios.get<IItem[]>('./items.json')
    }
}