import {expect} from 'chai';
import {Map} from 'immutable';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag} = TestUtils;

import TypingInfo from '../../src/components/TypingInfo';

describe('TypingInfo', () => {

    let component;

    describe('Rendering', () => {

        it('should render a div', () => {
            component = renderIntoDocument(
                <TypingInfo typingState={Map()}/>
            );

            const div = scryRenderedDOMComponentsWithTag(component, 'div');

            expect(div.length).to.equal(1);
        });

        it('should display a text message if DREW is typing', () => {
            const typingState = Map({typing: true});

            component = renderIntoDocument(
                <TypingInfo typingState={typingState}/>
            );
          
            const heading = scryRenderedDOMComponentsWithTag(component, 'h4');

            expect(heading[0].textContent).to.equal('DREW is typing a message...');
        });

    });

    describe('Function Callback', () => {

        let clock;
        let time;

        beforeEach(() => {
            time = 5000;
            clock = sinon.useFakeTimers();
        });

        it('should callback to start typing after the wait time', () => {
            const typingState = Map({waitTime: time, typeTime: time, typing: false, running: true})

            var typing = false;
            const drewStartsTyping = () => typing = true;
            const component = renderIntoDocument(
                <TypingInfo drewStartsTyping={drewStartsTyping} typingState={typingState} />
            );

            clock.tick(time + 1);

            expect(typing).to.be.true;
        });

        it('should callback to send a message after the type time', () => {
            const typingState = Map({waitTime: time, typeTime: time, typing: true, running: true})

            var messageSent = false;
            const drewSendsMessage = () => messageSent = true;
            const component = renderIntoDocument(
                <TypingInfo drewSendsMessage={drewSendsMessage} typingState={typingState} />
            );

            clock.tick(time + 1);

            expect(messageSent).to.be.true;
        });

    });

});