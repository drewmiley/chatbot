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

        it('should be a h4 heading', () => {
            const heading = scryRenderedDOMComponentsWithTag(component, 'h4');

            expect(heading.length).to.equal(1);
        });

        it('should display the text DREW is followed by the mood property value', () => {
            const heading = scryRenderedDOMComponentsWithTag(component, 'h4');

            expect(heading[0].textContent).to.equal('DREW is ' + mood);
        });

    });

});