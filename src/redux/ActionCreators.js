import * as ActionsTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type : ActionsTypes.ADD_COMMENT ,
    payload : {
        dishId ,
        rating ,
        author ,
        comment
    }
});
