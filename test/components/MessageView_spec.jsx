import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag,
    Simulate} = TestUtils;

import MessageView from '../../src/components/MessageView';

describe('MessageView', () => {

    describe('Rendering', () => {

        const text = 'I am a test';

        it('renders an item', () => {
            const component = renderIntoDocument(
                <MessageView />
            );

            const messageView = scryRenderedDOMComponentsWithTag(component, 'li');

            expect(messageView.length).to.equal(1);

        });

        it('renders your message as YOU : followed by your message', () => {
            const component = renderIntoDocument(
                <MessageView drewSaid={false} text={text} />
            );

            const messageViewLabel = scryRenderedDOMComponentsWithTag(component, 'label');

            expect(messageViewLabel[0].textContent).to.equal('YOU : ' + text);
        });

        it('renders Drew\'s message as DREW : followed by his message', () => {
            const component = renderIntoDocument(
                <MessageView drewSaid={true} text={text} />
            );

            const messageViewLabel = scryRenderedDOMComponentsWithTag(component, 'label');

            expect(messageViewLabel[0].textContent).to.equal('DREW : ' + text);
        });

    });

});