import { FETCH_WEATHER } from '../actions/index';

export default function(state = [],action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);
            return !action.payload.data?state:[ action.payload.data, ...state ]; // [city,city,city] ES6 return an entirely new array instead of manipulating it.
    }
    return state;
} 