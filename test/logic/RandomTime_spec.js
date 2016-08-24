import {expect} from 'chai';

import RandomTime from '../../src/logic/RandomTime';

describe('RandomTime', () => {

    it('should return an integer value between 1000 and 4999 inclusive', () => {
        let randomTime;

        const testRuns = 1000;

        for (var i = 0; i < testRuns; i++) {
            randomTime = RandomTime();
            expect(randomTime).to.be.within(1000, 4999);
        }
    })

});