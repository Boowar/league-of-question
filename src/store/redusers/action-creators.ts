import { CountActionCreators } from "./counter/action-creators"
import { ItemActionCreators } from "./item/action-creators"

export const allActionCreators = {
    ...ItemActionCreators,
    ...CountActionCreators
}