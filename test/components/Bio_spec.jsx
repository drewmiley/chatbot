import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag} = TestUtils;

import Bio from '../..//src/components/Bio';

describe('Bio', () => {

    describe('Rendering', () => {

        let component;
        const bio = 'testing';

        before(() => {
            component = renderIntoDocument(
                <Bio bio={bio} />
            );            
        })

        it('should display the text bio', () => {
            const span = scryRenderedDOMComponentsWithTag(component, 'span');

            expect(span.length).to.equal(1);
            expect(span[0].textContent).to.equal(bio);
        });

    });

});