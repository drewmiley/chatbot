import {List, Map} from 'immutable';

import * as actions from '../constants/actions';

function setState(state, newState) {
    if (!newState) {
        return state;
    }
    return state.mergeDeep(newState);
}

function setMood(state, mood) {
    if (!mood) {
        return state;
    }
    return state.set('mood', mood);
}

export default function(state = Map(), action) {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        case actions.SET_MOOD:
            return setMood(state, action.mood);
        default:
            return state;
    }
    return state;
}