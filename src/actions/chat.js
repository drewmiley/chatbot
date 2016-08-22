import * as actions from '../constants/actions';

export function setMood(mood) {
    return {
        type: actions.SET_MOOD,
        mood
    }
}