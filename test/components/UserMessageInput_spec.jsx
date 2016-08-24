import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import UserMessageInput from '../../src/components/UserMessageInput';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate} = TestUtils;

describe('UserMessageInput', () => {

    let component;

    describe('Rendering', () => {

        before(() => {
            component = renderIntoDocument(
                <UserMessageInput />
            );
        });

        it('should render an initial blank input box', () => {
            const input = scryRenderedDOMComponentsWithTag(component, 'input');
            expect(input.length).to.equal(1);
        });

        it('should have a placeholder in the input box', () => {
            const input = scryRenderedDOMComponentsWithTag(component, 'input');
            expect(input[0].placeholder).to.contain('Send Drew a message!');
        });

        it('should render a button', () => {
            const button = scryRenderedDOMComponentsWithTag(component, 'button');
            expect(button.length).to.equal(1);
        });

        it('should display text on the button', () => {
            const button = scryRenderedDOMComponentsWithTag(component, 'button');
            expect(button[0].textContent).to.equal('Send');
        });

    });

    describe('Function Callback', () => {

        let messageSent;

        beforeEach(() => {
            messageSent = false;

            const userSendsMessage = () => messageSent = true;

            component = renderIntoDocument(
                <UserMessageInput userSendsMessage={userSendsMessage} />
            );
        });

        it('should expect callback when enter is pressed', () => {
            const input = scryRenderedDOMComponentsWithTag(component, 'input');
            Simulate.keyUp(input[0], {keyCode: 13});

            expect(messageSent).to.be.true;
        });

        it('should not expect callback when a key other then enter is pressed', () => {
            const input = scryRenderedDOMComponentsWithTag(component, 'input');
            for (var i = 0; i < 250; i++) {
                if (i !== 13) {
                    Simulate.keyUp(input[0], {keyCode: i});
                }
            };
            expect(messageSent).to.be.false;
        });

        it('should expect callback when the button is pressed', () => {
            const button = scryRenderedDOMComponentsWithTag(component, 'button');
            Simulate.click(button[0]);

            expect(messageSent).to.be.true;
        });

    });

    describe('Text Entry', () => {

        let input;
        let value;

        beforeEach(() => {
            value = 'test'

            component = renderIntoDocument(
                <UserMessageInput />
            );

            input = scryRenderedDOMComponentsWithTag(component, 'input');

            input[0].value = value;
            Simulate.change(input[0]);
        });

        it('should add text to the input box', () => {
            expect(input[0].value).to.equal(value);
        });
    });

});