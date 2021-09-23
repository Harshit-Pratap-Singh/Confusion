import { combineReducers, createStore } from "redux"
import { Dishes } from "./Dishes"
import { Promotions } from "./Promotions"
import { Leaders } from "./Leaders"
import { Comments } from "./Comments"


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            promotions: Promotions,
            comments: Comments,
        })
    );

    return store;
}