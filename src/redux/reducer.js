import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/Comments';
import {LEADERS} from '../shared/Leader';
import { PROMOTIONS } from '../shared/Promotion';

export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    promotions : PROMOTIONS,
    leaders : LEADERS
};

export const Reducer = (state= initialState , action) =>{
    return state ;
};