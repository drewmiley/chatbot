import * as actions from '../constants/actions';

let messageSelector = null;

export function messageSelector(setMessageSelector) {
    if (!setMessageSelector) {
        return messageSelector;
    }
    messageSelector = setMessageSelector;
}

export function setMood(mood) {
    return {
        type: actions.SET_MOOD,
        mood
    }
}

export function drewSendsMessage(messageHistory) {
    const message = messageSelector ? messageSelector(messageHistory) : null;
    return {
        type: actions.DREW_SENDS_MESSAGE,
        message
    }
}

export function drewStartsTyping() {
    return {
        type: actions.DREW_STARTS_TYPING
    }
}