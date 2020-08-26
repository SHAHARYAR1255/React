import {createStore, combineReducers , applyMiddleware} from 'redux';
import { Dishes } from './dishReducer';
import { Comments } from './commentReducer';
import { Promotions } from './promotionReducer';
import { Leaders } from './leaderReducer';
import thunk from 'redux-thunk';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }) ,
        applyMiddleware(thunk)
   );

    return store;
}