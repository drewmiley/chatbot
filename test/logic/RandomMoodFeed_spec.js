import {expect} from 'chai';

import sinon from 'sinon';

import RandomMoodFeed from '../../src/logic/RandomMoodFeed';

describe('RandomMoodFeed', () => {

    let setMoodSpy;
    let clock;

    beforeEach(() => {
        setMoodSpy = sinon.spy();
        clock = sinon.useFakeTimers();
        RandomMoodFeed(setMoodSpy);
    });

    afterEach(() => {
        clock.restore();
    });

    it('should be called at random intervals of less than 8 seconds', () => {
        clock.tick(8000);
        expect(setMoodSpy.callCount).to.be.at.least(1);
    });

    it('should be called at random intervals of more than 3 seconds', () => {
        clock.tick(3000);
        expect(setMoodSpy.callCount).to.equal(0);
    });

    it('should call the setMood function with a random mood each time', () => {
        clock.tick(65000);

        let mood;
        setMoodSpy.args.forEach(arg => {
            expect(arg[0]).to.not.equal(mood, 'This failure is probably due to random strings being selected consecutively; please re-run');
            mood = arg[0];
        });
    });

});