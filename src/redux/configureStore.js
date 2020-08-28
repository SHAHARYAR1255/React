import {createStore, combineReducers , applyMiddleware} from 'redux';
import { Dishes } from './dishReducer';
import { Comments } from './commentReducer';
import { Promotions } from './promotionReducer';
import { Leaders } from './leaderReducer';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './Form';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback : InitialFeedback
            })
        }) ,applyMiddleware(thunk)
   );

    return store;
}