import {assert, expect} from 'chai';

import RandomPictureLocation from '../../src/logic/RandomPictureLocation';

describe('RandomPictureLocation', () => {

    let randomMessage;
    const testRuns = 1000;

    it('should return a string', () => {
        for (var i = 0; i < testRuns.length; i++) {
            randomMessage = new RandomPictureLocation();
            expect(typeof randomMessage === 'string').to.be.true;
        }
    });

    it('should be a non-empty string', () => {
        for (var i = 0; i < testRuns.length; i++) {
            randomMessage = new RandomPictureLocation();
            expect(randomMessage.length).to.be.at.least(0);
        }
    });

    it('should end with .jpg', () => {
        for (var i = 0; i < testRuns.length; i++) {
            randomMessage = new RandomPictureLocation();
            expect(randomMessage.substring(randomMessage.length - 5, randomMessage.length - 1)).to.equal('.jpg');
        }
    });

    it('should start with ./images/', () => {
        for (var i = 0; i < testRuns.length; i++) {
            randomMessage = new RandomPictureLocation();
            expect(randomMessage.substring(0, 8)).to.equal('./images/');
        }
    });

});