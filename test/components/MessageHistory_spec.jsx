import {expect} from 'chai';
import {List, Map} from 'immutable';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate} = TestUtils;

import MessageHistory from '../../src/components/MessageHistory';

describe('MessageHistory', () => {

    describe('Rendering', () => {

        it('renders a list of the message history', () => {
            const messageHistory = List.of(
                Map({id: 1, drewSaid: true, text: 'hey'}),
                Map({id: 2, drewSaid: false, text: 'test'})
            )
            const component = renderIntoDocument(
                <MessageHistory messageHistory={messageHistory} />
            );
            const messageHistoryList = scryRenderedDOMComponentsWithTag(component, 'li');

            expect(messageHistoryList.length).to.equal(messageHistory.size);
        });

    });

});