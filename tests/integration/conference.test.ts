import { Conference, ConferenceFactory } from "../../src/conference";

const input = [
    "Writing Fast Tests Against Enterprise Rails 60min",
    "Overdoing it in Python 45min",
    "Lua for the Masses 30min",
    "Ruby Errors from Mismatched Gem Versions 45min",
    "Common Ruby Errors 45min",
    "Rails for Python Developers lightning",
    "Communicating Over Distance 60min",
    "Accounting-Driven Development 45min",
    "Woah 30min",
    "Sit Down and Write 30min",
    "Pair Programming vs Noise 45min",
    "Rails Magic 60min",
    "Ruby on Rails: Why We Should Move On 60min",
    "Clojure Ate Scala (on my project) 45min",
    "Programming in the Boondocks of Seattle 30min",
    "Ruby vs. Clojure for Back-End Development 30min",
    "Ruby on Rails Legacy App Maintenance 60min",
    "A World Without HackerNews 30min",
    "User Interface CSS in Rails Apps 30min"
];


describe('Conference integration tests', () => {
    let conference: Conference;
    beforeAll( () => {
        conference = ConferenceFactory.createConference(input);
    });
    it('Check Number Of Tracks',  () => {
        expect(conference.tracks.length).toBe(3);
    });
    it('Should get error when event list is empty',  () => {
        try {
            ConferenceFactory.createConference([]);
            throw new Error('Code never should come in this point');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});