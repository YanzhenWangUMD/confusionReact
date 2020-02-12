import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    selectedDish: null
}

// This Reducer will receive the current state and action. You can not change the state, but you can make the immutable changes and return the state

// state= initialState: if the state is not defined, then the state is initialized
export const Reducer = (state = initialState, action) =>{

    return state;
}