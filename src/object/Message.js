import {List, Map} from 'immutable';

export default function Message(id, drewSaid, text) {
    const message = {id, drewSaid, text};
    return map ? Map(message) : message;
}