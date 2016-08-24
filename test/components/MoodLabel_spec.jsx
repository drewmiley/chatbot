import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag} = TestUtils;

import MoodLabel from '../..//src/components/MoodLabel';

describe('MoodLabel', () => {

    describe('Rendering', () => {

        let component;
        const mood = 'testing';

        before(() => {
            component = renderIntoDocument(
                <MoodLabel mood={mood} />
            );            
        })

        it('should be a label', () => {
            const label = scryRenderedDOMComponentsWithTag(component, 'label');

            expect(label.length).to.equal(1);
        });

        it('should display the text DREW is followed by the mood property value', () => {
            const label = scryRenderedDOMComponentsWithTag(component, 'label');

            expect(label[0].textContent).to.equal('DREW is ' + mood);
        });

    });

});