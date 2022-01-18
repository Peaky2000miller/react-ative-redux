import { ADDITION, SUBTRACTION } from "./actionTypes";
import {combineReducers} from 'redux'
const initialState = {
    counter: 0,
    name:'communities',
};

const counter = (state = initialState, action) => {
    switch(action.type) {
        case ADDITION:
            return {...state, counter:state.counter +1};

        case SUBTRACTION:
            return {...state, counter:state.counter -1};

        default:
            return state;
    };
};



export const mainReducer =combineReducers({'counter':counter})