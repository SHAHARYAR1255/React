import {createStore, combineReducers , applyMiddleware} from 'redux';
import { Dishes } from './dishReducer';
import { Comments } from './commentReducer';
import { Promotions } from './promotionReducer';
import { Leaders } from './leaderReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }) ,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, logger)
   );

    return store;
}