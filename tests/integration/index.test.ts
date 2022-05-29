import { ConferenceFactory } from '../../src/conference';
import { main } from '../../src/index';

describe('Integration tests', () => {

    const conferenceFactorySpy = jest.spyOn(ConferenceFactory, 'createConference');
    console.log = jest.fn();

    beforeAll(() => {
        main();
    });
    
    it('Check ConferenceFactory Called', () => {
        expect(conferenceFactorySpy).toHaveBeenCalled();
    });
    it('Check Print Called', () => {
        expect(console.log).toHaveBeenCalled();
    });

});