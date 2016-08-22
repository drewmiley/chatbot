import {List, Map} from 'immutable';

export default function TypingInfo(waitTime, typeTime, typing, running, map) {
    const typingInfo = {waitTime, typeTime, typing, running};
    return map ? Map(typingInfo) : typingInfo;
}