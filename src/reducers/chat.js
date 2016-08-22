import {List, Map} from 'immutable';

import * as actions from '../constants/actions';

function getNextID(state, accessor, initialValue) {
    let nextId = initialValue === parseInt(initialValue, 10) ? initialValue : 0;
    if (state.get(accessor).size > 0 && nextId <= state.get(accessor).map(item => item.get('id')).max()) {
        nextId = state.get(accessor).map(item => item.get('id')).max() + 1;
    } else {
        nextId++;
    }
    return nextId;
}

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

function receiveDrewsMessage(state, drewsMessage) {
    if (!drewsMessage) {
        return state;
    }

    const nextId = getNextID(state, 'messageHistory');
    const message = { 
        id: nextId,
        drewSaid: true,
        text: drewsMessage
    }
    return state.update('messageHistory', messageHistory => messageHistory.push(Map(message)))
        .update('typingInfo', typingInfo => typingInfo.set('typing', false).set('running', false));
}

function startDrewTyping(state) {
    return state.update('typingInfo', typingInfo => typingInfo.set('typing', true));
}

export default function(state = Map(), action) {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        case actions.SET_MOOD:
            return setMood(state, action.mood);
        case actions.DREW_SENDS_MESSAGE:
            return receiveDrewsMessage(state, action.message);
        case actions.DREW_STARTS_TYPING:
            return startDrewTyping(state);
        default:
            return state;
    }
    return state;
}